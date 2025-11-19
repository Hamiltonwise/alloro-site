import { motion } from "framer-motion";

const setupSteps = [
  {
    id: 1,
    title: "Connect Your Data",
    description: "Link your practice management system and website securely",
  },
  {
    id: 2,
    title: "AI Agents Activate",
    description:
      "Our intelligent agents immediately analyze your practice ecosystem.",
  },
  {
    id: 3,
    title: "Get Daily Insights",
    description: "Your personalized dashboard updates every morning at 8 AM.",
  },
];

export default function SetupSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1190px] px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:mb-14 lg:mb-16"
        >
          <h2 className="mb-4 text-[32px] font-medium text-black md:text-[40px] lg:text-[48px]">
            Setup take 5 mins
          </h2>
          <p className="text-[18px] font-medium text-[#666666] md:text-[20px] lg:text-[22px]">
            Three simple steps. Zero technical knowledge required.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {/* Left Column - Two Stacked Cards */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {setupSteps.slice(0, 2).map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative flex min-h-[270px] flex-col justify-end overflow-hidden rounded-2xl p-8 shadow-sm transition-shadow hover:shadow-md md:p-10 lg:rounded-3xl"
                style={{
                  backgroundImage: "url(/def-gray.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h3 className="mb-3 text-[20px] font-medium text-black md:text-[21px] lg:text-[22px]">
                  {step.title}
                </h3>
                <p className="text-[16px] font-medium leading-relaxed text-[#666666] md:text-[17px] lg:text-[18px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Single Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative flex min-h-[400px] flex-col justify-end overflow-hidden rounded-2xl p-8 shadow-sm transition-shadow hover:shadow-md md:p-10 lg:rounded-3xl"
            style={{
              backgroundImage: "url(/def-gray.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className="mb-3 text-[20px] font-medium text-black md:text-[21px] lg:text-[22px]">
              {setupSteps[2].title}
            </h3>
            <p className="text-[16px] font-medium leading-relaxed text-[#666666] md:text-[17px] lg:text-[18px]">
              {setupSteps[2].description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
