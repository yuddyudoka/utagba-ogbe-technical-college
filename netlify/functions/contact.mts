const SUBJECTS = new Set([
  "General Enquiry",
  "Admissions",
  "Courses & Programmes",
  "Fees & Scholarships",
  "Other",
]);

function json(body: unknown, status = 200) {
  return Response.json(body, {
    status,
    headers: {
      "cache-control": "no-store",
    },
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default async (request: Request) => {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed." }, 405);
  }

  const requestOrigin = new URL(request.url).origin;
  const origin = request.headers.get("origin");

  if (origin && origin !== requestOrigin) {
    return json({ error: "Invalid request origin." }, 403);
  }

  const contentLength = Number(request.headers.get("content-length") || 0);

  if (contentLength > 20_000) {
    return json({ error: "Request is too large." }, 413);
  }

  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return json({ error: "Invalid request body." }, 400);
  }

  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim().toLowerCase();
  const subject = String(payload.subject || "").trim();
  const message = String(payload.message || "").trim();
  const website = String(payload.website || "").trim();

  if (website) {
    return json({ success: true });
  }

  if (name.length < 2 || name.length > 100) {
    return json({ error: "Please enter a valid name." }, 400);
  }

  if (!isEmail(email) || email.length > 254) {
    return json({ error: "Please enter a valid email address." }, 400);
  }

  if (!SUBJECTS.has(subject)) {
    return json({ error: "Please select a valid subject." }, 400);
  }

  if (message.length < 10 || message.length > 5_000) {
    return json({ error: "Your message must be between 10 and 5,000 characters." }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("Missing Resend contact-form environment variables.");
    return json({ error: "Email service is not configured." }, 503);
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  let resendResponse: Response;

  try {
    resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${apiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `[Website] ${subject} from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
        html: `
          <h2>New website enquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        `,
      }),
    });
  } catch (error) {
    console.error("Unable to reach Resend:", error);
    return json(
      { error: "Email delivery is temporarily unavailable. Please try again." },
      502,
    );
  }

  if (!resendResponse.ok) {
    const resendError = await resendResponse.text();
    console.error("Resend email error:", resendResponse.status, resendError);
    return json({ error: "Email could not be sent." }, 502);
  }

  return json({ success: true });
};

export const config = {
  path: "/api/contact",
};
