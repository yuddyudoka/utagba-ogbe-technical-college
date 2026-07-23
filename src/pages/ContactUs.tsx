import { useState } from "react";
import svgPaths from "@/imports/ContactUs/svg-7t9vx8mts6";
import imgHero from "@/imports/ContactUs/172d47cb03cba258953b2f2a9a2b7413370dea9c.png";

function LocationIcon() {
  return (
    <svg viewBox="0 0 17 17" fill="none" className="size-[17px]">
      <path d={svgPaths.p13916380} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
      <path d={svgPaths.p1c5f0a00} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 17 17" fill="none" className="size-[17px]">
      <path d={svgPaths.p20001480} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
      <path d={svgPaths.p1d73580} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 17 17" fill="none" className="size-[17px]">
      <clipPath id="contact-clock"><rect fill="white" height="17" width="17" /></clipPath>
      <g clipPath="url(#contact-clock)">
        <path d={svgPaths.padbbe00} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
        <path d={svgPaths.p152ca880} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
      </g>
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" className="size-[14px]">
      <clipPath id="contact-send"><rect fill="white" height="14" width="14" /></clipPath>
      <g clipPath="url(#contact-send)">
        <path d={svgPaths.p3fccf600} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        <path d={svgPaths.p3bf11880} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
      </g>
    </svg>
  );
}

function ContactInfoItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 items-start pt-6 first:pt-0">
      {/* icon box */}
      <div className="shrink-0 size-11 border border-black/10 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-['Manrope:Bold',sans-serif] font-bold text-[#0c0c0c] text-sm leading-5">{label}</p>
        <div className="mt-1 font-['Manrope:Regular',sans-serif] text-[#666] text-sm leading-[1.625]">
          {children}
        </div>
      </div>
    </div>
  );
}

