export default function NavigationSection() {
  return (
    <nav className="w-full bg-white">
      <div className="mx-auto max-w-[1190px] px-6 py-4 md:px-8 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Alloro" className="h-8 md:h-10 w-auto" />
          </div>

          {/* CTA Button */}
          <button className="rounded-full bg-[#06B6D4] px-6 py-[18px] text-base md:text-lg font-semibold text-white transition-colors hover:bg-[#0891B2] focus:outline-none focus:ring-2 focus:ring-[#06B6D4] focus:ring-offset-2 w-auto md:w-[219px]">
            Get a Free Demo
          </button>
        </div>
      </div>
    </nav>
  );
}
