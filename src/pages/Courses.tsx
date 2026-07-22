import { Link } from "react-router";
import { programmes } from "@/data/programmes";

import imgHero from "@/imports/CoursesCms/4a250bdb60cd274b8da4e5f250fde020f958cec5.png";

function ProgrammeCard({ programme }: { programme: typeof programmes[number] }) {
  return (
    <Link to={`/courses/${programme.slug}`} className="bg-white flex flex-col overflow-hidden border border-black/10 hover:border-black/20 transition-colors group">
      {/* Image */}
      <div className="bg-[#f5f5f5] h-[176px] relative shrink-0 w-full overflow-hidden">
        <img
          src={programme.img}
          alt={programme.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col px-3 py-4 flex-1">
        {/* Number + badges row */}
        <div className="flex items-start justify-between w-full">
          <p className="font-['JetBrains_Mono:Bold',sans-serif] font-bold text-[12px] leading-[16.5px] text-black">{programme.n}</p>
          <div className="flex gap-1.5 items-start">
            <div className="border border-black/10 px-[8.8px] py-[2.8px]">
              <p className="font-['JetBrains_Mono:Regular',sans-serif] text-[#666] text-[10px] leading-[15px] uppercase">{programme.type}</p>
            </div>
            <div className="border border-black/10 px-[8.8px] py-[2.8px]">
              <p className="font-['JetBrains_Mono:Regular',sans-serif] text-[#666] text-[10px] leading-[15px]">{programme.duration}</p>
            </div>
          </div>
        </div>

        {/* Title */}
        <p className="font-['Barlow_Condensed:Bold',sans-serif] not-italic text-[#0c0c0c] text-[20px] leading-[27.5px] mt-4">{programme.title}</p>

        {/* Description */}
        <p className="font-['Manrope:Regular',sans-serif] text-[#666] text-sm leading-[22.75px] mt-2 flex-1">{programme.overview.split(".")[0]}.</p>
      </div>
    </Link>
  );
}

export default function Courses() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative w-full h-[360px] md:h-[400px]">
        <div className="absolute inset-0">
          <img
            src={imgHero}
            alt="Utagba-Ogbe Technical College programmes"
            className="w-full h-full object-cover object-[center_40%]"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-5 md:px-10 h-full flex flex-col justify-end pb-10 md:pb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#f4b224] shrink-0" />
            <p className="font-['JetBrains_Mono:Bold',sans-serif] font-semibold text-[#f4b224] text-sm tracking-[1.2px] uppercase">
              NTC &amp; NBC Programmes
            </p>
          </div>
          <h1
            className="font-['Barlow_Condensed:Black',sans-serif] not-italic text-white leading-[1.1]"
            style={{ fontSize: "clamp(2.75rem, 7vw, 72px)" }}
          >
            ALL PROGRAMMES
          </h1>
        </div>
      </section>

      {/* ── Programmes Grid ───────────────────────────────────── */}
      <section className="w-full bg-[#fafafa]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 pt-10 pb-20 md:pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {programmes.map((prog) => (
              <ProgrammeCard key={prog.slug} programme={prog} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="w-full bg-[#f4b224]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2
              className="font-['Barlow_Condensed:Black',sans-serif] not-italic text-black leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 45px)" }}
            >
              FOUND YOUR PROGRAMME?
            </h2>
            <p className="mt-3 font-['Manrope:Regular',sans-serif] text-black/70 text-sm leading-[1.5]">
              Apply for the 2025/2026 academic session. Admissions are currently open.
            </p>
          </div>
          <Link
            to="/admissions"
            className="shrink-0 bg-black text-white font-['Manrope:Bold',sans-serif] font-bold text-sm px-8 py-[14px] hover:bg-white hover:text-black transition-colors w-full md:w-auto text-center"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </>
  );
}
