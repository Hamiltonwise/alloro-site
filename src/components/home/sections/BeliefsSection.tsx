import { motion } from "framer-motion";

const beliefs = [
  {
    id: 1,
    title: "Sales growth is more important than customization.",
    description:
      "The third party delivery apps and the big national brands have shaped how everyone orders online. We take their best practices and give them to you. This is why we outperform our competitors, who choose customization over sales.",
  },
  {
    id: 2,
    title: "We have to earn your business every month.",
    description:
      "Businesses are hard enough, you don't need another tech vendor tying you up in a long term contract. Customers vote with their feet if they don't like your business. We want you to be able to leave easily if we aren't adding value and helping you grow your business.",
  },
  {
    id: 3,
    title: "Businesses should own their customer relationships.",
    description:
      'One of the cruelest byproducts of tech "innovation" is how you are separated from your customers. If you ever decide to leave HamiltonWise, you get to bring your customers with you.',
  },
];

const founders = [
  {
    id: 1,
    name: "Corey Wise",
    title: "Co-Founder at HamiltonWise",
    image: "/corey.png",
  },
  {
    id: 2,
    name: "Alexander Hamilton",
    title: "Co-Founder at HamiltonWise",
    image: "/alex.png",
  },
];

export default function BeliefsSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1330px] px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:mb-14 lg:mb-16"
        >
          <h2 className="mb-3 text-[36px] font-medium text-black md:text-[40px] lg:text-[44px]">
            Three beliefs that guide our company
          </h2>
          <p className="text-[14px] font-medium text-[#898989] md:text-[15px] lg:text-[16px]">
            Understand the principles that guides our decisions.
          </p>
        </motion.div>

        {/* Main Content - Two Columns */}
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          {/* Left Column - Beliefs Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {beliefs.map((belief, index) => (
              <div key={belief.id}>
                <div className="py-8">
                  <h3 className="mb-4 text-[18px] font-medium leading-snug text-black md:text-[19px] lg:text-[20px]">
                    {belief.title}
                  </h3>
                  <p className="text-[14px] font-medium leading-relaxed text-[#898989] md:text-[15px] lg:text-[16px]">
                    {belief.description}
                  </p>
                </div>
                {/* Divider - except after last item */}
                {index < beliefs.length - 1 && (
                  <div className="h-px w-full bg-[#E5E5E5]" />
                )}
              </div>
            ))}
          </motion.div>

          {/* Right Column - Founder Profiles (Stacked Vertically) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            {founders.map((founder) => (
              <div key={founder.id} className="grid grid-cols-[auto_1fr] gap-4">
                {/* Profile Image */}
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="h-[250px] w-[250px] object-cover"
                  />
                </div>

                {/* Info - Aligned to bottom of image */}
                <div className="flex flex-col justify-end">
                  {/* Signature with negative margin */}
                  <img
                    src="/signature.png"
                    alt="Signature"
                    className="-ml-[50px] mb-2 h-auto w-32"
                  />

                  {/* Name */}
                  <p className="mb-1 text-[18px] font-medium text-[#414141] md:text-[19px] lg:text-[20px]">
                    {founder.name}
                  </p>

                  {/* Title */}
                  <p className="text-[14px] font-medium text-[#898989] md:text-[15px] lg:text-[16px]">
                    {founder.title}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
