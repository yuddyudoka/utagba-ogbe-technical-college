import { createHmac, timingSafeEqual } from "node:crypto";

const COOKIE_NAME = "utagba_cms_session";
const SESSION_SECONDS = 60 * 60 * 8;

function getSecret() {
  return process.env.CMS_SESSION_SECRET || "";
}

function sign(value: string) {
  return createHmac("sha256", getSecret()).update(value).digest("base64url");
}

function safeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  return (
    leftBuffer.length === rightBuffer.length &&
    timingSafeEqual(leftBuffer, rightBuffer)
  );
}

export function validAdminPassword(password: string) {
  const expected = process.env.CMS_ADMIN_PASSWORD || "";
  return Boolean(expected && safeEqual(password, expected));
}

export function createSessionCookie() {
  const expires = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  const payload = Buffer.from(JSON.stringify({ expires })).toString("base64url");
  const token = `${payload}.${sign(payload)}`;

  return `${COOKIE_NAME}=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${SESSION_SECONDS}`;
}

export function clearSessionCookie() {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`;
}

export function isAdmin(request: Request) {
  if (!getSecret()) return false;

  const cookies = request.headers.get("cookie") || "";
  const token = cookies
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(`${COOKIE_NAME}=`))
    ?.slice(COOKIE_NAME.length + 1);

  if (!token) return false;

  const [payload, signature] = token.split(".");
  if (!payload || !signature || !safeEqual(signature, sign(payload))) return false;

  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString());
    return Number(session.expires) > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}

export function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  return !origin || origin === new URL(request.url).origin;
}
