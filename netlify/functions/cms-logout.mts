import { clearSessionCookie, isSameOrigin } from "../lib/cms-auth.ts";
import { json } from "../lib/cms-response.ts";

export default (request: Request) => {
  if (request.method !== "POST") return json({ error: "Method not allowed." }, 405);
  if (!isSameOrigin(request)) return json({ error: "Invalid request origin." }, 403);

  return json(
    { success: true },
    200,
    { "set-cookie": clearSessionCookie() },
  );
};

export const config = { path: "/api/admin/logout" };
