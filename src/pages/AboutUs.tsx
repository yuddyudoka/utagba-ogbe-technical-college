import { ArrowRight } from "lucide-react";
import svgPaths from "@/imports/AboutUs/svg-hnaspw36n6";
import imgHero from "@/imports/AboutUs/78106b2658bf5182cf323d2b805b4b2520a8d4e9.png";
import imgVision from "@/imports/AboutUs/577aec8b0d80f09397ee0109b8dfce02103623c2.png";
import imgAutomotive from "@/imports/AboutUs/ce512f4db09e6c5df524fb09efb0556b3f5e4e8b.png";
import imgElectrical from "@/imports/AboutUs/fda2d64a71fb05e36cd50074bb8508a5437c29c0.png";
import imgWelding from "@/imports/AboutUs/171e3ab87ed18d22622c9d7bf98bdedefef568c9.png";
import imgConstruction from "@/imports/AboutUs/f24223f7185837f78a0265a0b6d6ee3401817a78.png";
import imgWoodwork from "@/imports/AboutUs/755a165808a8e65bfa1d868e26650bc7aaa2c43a.png";
import imgHvac from "@/imports/AboutUs/73894e559342300320b620612d3e1c0e7033c273.png";

const coreValues = [
  {
    name: "Excellence",
    desc: "We hold every student to the highest standard of practical competence, ensuring graduates are truly job-ready.",
    icon: (
      <svg viewBox="0 0 17 17" fill="none" className="w-[17px] h-[17px]">
        <path d={svgPaths.padbbe00} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
        <path d={svgPaths.p3e78da00} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
        <path d={svgPaths.p27cfbf00} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
      </svg>
    ),
  },
  {
    name: "Community",
    desc: "The college exists to serve Utagba-Ogbe and the wider Ndokwa West community — in education and beyond.",
    icon: (
      <svg viewBox="0 0 17 17" fill="none" className="w-[17px] h-[17px]">
        <path d={svgPaths.p5db100} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
      </svg>
    ),
  },
  {
    name: "Integrity",
    desc: "Honest assessment, transparent operations, and genuine accountability to our students and to the state.",
    icon: (
      <svg viewBox="0 0 17 17" fill="none" className="w-[17px] h-[17px]">
        <path d={svgPaths.p36188580} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
      </svg>
    ),
  },
  {
    name: "Innovation",
    desc: "We continuously update our curriculum and equipment to reflect current industry practice and emerging trades.",
    icon: (
      <svg viewBox="0 0 17 17" fill="none" className="w-[17px] h-[17px]">
        <path d={svgPaths.p2b178640} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
        <path d="M6.375 12.75H10.625" stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
        <path d="M7.08333 15.5833H9.91667" stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
      </svg>
    ),
  },
];

const facilities = [
  { img: imgAutomotive, name: "Automotive Workshop", desc: "Fully equipped garage with engine hoists, diagnostic tools, and a range of vehicle types for practical training." },
  { img: imgElectrical, name: "Electrical Installation Lab", desc: "Workshop with wiring boards, distribution boards, conduit systems, and live-circuit training rigs." },
  { img: imgWelding, name: "Fabrication & Welding Bay", desc: "Dedicated welding bay with MIG, TIG, arc, and oxy-acetylene equipment plus full PPE provision." },
  { img: imgConstruction, name: "Construction Yard", desc: "Outdoor training space for bricklaying, concreting, and block-work, with scaffolding and formwork materials." },
  { img: imgWoodwork, name: "Woodwork Studio", desc: "Timber workshop housing bench saws, routers, planers, and a full range of hand and power tools." },
  { img: imgHvac, name: "HVAC Training Room", desc: "Specialist lab for refrigeration and air-conditioning, with split units, condensers, and gas-handling equipment." },
];

