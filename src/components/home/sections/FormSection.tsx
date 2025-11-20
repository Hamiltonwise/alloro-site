import { useState } from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Enterprise Solutions",
    description: "Custom implementations for organizations with 5+ locations",
  },
  {
    title: "Global Support",
    description: "24/7 dedicated support team across all time zones",
  },
  {
    title: "White Glove Onboarding",
    description: "Dedicated implementation team ensures seamless integration",
  },
];

export default function FormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    practiceName: "",
    phoneNumber: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="w-full bg-white py-10 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1330px] px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-7 md:gap-12 lg:gap-12">
          {/* Left Contenat */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center text-center md:col-span-3 md:text-left"
          >
            {/* Title & Subtitle */}
            <div className="mb-6 lg:mb-12">
              <h2 className="mb-3 text-[28px] font-bold leading-tight text-black md:text-[42px] lg:text-[48px]">
                Ready to Transform
                <br />
                Your Practice?
              </h2>
              <p className="text-[15px] font-medium text-[#666666] md:text-[20px] lg:text-[22px]">
                Join 100+ elite practices leveraging AI-powered intelligence to
                drive unprecedented growth.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 lg:space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="mb-1 text-center text-[17px] font-medium text-black md:text-left md:text-[22px] lg:text-[24px]">
                    {feature.title}
                  </h3>
                  <p className="text-center text-[15px] font-medium text-[#666666] md:text-left md:text-[20px] lg:text-[22px]">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center md:col-span-4"
          >
            <div className="w-full rounded-3xl bg-white p-5 shadow-lg md:p-11 md:py-[80px]">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-[16px] font-medium text-black md:text-[19px] lg:text-[20px]"
                  >
                    Full name<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter Full name"
                    required
                    className="w-full rounded-lg border border-[#E0E0E0] px-4 py-3 text-[14px] font-normal text-black placeholder-[#999999] transition-colors focus:border-[#473BF0] focus:outline-none md:text-[15px] lg:text-[16px]"
                  />
                </div>

                {/* Business Email */}
                <div>
                  <label
                    htmlFor="businessEmail"
                    className="mb-2 block text-[18px] font-medium text-black md:text-[19px] lg:text-[20px]"
                  >
                    Business Email<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="businessEmail"
                    name="businessEmail"
                    value={formData.businessEmail}
                    onChange={handleChange}
                    placeholder="Enter Correct Email"
                    required
                    className="w-full rounded-lg border border-[#E0E0E0] px-4 py-3 text-[14px] font-normal text-black placeholder-[#999999] transition-colors focus:border-[#473BF0] focus:outline-none md:text-[15px] lg:text-[16px]"
                  />
                </div>

                {/* Practice Name */}
                <div>
                  <label
                    htmlFor="practiceName"
                    className="mb-2 block text-[18px] font-medium text-black md:text-[19px] lg:text-[20px]"
                  >
                    Practice Name<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="practiceName"
                    name="practiceName"
                    value={formData.practiceName}
                    onChange={handleChange}
                    placeholder="Enter Your Practice Name"
                    required
                    className="w-full rounded-lg border border-[#E0E0E0] px-4 py-3 text-[14px] font-normal text-black placeholder-[#999999] transition-colors focus:border-[#473BF0] focus:outline-none md:text-[15px] lg:text-[16px]"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="mb-2 block text-[18px] font-medium text-black md:text-[19px] lg:text-[20px]"
                  >
                    Phone Number<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter Correct Number"
                    required
                    className="w-full rounded-lg border border-[#E0E0E0] px-4 py-3 text-[14px] font-normal text-black placeholder-[#999999] transition-colors focus:border-[#473BF0] focus:outline-none md:text-[15px] lg:text-[16px]"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-full bg-[#473BF0] px-8 py-3 text-[16px] font-medium text-white transition-colors hover:bg-[#3730d8] md:px-12 md:py-4 md:text-[19px] lg:text-[20px]"
                  >
                    Get Started with Alloro
                  </motion.button>
                </div>

                {/* Disclaimer */}
                <p className="text-center text-[12px] font-medium text-[#888888] md:text-[13px] lg:text-[14px]">
                  submitting this form, you agree to our Terms of Service and
                  Privacy Policy.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
