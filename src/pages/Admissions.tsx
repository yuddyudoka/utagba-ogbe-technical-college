import svgPaths from "@/imports/Admissions/svg-pz736fpu46";
import imgHero from "@/imports/Admissions/6a8f3b86589fd4bfa8c0530f1197bd1ffb973626.png";
import { Link } from "react-router";

// ── Step icon wrapper ────────────────────────────────────────
function StepIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[rgba(244,178,36,0.1)] relative shrink-0 size-10 border border-[rgba(244,178,36,0.3)] flex items-center justify-center">
      {children}
    </div>
  );
}

// ── Step number + icon column ────────────────────────────────
function StepMarker({ n, icon }: { n: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-2 shrink-0 w-10">
      <StepIcon>{icon}</StepIcon>
      <p className="font-['JetBrains_Mono:Bold',sans-serif] font-semibold text-[#f4b224] text-xs leading-4">{n}</p>
    </div>
  );
}

// ── Entry requirement bullet ─────────────────────────────────
function Bullet({ text }: { text: string }) {
  return (
    <li className="flex gap-3 items-start pt-3 first:pt-0">
      <div className="mt-[9px] size-[6px] rounded-full bg-[#f4b224] shrink-0" />
      <p className="font-['Manrope:Regular',sans-serif] text-[#666] text-sm leading-[1.625]">{text}</p>
    </li>
  );
}

const steps = [
  {
    n: "01",
    title: "Obtain Application Form",
    desc: "Visit the admissions office at the college in Utagba-Ogbe, Kwale during working hours (Monday–Friday, 8am–4pm).",
    icon: (
      <svg viewBox="0 0 15 15" fill="none" className="size-[15px]">
        <path d={svgPaths.p4ce6280} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        <path d={svgPaths.p38359080} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        <path d="M6.25 5.625H5" stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        <path d="M10 8.125H5" stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        <path d="M10 10.625H5" stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Complete & Submit the Form",
    desc: "Fill the application form accurately and attach all required documents. Submit the completed form at the admissions office.",
    icon: (
      <svg viewBox="0 0 15 15" fill="none" className="size-[15px]">
        <clipPath id="adm-clip-02"><rect fill="white" height="15" width="15" /></clipPath>
        <g clipPath="url(#adm-clip-02)">
          <path d={svgPaths.p318b9b00} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p1d927000} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    ),
  },
  {
    n: "03",
    title: "Screening & Selection",
    desc: "Eligible candidates will be invited for a brief screening exercise. Selection is based on academic background.",
    icon: (
      <svg viewBox="0 0 15 15" fill="none" className="size-[15px]">
        <path d={svgPaths.p2f69c040} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        <path d={svgPaths.p24aeb400} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        <path d={svgPaths.p28f1f780} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        <path d={svgPaths.p6d4e810} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Acceptance & Registration",
    desc: "Successful candidates will receive a letter of admission. Complete payment of tuition and registration fees.",
    icon: (
      <svg viewBox="0 0 15 15" fill="none" className="size-[15px]">
        <path d="M5 1.25V3.75" stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        <path d="M10 1.25V3.75" stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        <path d={svgPaths.p191ca500} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        <path d="M1.875 6.25H13.125" stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      </svg>
    ),
  },
  {
    n: "05",
    title: "Resumption & Orientation",
    desc: "Report on the designated resumption date for orientation and allocation to your trade workshop.",
    icon: (
      <svg viewBox="0 0 15 15" fill="none" className="size-[15px]">
        <clipPath id="adm-clip-05"><rect fill="white" height="15" width="15" /></clipPath>
        <g clipPath="url(#adm-clip-05)">
          <path d={svgPaths.p318b9b00} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p1d927000} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    ),
  },
];

const requirements = [
  "Junior Secondary School Certificate (JSSC) or equivalent — Basic Education Certificate Examination (BECE)",
  "Senior Secondary School Certificate (WAEC/NECO) is an added advantage but not compulsory for NTC admission",
  "Minimum age of 15 years at the time of application",
  "Two recent passport-sized photographs",
  "Birth certificate or age declaration",
  "Letter of recommendation from a school or community leader (where applicable)",
];

