import { getStore } from "@netlify/blobs";

export default async (request: Request) => {
  if (request.method !== "GET") return new Response("Method not allowed.", { status: 405 });

  const slug = new URL(request.url).searchParams.get("slug") || "";
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    return new Response("Invalid image.", { status: 400 });
  }

  const entry = await getStore("utagba-cms-images").getWithMetadata(
    `programme/${slug}`,
    { type: "arrayBuffer" },
  );

  if (!entry?.data) return new Response("Image not found.", { status: 404 });

  return new Response(entry.data, {
    headers: {
      "content-type": String(entry.metadata?.contentType || "image/jpeg"),
      "cache-control": "public, max-age=31536000, immutable",
    },
  });
};

export const config = { path: "/api/programme-image" };
