export default function ComingSoon({ title }: { title: string }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-5 text-center">
      <p className="font-['JetBrains_Mono:Regular',sans-serif] text-[#f4b224] text-sm tracking-[1.2px] uppercase mb-4">Coming Soon</p>
      <h1
        className="font-['Barlow_Condensed:Black',sans-serif] not-italic text-[#0c0c0c] leading-tight"
        style={{ fontSize: "clamp(2rem, 5vw, 56px)" }}
      >
        {title}
      </h1>
      <p className="mt-4 font-['Manrope:Regular',sans-serif] text-[#666] text-sm max-w-md">
        This page is under construction and will be available soon.
      </p>
    </div>
  );
}