export default function Admissions() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative w-full h-[360px] md:h-[400px]">
        <div className="absolute inset-0">
          <img src={imgHero} alt="Utagba-Ogbe Technical College campus" className="w-full h-full object-cover object-[center_40%]" />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-5 md:px-10 h-full flex flex-col justify-end pb-10 md:pb-12">
          <h1
            className="font-['Barlow_Condensed:Black',sans-serif] not-italic text-white leading-[1.1]"
            style={{ fontSize: "clamp(2.75rem, 7vw, 72px)" }}
          >
            ADMISSIONS
          </h1>
        </div>
      </section>

      {/* ── Applications Open Banner ─────────────────────────── */}
      <div className="w-full bg-[rgba(244,178,36,0.1)] border-b border-[rgba(244,178,36,0.3)]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-4 flex items-start gap-3">
          <div className="mt-[6px] size-2 rounded-full bg-[#f4b224] opacity-70 shrink-0" />
          <p className="font-['Manrope:Regular',sans-serif] text-[#0c0c0c] text-sm leading-[1.5]">
            <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#f4b224]">Applications Open</span>
            {" — The 2025/2026 academic session admission is currently open. Visit the admissions office or follow the steps below to apply."}
          </p>
        </div>
      </div>

      {/* ── How to Apply + Entry Requirements ────────────────── */}
      <section className="w-full border-b border-black/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 pt-10 pb-20 md:pb-24">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Left — Application Process */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-px bg-black shrink-0" />
                <p className="font-['JetBrains_Mono:Bold',sans-serif] font-semibold text-sm tracking-[1.2px] uppercase text-black">Application Process</p>
              </div>
              <h2
                className="font-['Barlow_Condensed:Black',sans-serif] not-italic text-[#0c0c0c] leading-tight mt-4"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 44px)" }}
              >
                HOW TO APPLY
              </h2>
              <p className="mt-4 font-['Manrope:Regular',sans-serif] text-[#666] text-sm leading-[1.625] max-w-lg">
                Admission is a straightforward five-step process. Applications may be submitted in person at the college or by contacting the admissions office directly.
              </p>

              {/* Steps */}
              <div className="mt-10 flex flex-col gap-5">
                {steps.map((step, i) => (
                  <div key={step.n} className="flex gap-5 items-start">
                    <StepMarker n={step.n} icon={step.icon} />
                    <div className="flex-1 min-w-0 pt-1">
                      <p className="font-['Manrope:Bold',sans-serif] font-bold text-[#0c0c0c] text-base leading-6">{step.title}</p>
                      <p className="mt-1.5 font-['Manrope:Regular',sans-serif] text-[#666] text-sm leading-[1.625]">{step.desc}</p>
                      {/* connector line between steps */}
                      {i < steps.length - 1 && (
                        <div className="mt-8 ml-[-52px] w-px h-0 border-l border-dashed border-[rgba(244,178,36,0.3)]" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Entry Requirements (sticky on desktop) */}
            <div className="w-full lg:w-[460px] shrink-0 lg:sticky lg:top-24 lg:self-start">
              <div className="bg-white border border-black/10 p-6 sm:p-7">
                <p className="font-['Manrope:Bold',sans-serif] font-bold text-[#0c0c0c] text-base leading-6 mb-1">Entry Requirements</p>
                <ul className="mt-5 flex flex-col">
                  {requirements.map((req) => (
                    <Bullet key={req} text={req} />
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="w-full bg-[#f4b224]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-20 flex flex-col items-center text-center">
          <h2
            className="font-['Barlow_Condensed:Black',sans-serif] not-italic text-black leading-[1.25]"
            style={{ fontSize: "clamp(2rem, 5vw, 56px)" }}
          >
            BEGIN YOUR APPLICATION TODAY
          </h2>
          <p className="mt-3 font-['Manrope:Regular',sans-serif] text-black/70 text-sm leading-[1.45] max-w-lg">
            Visit the admissions office at Utagba-Ogbe Technical College, Kwale — or contact us for guidance. Admission is open now for the 2025/2026 session.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              to="/contact"
              className="inline-flex justify-center items-center bg-black px-8 py-4 font-['Manrope:Bold',sans-serif] font-bold text-sm text-white hover:bg-white hover:text-black transition-colors w-full sm:w-auto"
            >
              Contact Us
            </Link>
            <Link
              to="/courses"
              className="inline-flex justify-center items-center border-2 border-black/30 px-8 py-4 font-['Manrope:SemiBold',sans-serif] font-semibold text-sm text-black hover:bg-black/10 transition-colors w-full sm:w-auto"
            >
              Explore Programmes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
