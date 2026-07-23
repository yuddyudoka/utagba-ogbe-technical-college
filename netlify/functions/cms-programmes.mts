import { getStore } from "@netlify/blobs";
import { isAdmin, isSameOrigin } from "../lib/cms-auth.ts";
import { json } from "../lib/cms-response.ts";

function isStringArray(value: unknown) {
  return (
    Array.isArray(value) &&
    value.length <= 20 &&
    value.every((item) => typeof item === "string" && item.trim().length <= 160)
  );
}

function validProgramme(value: unknown) {
  if (!value || typeof value !== "object") return false;
  const item = value as Record<string, unknown>;

  return (
    typeof item.n === "string" &&
    /^(0[1-9]|[1-9][0-9])$/.test(item.n) &&
    (item.type === "NTC" || item.type === "NBC") &&
    typeof item.duration === "string" &&
    item.duration.length <= 40 &&
    typeof item.certificate === "string" &&
    item.certificate.length <= 120 &&
    typeof item.title === "string" &&
    item.title.trim().length >= 3 &&
    item.title.length <= 120 &&
    typeof item.slug === "string" &&
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.slug) &&
    typeof item.img === "string" &&
    item.img.length <= 1_000 &&
    typeof item.overview === "string" &&
    item.overview.trim().length >= 20 &&
    item.overview.length <= 3_000 &&
    isStringArray(item.whatYouWillLearn) &&
    isStringArray(item.careerOutcomes)
  );
}

export default async (request: Request) => {
  if (!isAdmin(request)) return json({ error: "Authentication required." }, 401);

  const store = getStore("utagba-cms");

  if (request.method === "GET") {
    const value = await store.get("programmes", { consistency: "strong" });
    return json({ programmes: value ? JSON.parse(value) : null });
  }

  if (request.method !== "PUT") return json({ error: "Method not allowed." }, 405);
  if (!isSameOrigin(request)) return json({ error: "Invalid request origin." }, 403);

  let programmes: unknown;
  try {
    programmes = (await request.json()).programmes;
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  if (
    !Array.isArray(programmes) ||
    programmes.length < 1 ||
    programmes.length > 30 ||
    !programmes.every(validProgramme)
  ) {
    return json({ error: "One or more programme fields are invalid." }, 400);
  }

  const slugs = programmes.map((item) => item.slug);
  if (new Set(slugs).size !== slugs.length) {
    return json({ error: "Programme URLs must be unique." }, 400);
  }

  await store.set("programmes", JSON.stringify(programmes), {
    metadata: { updatedAt: new Date().toISOString() },
  });

  return json({ success: true, updatedAt: new Date().toISOString() });
};

export const config = { path: "/api/admin/programmes" };