const subjectOptions = [
  "General Enquiry",
  "Admissions",
  "Courses & Programmes",
  "Fees & Scholarships",
  "Other",
];

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    const body = new URLSearchParams({
      "form-name": "contact",
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      setSubmitted(true);
    } catch {
      setSubmitError("Your message could not be sent. Please try again or email the college directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative w-full h-[360px] md:h-[400px]">
        <div className="absolute inset-0">
          <img
            src={imgHero}
            alt="Utagba-Ogbe Technical College campus"
            className="w-full h-full object-cover object-[center_88%]"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-5 md:px-10 h-full flex flex-col justify-end pb-10 md:pb-12">
          <p className="font-['JetBrains_Mono:Regular',sans-serif] text-[#f4b224] text-sm tracking-[1.2px] uppercase mb-2">
            REACH US
          </p>
          <h1
            className="font-['Barlow_Condensed:Black',sans-serif] not-italic text-white leading-[1.1]"
            style={{ fontSize: "clamp(2.75rem, 7vw, 72px)" }}
          >
            CONTACT US
          </h1>
        </div>
      </section>

      {/* ── Main section ─────────────────────────────────────── */}
      <section className="w-full border-b border-black/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 pt-10 pb-20 md:pb-24">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* ── Left: contact info ── */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-px bg-black shrink-0" />
                <p className="font-['JetBrains_Mono:Bold',sans-serif] font-semibold text-sm tracking-[1.2px] uppercase text-black">
                  Get in Touch
                </p>
              </div>
              <h2
                className="font-['Barlow_Condensed:Black',sans-serif] not-italic text-[#0c0c0c] leading-tight mt-4"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 44px)" }}
              >
                VISIT, CALL, OR WRITE
              </h2>
              <p className="mt-4 font-['Manrope:Regular',sans-serif] text-[#666] text-sm leading-[1.625] w-full">
                We welcome enquiries from prospective students, parents, and community members. Reach out through any of the channels below and our team will get back to you as soon as possible.
              </p>

              <div className="mt-10 flex flex-col">
                <ContactInfoItem icon={<LocationIcon />} label="College Address">
                  <p>Kwale, Ndokwa West, Delta State, Nigeria</p>
                </ContactInfoItem>

                <ContactInfoItem icon={<EmailIcon />} label="E-mail Address">
                  <a
                    href="mailto:enquiry@utagbatechnicalcollege.com.ng"
                    className="break-all hover:text-[#f4b224] transition-colors"
                  >
                    enquiry@utagbatechnicalcollege.com.ng
                  </a>
                </ContactInfoItem>

                <ContactInfoItem icon={<ClockIcon />} label="Office Hours">
                  <p>Monday – Friday: 8:00am – 4:00pm</p>
                  <p>Saturday: 9:00am – 12:00pm (admissions only)</p>
                  <p>{`Sunday & Public Holidays: Closed`}</p>
                </ContactInfoItem>
              </div>
            </div>

            {/* ── Right: contact form ── */}
            <div className="w-full lg:w-[540px] shrink-0">
              <div className="bg-white border border-black/10 p-5 sm:p-6">
                <p className="font-['Manrope:Bold',sans-serif] font-bold text-[#0c0c0c] text-lg leading-7">
                  Send a Message
                </p>

                {submitted ? (
                  <div className="mt-6 py-8 flex flex-col items-center text-center gap-3">
                    <div className="size-10 rounded-full bg-[rgba(244,178,36,0.15)] border border-[rgba(244,178,36,0.3)] flex items-center justify-center">
                      <SendIcon />
                    </div>
                    <p className="font-['Manrope:Bold',sans-serif] font-bold text-[#0c0c0c] text-base">
                      Message Sent
                    </p>
                    <p className="font-['Manrope:Regular',sans-serif] text-[#666] text-sm leading-[1.625] max-w-xs">
                      Thank you for reaching out. We{"'"}ll get back to you as soon as possible.
                    </p>
                    <button
                      type="button"
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                      className="mt-2 font-['Manrope:SemiBold',sans-serif] font-semibold text-sm text-[#f4b224] hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    onSubmit={handleSubmit}
                    className="mt-6 flex flex-col gap-5"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block font-['Manrope:SemiBold',sans-serif] font-semibold text-[#0c0c0c] text-[12px] leading-4 mb-2">
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                          className="w-full bg-[#fafafa] border border-black/10 px-4 py-3 font-['Manrope:Regular',sans-serif] text-sm text-[#0c0c0c] placeholder:text-[rgba(102,102,102,0.5)] focus:outline-none focus:border-[#f4b224] transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block font-['Manrope:SemiBold',sans-serif] font-semibold text-[#0c0c0c] text-[12px] leading-4 mb-2">
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                          className="w-full bg-[#fafafa] border border-black/10 px-4 py-3 font-['Manrope:Regular',sans-serif] text-sm text-[#0c0c0c] placeholder:text-[rgba(102,102,102,0.5)] focus:outline-none focus:border-[#f4b224] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="contact-subject" className="block font-['Manrope:SemiBold',sans-serif] font-semibold text-[#0c0c0c] text-[12px] leading-4 mb-2">
                        Subject *
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        required
                        value={form.subject}
                        onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                        className="w-full bg-[#fafafa] border border-black/10 px-4 py-3 font-['Manrope:Regular',sans-serif] text-sm text-[#0c0c0c] focus:outline-none focus:border-[#f4b224] transition-colors appearance-none cursor-pointer"
                        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%23666' strokeWidth='1.5' fill='none' strokeLinecap='round' strokeLinejoin='round'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                      >
                        <option value="" disabled>Select a subject</option>
                        {subjectOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="contact-message" className="block font-['Manrope:SemiBold',sans-serif] font-semibold text-[#0c0c0c] text-[12px] leading-4 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Write your message here…"
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        className="w-full bg-[#fafafa] border border-black/10 px-4 py-3 font-['Manrope:Regular',sans-serif] text-sm text-[#0c0c0c] placeholder:text-[rgba(102,102,102,0.5)] focus:outline-none focus:border-[#f4b224] transition-colors resize-none"
                      />
                    </div>

                    {submitError && (
                      <p role="alert" className="font-['Manrope:Regular',sans-serif] text-sm text-red-700 leading-[1.5]">
                        {submitError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-[#f4b224] flex items-center justify-center gap-2 py-[14px] font-['Manrope:Bold',sans-serif] font-bold text-sm text-black hover:bg-[#e0a31e] transition-colors"
                    >
                      {submitting ? "Sending..." : "Send Message"}
                      <SendIcon />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
