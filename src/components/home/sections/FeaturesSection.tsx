import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    id: 1,
    label: "AI practice health snapshot",
    title: "AI practice health snapshot",
    description:
      "All your critical metrics in one clean view — no more hopping between PMS, reports, and spreadsheets.",
  },
  {
    id: 2,
    label: "AI agents work 24/7",
    title: "AI agents work 24/7",
    description:
      "Our intelligent agents continuously monitor your practice, identifying opportunities and alerting you to issues before they become problems.",
  },
  {
    id: 3,
    label: "Plain-english insights",
    title: "Plain-english insights",
    description:
      "Complex data transformed into clear, actionable recommendations you can understand and act on immediately — no technical jargon required.",
  },
  {
    id: 4,
    label: "5-Minute setup",
    title: "5-Minute setup",
    description:
      "Get started in minutes, not hours. Our streamlined onboarding process connects seamlessly with your existing systems for instant results.",
  },
];

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full bg-[#F9FAFB] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1190px] px-6 md:px-8">
        {/* Section Title */}
        <h2 className="mb-12 text-center text-[32px] font-semibold text-black md:mb-14 md:text-[40px] lg:mb-16 lg:text-[48px]">
          Everything you need,
          <br />
          nothing you don't
        </h2>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-6 md:mb-10 md:gap-8 lg:mb-12 lg:gap-12">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(index)}
              className="relative pb-2 text-[18px] font-semibold transition-colors md:text-[20px] lg:text-[22px]"
            >
              <span
                className={`${
                  activeTab === index ? "text-black" : "text-[#777777]"
                }`}
              >
                {feature.label}
              </span>
              {/* Active indicator */}
              {activeTab === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-black"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative h-[400px] overflow-hidden rounded-2xl bg-white shadow-sm md:h-[500px] lg:h-[600px] lg:rounded-3xl"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url(/def-white.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Content - Bottom Left */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mb-3 text-[20px] font-medium text-black md:mb-4 md:text-[22px] lg:text-[24px]"
              >
                {features[activeTab].title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="max-w-2xl text-[16px] font-medium leading-relaxed text-[#666666] md:text-[17px] lg:text-[18px]"
              >
                {features[activeTab].description}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
