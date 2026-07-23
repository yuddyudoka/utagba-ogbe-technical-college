import { getStore } from "@netlify/blobs";
import { json } from "../lib/cms-response.ts";

export default async (request: Request) => {
  if (request.method !== "GET") return json({ error: "Method not allowed." }, 405);

  const value = await getStore("utagba-cms").get("programmes", {
    consistency: "strong",
  });

  if (!value) return json({ programmes: null });

  try {
    return json(
      { programmes: JSON.parse(value) },
      200,
      { "cache-control": "public, max-age=30, stale-while-revalidate=300" },
    );
  } catch {
    return json({ programmes: null });
  }
};

export const config = { path: "/api/programmes" };
