import { Link } from "react-router-dom";

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#F9FAFB] py-8 md:py-12 border-t border-gray-100">
      <div className="mx-auto max-w-[1190px] px-4 md:px-8">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center gap-3">
            <Link to="/">
              <img
                src="/logo.png"
                alt="Alloro"
                className="h-8 md:h-10 w-auto"
              />
            </Link>
            <p className="text-[14px] text-[#777777] text-center max-w-md">
              Ending healthcare burnout with intelligence, clarity, and care.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-[14px] md:text-[15px]">
            <Link
              to="/"
              className="text-[#777777] hover:text-black transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/terms"
              className="text-[#777777] hover:text-black transition-colors font-medium"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy"
              className="text-[#777777] hover:text-black transition-colors font-medium"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Divider */}
          <div className="w-full max-w-[600px] h-px bg-[#E5E5E5]" />

          {/* Copyright and Additional Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-[13px] md:text-[14px] text-[#898989]">
            <p>
              © {new Date().getFullYear()} Alloro, Inc. All rights reserved.
            </p>
            <span className="hidden md:inline">•</span>
            <p>HIPAA Compliant</p>
            <span className="hidden md:inline">•</span>
            <p>Made with ♥ for healthcare professionals</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
