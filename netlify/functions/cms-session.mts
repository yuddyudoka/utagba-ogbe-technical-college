import { isAdmin } from "../lib/cms-auth.ts";
import { json } from "../lib/cms-response.ts";

export default (request: Request) => {
  if (request.method !== "GET") return json({ error: "Method not allowed." }, 405);
  return json({ authenticated: isAdmin(request) });
};

export const config = { path: "/api/admin/session" };
