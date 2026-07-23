import { getStore } from "@netlify/blobs";
import { isAdmin, isSameOrigin } from "../lib/cms-auth.ts";
import { json } from "../lib/cms-response.ts";

const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);
const MAX_SIZE = 4 * 1024 * 1024;

export default async (request: Request) => {
  if (request.method !== "POST") return json({ error: "Method not allowed." }, 405);
  if (!isAdmin(request)) return json({ error: "Authentication required." }, 401);
  if (!isSameOrigin(request)) return json({ error: "Invalid request origin." }, 403);

  const slug = new URL(request.url).searchParams.get("slug") || "";
  const contentType = request.headers.get("content-type")?.split(";")[0] || "";
  const contentLength = Number(request.headers.get("content-length") || 0);

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    return json({ error: "Invalid programme URL." }, 400);
  }
  if (!ALLOWED_TYPES.has(contentType)) {
    return json({ error: "Use a JPG, PNG, or WebP image." }, 415);
  }
  if (contentLength > MAX_SIZE) {
    return json({ error: "Image must be smaller than 4 MB." }, 413);
  }

  const image = await request.arrayBuffer();
  if (!image.byteLength || image.byteLength > MAX_SIZE) {
    return json({ error: "Image must be smaller than 4 MB." }, 413);
  }

  await getStore("utagba-cms-images").set(`programme/${slug}`, image, {
    metadata: { contentType, updatedAt: new Date().toISOString() },
  });

  return json({
    success: true,
    url: `/api/programme-image?slug=${encodeURIComponent(slug)}&v=${Date.now()}`,
  });
};

export const config = { path: "/api/admin/programme-image" };
