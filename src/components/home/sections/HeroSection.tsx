import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F9FAFB] py-10 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        {/* Header Text */}
        <div className="mb-8 text-center md:mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-[16px] font-medium text-[#777777] md:text-[22px]"
          >
            Ending healthcare burnout with intelligence, clarity, and care.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[32px] font-medium leading-[38px] tracking-[-0.5px] text-black md:text-[65px] md:leading-[70px] md:tracking-[-1.5px] lg:text-[85px] lg:leading-[90px] lg:tracking-[-2px]"
          >
            You take care of patients.
            <br />
            We take care of the business.
          </motion.h1>
        </div>

        {/* Phone Mockup with Floating Cards */}
        <div className="relative mx-auto flex min-h-[500px] w-full max-w-[1200px] items-center justify-center md:min-h-[750px] lg:min-h-[850px]">
          {/* Left Floating Cards - positioned individually */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05, x: -5 }}
            className="absolute left-[10%] top-[15%] z-30 hidden w-auto rounded-full bg-white px-6 py-4 shadow-lg lg:block xl:left-[12%]"
          >
            <p className="flex items-center gap-2 whitespace-nowrap text-[14px] font-medium text-black">
              <span className="h-2 w-2 flex-shrink-0 rounded-full bg-black"></span>
              See exactly what to fix
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05, x: -5 }}
            className="absolute left-[12%] top-[30%] z-30 hidden w-auto rounded-full bg-white px-6 py-4 shadow-lg lg:block xl:left-[14%]"
          >
            <p className="flex items-center gap-2 whitespace-nowrap text-[14px] font-medium text-black">
              <span className="h-2 w-2 flex-shrink-0 rounded-full bg-black"></span>
              See who's beating you on Google
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05, x: -5 }}
            className="absolute left-[10%] top-[45%] z-30 hidden w-auto rounded-full bg-white px-6 py-4 shadow-lg lg:block xl:left-[12%]"
          >
            <p className="flex items-center gap-2 whitespace-nowrap text-[14px] font-medium text-black">
              <span className="h-2 w-2 flex-shrink-0 rounded-full bg-black"></span>
              Scan your site for issues
            </p>
          </motion.div>

          {/* Center Phone Container */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Phone Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/phoneimg.png"
                alt="Phone mockup"
                className="h-auto w-[280px] md:w-[320px] lg:w-[385px]"
              />
            </motion.div>

            {/* Bottom Card - CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="relative -mt-[150px] w-[92vw] max-w-[700px] rounded-2xl bg-white px-3 py-3 shadow-xl sm:px-6 sm:py-5 md:px-8 md:py-6"
            >
              <div className="flex w-full flex-col items-start gap-3 md:flex-nowrap md:gap-4">
                <div className="flex items-start gap-2 md:gap-3">
                  <Sparkles className="h-4 w-4 flex-shrink-0 text-black sm:h-5 sm:w-5" />
                  <h3 className="text-[14px] font-semibold text-black sm:text-[15px] md:text-[16px] lg:whitespace-nowrap">
                    Scan your site and see what isn't working
                  </h3>
                </div>
                <div className="flex w-full flex-1 items-center gap-2 md:gap-3">
                  <input
                    type="text"
                    placeholder="Find your business name"
                    className="min-w-0 flex-1 rounded-lg bg-[#F9FAFB] px-3 py-2.5 text-[13px] placeholder:text-gray-400 focus:border-[#473BF0] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#473BF0] sm:px-4 sm:text-[14px] md:py-3"
                  />
                  <button className="flex-shrink-0 ml-auto rounded-full bg-[#473BF0] px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#3730DB] focus:outline-none focus:ring-2 focus:ring-[#473BF0] focus:ring-offset-1 sm:px-5 sm:text-[14px] md:px-6 md:py-3 md:text-[15px]">
                    Get my AI Report →
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Floating Cards - positioned individually */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05, x: 5 }}
            className="absolute right-[10%] top-[15%] z-30 hidden w-auto rounded-full bg-white px-6 py-4 shadow-lg lg:block xl:right-[12%]"
          >
            <p className="flex items-center gap-2 whitespace-nowrap text-[14px] font-medium text-black">
              <span className="h-2 w-2 flex-shrink-0 rounded-full bg-black"></span>
              See exactly what to fix
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05, x: 5 }}
            className="absolute right-[12%] top-[32%] z-30 hidden w-auto rounded-full bg-white px-6 py-4 shadow-lg lg:block xl:right-[14%]"
          >
            <p className="flex items-center gap-2 whitespace-nowrap text-[14px] font-medium text-black">
              <span className="h-2 w-2 flex-shrink-0 rounded-full bg-black"></span>
              Discover keyword growth potential
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05, x: 5 }}
            className="absolute right-[10%] top-[48%] z-30 hidden w-auto rounded-full bg-white px-6 py-4 shadow-lg lg:block xl:right-[12%]"
          >
            <p className="flex items-center gap-2 whitespace-nowrap text-[14px] font-medium text-black">
              <span className="h-2 w-2 flex-shrink-0 rounded-full bg-black"></span>
              Compare with local competitors
            </p>
          </motion.div>
        </div>

        {/* Spacer for bottom card */}
        <div className="h-8 md:h-16"></div>
      </div>
    </section>
  );
}
