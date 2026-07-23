import {
  createSessionCookie,
  isSameOrigin,
  validAdminPassword,
} from "../lib/cms-auth.ts";
import { json } from "../lib/cms-response.ts";

export default async (request: Request) => {
  if (request.method !== "POST") return json({ error: "Method not allowed." }, 405);
  if (!isSameOrigin(request)) return json({ error: "Invalid request origin." }, 403);

  let password = "";
  try {
    password = String((await request.json()).password || "");
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  if (!validAdminPassword(password)) {
    return json({ error: "Incorrect password." }, 401);
  }

  return json(
    { success: true },
    200,
    { "set-cookie": createSessionCookie() },
  );
};

export const config = { path: "/api/admin/login" };
