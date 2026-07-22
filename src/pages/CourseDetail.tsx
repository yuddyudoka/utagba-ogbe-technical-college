import { useParams, Link, Navigate } from "react-router";
import svgPaths from "@/imports/CourseDetailCmsPage/svg-by5if6doaf";
import { getProgrammeBySlug, getOtherProgrammes } from "@/data/programmes";

// ── SVG icons ──────────────────────────────────────────────────

function IconBook() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="size-4">
      <path d="M8 4.66667V14" stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p8c8fb00} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </svg>
  );
}

function IconBriefcase() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="size-4">
      <path d={svgPaths.p1c647980} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p13d22180} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg viewBox="0 0 15 15" fill="none" className="size-[15px]">
      <clipPath id="detail-clock"><rect fill="white" height="15" width="15" /></clipPath>
      <g clipPath="url(#detail-clock)">
        <path d={svgPaths.p185087f0} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        <path d="M7.5 3.75V7.5L10 8.75" stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      </g>
    </svg>
  );
}

function IconBadge() {
  return (
    <svg viewBox="0 0 15 15" fill="none" className="size-[15px]">
      <path d={svgPaths.p143b0800} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      <path d={svgPaths.p23297d80} stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg viewBox="0 0 12 12" fill="none" className="size-3">
      <path d="M4.5 9L7.5 6L4.5 3" stroke="#F4B224" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Section heading ─────────────────────────────────────────────

function SectionHeading({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex gap-3 items-center">
      {icon}
      <p className="font-['Barlow_Condensed:Black',sans-serif] not-italic text-[#0c0c0c] text-2xl leading-normal">
        {label}
      </p>
    </div>
  );
}

export default function CourseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const programme = getProgrammeBySlug(slug ?? "");
  const others = getOtherProgrammes(slug ?? "");

  if (!programme) return <Navigate to="/courses" replace />;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative w-full h-[360px] md:h-[400px]">
        <div className="absolute inset-0">
          <img
            src={programme.img}
            alt={programme.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-5 md:px-10 h-full flex flex-col justify-end pb-10 md:pb-12">
          <h1
            className="font-['Barlow_Condensed:Black',sans-serif] not-italic text-white leading-[1.1]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 72px)" }}
          >
            {programme.title}
          </h1>
        </div>
      </section>

      {/* ── Main content ─────────────────────────────────────── */}
      <section className="w-full border-b border-black/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 pt-10 pb-16 md:pb-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            {/* ── Left column ── */}
            <div className="flex-1 min-w-0">

              {/* Programme Overview */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-px bg-black shrink-0" />
                  <p className="font-['JetBrains_Mono:Bold',sans-serif] font-semibold text-sm tracking-[1.2px] uppercase text-black">
                    Programme Overview
                  </p>
                </div>
                <p className="mt-5 font-['Manrope:Regular',sans-serif] text-[#0c0c0c] text-base leading-[1.625]">
                  {programme.overview}
                </p>
              </div>

              {/* What You Will Learn */}
              <div className="mt-12">
                <SectionHeading icon={<IconBook />} label="WHAT YOU WILL LEARN" />
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/10 border border-black/10">
                  {programme.whatYouWillLearn.map((item, i) => (
                    <div key={i} className="bg-white flex gap-3 items-start px-5 py-4">
                      <p className="font-['JetBrains_Mono:Bold',sans-serif] font-semibold text-[#f4b224] text-[12px] leading-[16px] pt-[2px] shrink-0 w-[15px]">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <p className="font-['Manrope:Regular',sans-serif] text-[#0c0c0c] text-sm leading-[19.25px]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Outcomes */}
              <div className="mt-12">
                <SectionHeading icon={<IconBriefcase />} label="CAREER OUTCOMES" />
                <p className="mt-6 font-['Manrope:Regular',sans-serif] text-[#666] text-sm leading-5">
                  Graduates of this programme are prepared for roles including:
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {programme.careerOutcomes.map((outcome) => (
                    <div key={outcome} className="border border-black/15 px-[16.8px] py-[8.8px]">
                      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold text-[#0c0c0c] text-sm leading-5">
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* ── Right column: Programme Details card ── */}
            <div className="w-full lg:w-[320px] shrink-0 lg:sticky lg:top-24 lg:self-start">
              <div className="bg-white border border-black/10 p-6">
                <p className="font-['Manrope:Bold',sans-serif] font-bold text-[#0c0c0c] text-sm tracking-[0.35px] uppercase leading-5">
                  Programme Details
                </p>

                {/* Duration */}
                <div className="flex gap-3 items-center mt-5">
                  <IconClock />
                  <div>
                    <p className="font-['JetBrains_Mono:Regular',sans-serif] text-[#666] text-[10px] leading-[15px] tracking-[1px] uppercase">Duration</p>
                    <p className="font-['Manrope:SemiBold',sans-serif] font-semibold text-[#0c0c0c] text-sm leading-5 mt-0.5">{programme.duration}</p>
                  </div>
                </div>

                {/* Certificate */}
                <div className="flex gap-3 items-center mt-6">
                  <IconBadge />
                  <div>
                    <p className="font-['JetBrains_Mono:Regular',sans-serif] text-[#666] text-[10px] leading-[15px] tracking-[1px] uppercase">Certificate</p>
                    <p className="font-['Manrope:SemiBold',sans-serif] font-semibold text-[#0c0c0c] text-sm leading-5 mt-0.5">{programme.certificate}</p>
                  </div>
                </div>

                {/* Accreditation */}
                <div className="flex gap-3 items-center mt-6">
                  <IconBadge />
                  <div>
                    <p className="font-['JetBrains_Mono:Regular',sans-serif] text-[#666] text-[10px] leading-[15px] tracking-[1px] uppercase">Accreditation</p>
                    <p className="font-['Manrope:SemiBold',sans-serif] font-semibold text-[#0c0c0c] text-sm leading-5 mt-0.5">NBTE Accredited</p>
                  </div>
                </div>

                {/* Apply CTA */}
                <Link
                  to="/admissions"
                  className="mt-8 block w-full bg-[#f4b224] text-center font-['Manrope:Bold',sans-serif] font-bold text-sm text-black py-[14px] hover:bg-[#e0a31e] transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Other Programmes ─────────────────────────────────── */}
      <section className="w-full bg-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 pt-10 pb-20 md:pb-24">

          {/* Header row */}
          <div className="flex items-center justify-between mb-8">
            <p className="font-['Barlow_Condensed:Black',sans-serif] not-italic text-[#0c0c0c] text-2xl leading-normal">
              OTHER PROGRAMMES
            </p>
            <Link to="/courses" className="flex items-center gap-1.5">
              <span className="font-['Manrope:SemiBold',sans-serif] font-semibold text-[#f4b224] text-sm leading-5">All Programmes</span>
              <IconChevronRight />
            </Link>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {others.map((prog) => (
              <Link
                key={prog.slug}
                to={`/courses/${prog.slug}`}
                className="bg-white flex flex-col overflow-hidden border border-black/10 hover:border-black/20 transition-colors group"
              >
                <div className="bg-[#f5f5f5] h-[176px] relative shrink-0 overflow-hidden">
                  <img
                    src={prog.img}
                    alt={prog.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col px-3 py-4 flex-1">
                  <div className="flex items-start justify-between w-full">
                    <p className="font-['JetBrains_Mono:Regular',sans-serif] text-[#f4b224] text-[11px] leading-[16.5px]">{prog.n}</p>
                    <div className="flex gap-1.5">
                      <div className="border border-black/10 px-[8.8px] py-[2.8px]">
                        <p className="font-['JetBrains_Mono:Regular',sans-serif] text-[#666] text-[10px] leading-[15px] uppercase">{prog.type}</p>
                      </div>
                      <div className="border border-black/10 px-[8.8px] py-[2.8px]">
                        <p className="font-['JetBrains_Mono:Regular',sans-serif] text-[#666] text-[10px] leading-[15px]">{prog.duration}</p>
                      </div>
                    </div>
                  </div>
                  <p className="font-['Barlow_Condensed:Bold',sans-serif] not-italic text-[#0c0c0c] text-[20px] leading-[27.5px] mt-4">{prog.title}</p>
                  <p className="font-['Manrope:Regular',sans-serif] text-[#666] text-sm leading-[22.75px] mt-2">{prog.overview.split(".")[0]}.</p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