function SectionLabel({ text, dark = false }: { text: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-8 h-px shrink-0 ${dark ? "bg-[#f4b224]" : "bg-black"}`} />
      <p className={`font-['JetBrains_Mono:Bold',sans-serif] font-semibold text-sm tracking-[1.2px] uppercase ${dark ? "text-[#f4b224]" : "text-black"}`}>
        {text}
      </p>
    </div>
  );
}

export default function AboutUs() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative w-full h-[360px] md:h-[400px]">
        <div className="absolute inset-0">
          <img src={imgHero} alt="About Utagba-Ogbe Technical College" className="w-full h-full object-cover object-[center_20%]" />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-5 md:px-10 h-full flex flex-col justify-end pb-10 md:pb-12">
          <SectionLabel text="About Us" dark />
          <h1
            className="font-['Barlow_Condensed:Black',sans-serif] not-italic text-white leading-[1.1] mt-2"
            style={{ fontSize: "clamp(2.75rem, 7vw, 72px)" }}
          >
            ABOUT THE COLLEGE
          </h1>
        </div>
      </section>

      {/* ── Vision / Mission / Identity ──────────────────────── */}
      <section className="w-full border-b border-black/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-16 md:py-24">
          <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start">
            <div className="flex-1 min-w-0">
              <SectionLabel text="Our Purpose" />
              <h2
                className="font-['Barlow_Condensed:Black',sans-serif] not-italic text-[#0c0c0c] leading-tight mt-4 mb-8"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 44px)" }}
              >
                {`VISION, MISSION & IDENTITY`}
              </h2>

              <div className="flex flex-col gap-8">
                {/* Vision */}
                <div className="border-l-2 border-[#f4b224] pl-6">
                  <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold text-[#f4b224] text-sm tracking-[0.6px] uppercase">Vision</p>
                  <p className="mt-2 font-['Manrope:Regular',sans-serif] text-[#0c0c0c] text-sm leading-[1.5]">
                    To be a centre of excellence that empowers students and prepares them for productive participation in the labour market and self-employment across Nigeria.
                  </p>
                </div>
                {/* Mission */}
                <div className="border-l-2 border-[#f4b224] pl-6">
                  <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold text-[#f4b224] text-sm tracking-[0.6px] uppercase">Mission</p>
                  <p className="mt-2 font-['Manrope:Regular',sans-serif] text-[#0c0c0c] text-sm leading-[1.5]">
                    To create a quality learning environment that meets the education, training, and development expectations of our students, communities, and industry partners.
                  </p>
                </div>
                {/* Institution */}
                <div className="border-l-2 border-[#f4b224] pl-6">
                  <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold text-[#f4b224] text-sm tracking-[0.6px] uppercase">Institution</p>
                  <p className="mt-2 font-['Manrope:Regular',sans-serif] text-[#0c0c0c] text-sm leading-[1.5]">
                    A public institution owned by the Delta State Ministry of Education. Fully accredited by the National Board for Technical Education (NBTE). Located in Utagba-Ogbe, Kwale, Ndokwa West LGA, Delta State.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[45%] lg:w-[48%] shrink-0">
              <img src={imgVision} alt="Students in training" className="w-full h-64 sm:h-80 md:h-[484px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ──────────────────────────────────────── */}
      <section className="w-full bg-[#fafafa] border-b border-black/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-16 md:py-24">
          <SectionLabel text="What We Stand For" />
          <h2
            className="font-['Barlow_Condensed:Black',sans-serif] not-italic text-[#0c0c0c] leading-tight mt-4 mb-12"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 44px)" }}
          >
            OUR CORE <span className="text-[#f4b224]">VALUES</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(0,0,0,0.1)]">
            {coreValues.map((v) => (
              <div key={v.name} className="bg-white px-3 py-8 sm:p-8">
                <div className="w-10 h-10 border border-black/10 flex items-center justify-center shrink-0">
                  {v.icon}
                </div>
                <p className="font-['Manrope:Bold',sans-serif] font-bold text-[#0c0c0c] text-base mt-5 mb-3">{v.name}</p>
                <p className="font-['Manrope:Regular',sans-serif] text-[#666] text-sm leading-[1.625]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── History ──────────────────────────────────────────── */}
      <section className="w-full border-b border-black/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* Left: heading + copy — sticky on desktop */}
            <div className="flex-1 min-w-0 lg:sticky lg:top-20 lg:self-start">
              <SectionLabel text="Our History" />
              <h2
                className="font-['Barlow_Condensed:Black',sans-serif] not-italic text-[#0c0c0c] leading-tight mt-4 mb-4"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 44px)" }}
              >
                THREE DECADES OF BUILDING SKILLS
              </h2>
              <p className="font-['Manrope:Regular',sans-serif] text-[#666] text-sm leading-[1.625] max-w-lg">
                From a modest institution founded to serve Ndokwa West, Utagba-Ogbe Technical College has grown into a recognised centre of vocational excellence in Delta State.
              </p>
            </div>

            {/* Right: info cards */}
            <div className="w-full lg:w-[480px] shrink-0 flex flex-col gap-4">
              {/* NBTE Card */}
              <div className="bg-white border border-black/10 px-3 py-6 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <svg viewBox="0 0 18 18" fill="none" className="w-[18px] h-[18px] shrink-0">
                    <path d={svgPaths.p2e6f6a00} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p23bfda80} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                  <p className="font-['Manrope:Bold',sans-serif] font-bold text-[#0c0c0c] text-base">NBTE Accreditation</p>
                </div>
                <p className="font-['Manrope:Regular',sans-serif] text-[#666] text-sm leading-[1.625]">
                  {`Fully accredited by the National Board for Technical Education (NBTE), Nigeria's apex body for technical and vocational education quality assurance.`}
                </p>
              </div>

              {/* Certificates Card */}
              <div className="bg-white border border-black/10 px-3 py-6 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <svg viewBox="0 0 18 18" fill="none" className="w-[18px] h-[18px] shrink-0">
                    <path d="M9 5.25V15.75" stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p2044ea00} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                  <p className="font-['Manrope:Bold',sans-serif] font-bold text-[#0c0c0c] text-base">Certificates Awarded</p>
                </div>
                <p className="font-['Manrope:Regular',sans-serif] text-[#666] text-sm leading-[1.625] mb-3">
                  The college awards two nationally recognised qualifications:
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-3 items-start">
                    <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#f4b224] text-sm shrink-0">NTC</span>
                    <span className="font-['Manrope:Regular',sans-serif] text-[#666] text-sm leading-[1.45]">National Technical Certificate — for trade-based programmes in engineering, construction, and services.</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#f4b224] text-sm shrink-0">NBC</span>
                    <span className="font-['Manrope:Regular',sans-serif] text-[#666] text-sm leading-[1.45]">National Business Certificate — awarded for the Business Studies programme.</span>
                  </div>
                </div>
              </div>

              {/* Community Service Card */}
              <div className="bg-white border border-black/10 px-3 py-6 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <svg viewBox="0 0 18 18" fill="none" className="w-[18px] h-[18px] shrink-0">
                    <path d={svgPaths.p288ca880} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                  <p className="font-['Manrope:Bold',sans-serif] font-bold text-[#0c0c0c] text-base">Community Service</p>
                </div>
                <p className="font-['Manrope:Regular',sans-serif] text-[#666] text-sm leading-[1.625]">
                  During flooding seasons, our campus serves as an emergency relief centre for displaced residents in the Utagba-Ogbe area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Facilities ───────────────────────────────────────── */}
      <section className="w-full bg-[#fafafa] border-b border-black/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-16 md:py-24">
          <SectionLabel text="Infrastructure" />
          <h2
            className="font-['Barlow_Condensed:Black',sans-serif] not-italic text-[#0c0c0c] leading-tight mt-4 mb-12"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 44px)" }}
          >
            MODERN WORKSHOPS & <span className="text-[#f4b224]">FACILITIES</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {facilities.map((f) => (
              <div key={f.name} className="bg-white border border-black/10 overflow-hidden">
                <div className="h-44 bg-[#f5f5f5] overflow-hidden">
                  <img src={f.img} alt={f.name} className="w-full h-full object-cover" />
                </div>
                <div className="px-3 py-4">
                  <p className="font-['Manrope:Bold',sans-serif] font-bold text-[#0c0c0c] text-sm">{f.name}</p>
                  <p className="mt-2 font-['Manrope:Regular',sans-serif] text-[#666] text-sm leading-[1.625]">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="w-full">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-16 md:py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-lg">
              <h2
                className="font-['Barlow_Condensed:Black',sans-serif] not-italic text-[#0c0c0c] leading-tight"
                style={{ fontSize: "clamp(1.75rem, 4vw, 44px)" }}
              >
                EXPLORE OUR PROGRAMMES
              </h2>
              <p className="mt-2 font-['Manrope:Regular',sans-serif] text-[#666] text-sm leading-[1.45]">
                12 NTC and NBC courses available. Choose the trade that fits your future.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <a href="#" className="inline-flex justify-center items-center gap-2 bg-[#f4b224] px-7 py-3.5 font-['Manrope:Bold',sans-serif] font-bold text-sm text-black hover:bg-yellow-400 transition-colors w-full sm:w-auto">
                View All Programs <ArrowRight size={13} strokeWidth={2} />
              </a>
              <a href="#" className="inline-flex justify-center items-center border border-black/20 px-7 py-3.5 font-['Manrope:SemiBold',sans-serif] font-semibold text-sm text-[#0c0c0c] hover:bg-black/5 transition-colors w-full sm:w-auto">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
