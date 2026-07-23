import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

function localContactFunction(mode: string) {
  return {
    name: 'local-contact-function',
    configureServer(server) {
      Object.assign(process.env, loadEnv(mode, process.cwd(), ''))

      server.middlewares.use('/api/contact', async (request, response) => {
        const chunks: Buffer[] = []

        for await (const chunk of request) {
          chunks.push(Buffer.from(chunk))
        }

        const headers = new Headers()
        for (const [name, value] of Object.entries(request.headers)) {
          if (Array.isArray(value)) {
            value.forEach((item) => headers.append(name, item))
          } else if (value !== undefined) {
            headers.set(name, value)
          }
        }

        const method = request.method || 'GET'
        const module = await server.ssrLoadModule('/netlify/functions/contact.mts')
        const result: Response = await module.default(
          new Request(`http://${request.headers.host}/api/contact`, {
            method,
            headers,
            body:
              method === 'GET' || method === 'HEAD'
                ? undefined
                : Buffer.concat(chunks),
          }),
        )

        response.statusCode = result.status
        result.headers.forEach((value, name) => response.setHeader(name, value))
        response.end(Buffer.from(await result.arrayBuffer()))
      })
    },
  }
}

export default defineConfig(({ mode }) => ({
  plugins: [
    figmaAssetResolver(),
    localContactFunction(mode),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
}))
