import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

const testimonials = [
  {
    id: 1,
    practiceName: "Caswell Orthodontist",
    practiceSubtitle: "Oahu's Leading Orthodontist",
    quote:
      "the nicest and most welcoming staff! had an amazing experience with them for a little over a year!",
    stats: [
      { number: "+2", label: "Years of Partnership" },
      { number: "+10%", label: "Year over Year Growth" },
      { number: "+11", label: "More Patients Starts every Month" },
    ],
    image: "/kimi-2.png",
  },
  {
    id: 2,
    practiceName: "Summit Dental Care",
    practiceSubtitle: "Denver's Premier Dental Practice",
    quote:
      "Exceptional service and results. The AI insights have transformed how we manage our practice operations.",
    stats: [
      { number: "+3", label: "Years of Partnership" },
      { number: "+15%", label: "Year over Year Growth" },
      { number: "+18", label: "More Patients Starts every Month" },
    ],
    image: "/kimi-2.png",
  },
  {
    id: 3,
    practiceName: "Bright Smiles Clinic",
    practiceSubtitle: "Austin's Trusted Family Dentistry",
    quote:
      "The daily insights have helped us optimize scheduling and improve patient satisfaction dramatically.",
    stats: [
      { number: "+4", label: "Years of Partnership" },
      { number: "+22%", label: "Year over Year Growth" },
      { number: "+25", label: "More Patients Starts every Month" },
    ],
    image: "/kimi-2.png",
  },
];

export default function HealthcareProfessionalsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="w-full bg-[#F7F7F7] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1330px] px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:mb-14 lg:mb-16"
        >
          <h2 className="mb-4 text-[32px] font-semibold text-black md:text-[40px] lg:text-[48px]">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-[18px] font-normal text-[#888888] md:text-[20px] lg:text-[22px]">
            Real Doctors. Real Results. Real impact on their practises
          </p>
        </motion.div>

        {/* Carousel Card */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentTestimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="p-8 md:p-12 lg:p-16"
              >
                {/* Practice Info - Centered at top */}
                <div className="mb-8 text-center lg:mb-12">
                  <h3 className="mb-2 text-[32px] font-semibold text-black md:text-[36px] lg:text-[40px]">
                    {currentTestimonial.practiceName}
                  </h3>
                  <p className="text-[18px] font-medium text-black md:text-[19px] lg:text-[20px]">
                    {currentTestimonial.practiceSubtitle}
                  </p>
                </div>

                {/* Content Grid: Quote/Stats (1/3) + Image (2/3) */}
                <div className="grid items-center gap-8 md:grid-cols-3 md:gap-12">
                  {/* Left Content - Quote & Stats (1/3) */}
                  <div className="flex flex-col justify-center md:col-span-1">
                    {/* Quote */}
                    <div className="mb-8">
                      <p className="text-[16px] font-normal leading-relaxed text-[#666666] md:text-[17px] lg:text-[18px]">
                        "{currentTestimonial.quote}"
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-col gap-6">
                      {currentTestimonial.stats.map((stat, index) => (
                        <div key={index}>
                          <div className="mb-1 text-[48px] font-bold text-black md:text-[52px] lg:text-[56px]">
                            {stat.number}
                          </div>
                          <div className="text-[14px] font-normal text-[#888888] md:text-[15px] lg:text-[16px]">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Image (2/3) */}
                  <div className="flex items-center justify-center md:col-span-2">
                    <div className="overflow-hidden rounded-2xl lg:rounded-3xl">
                      <img
                        src={currentTestimonial.image}
                        alt={currentTestimonial.practiceName}
                        className="h-auto w-full object-cover md:h-[550px] md:w-[700px]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center justify-between">
            {/* Previous Button */}
            <div
              className={`flex items-center gap-3 ${
                currentIndex === 0
                  ? "opacity-0 pointer-events-none"
                  : "opacity-100"
              }`}
            >
              <motion.button
                onClick={handlePrevious}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E5E5E5] transition-colors hover:bg-[#D0D0D0]"
              >
                <ChevronLeft className="h-6 w-6 text-black" />
              </motion.button>
              <span className="text-[16px] font-medium text-[#999999] md:text-[17px] lg:text-[18px]">
                Previous
              </span>
            </div>

            {/* Next Button */}
            <div className="flex items-center gap-3">
              <span className="text-[16px] font-medium text-[#999999] md:text-[17px] lg:text-[18px]">
                Next
              </span>
              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E5E5E5] transition-colors hover:bg-[#D0D0D0]"
              >
                <ChevronRight className="h-6 w-6 text-black" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
