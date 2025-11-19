import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";

const testimonials = [
  {
    id: 1,
    image: "/crsl-1.png",
    name: "Sandy Sei",
    business: "Owner of Cyclo Noodles",
    revenue: "+$104,500/year",
    revenueLabel: "in new business revenue",
    description:
      "How Sandy increased qualified leads by 7X with HamiltonWise lead generation system",
  },
  {
    id: 2,
    image: "/crsl-2.png",
    name: "Sandy Sei",
    business: "Owner of Cyclo Noodles",
    revenue: "+$104,500/year",
    revenueLabel: "in new business revenue",
    description:
      "How Sandy increased qualified leads by 7X with HamiltonWise lead generation system",
  },
  {
    id: 3,
    image: "/crsl-3.png",
    name: "Dr Kimi Caswell",
    business: "Owner of Caswell Orthodontics",
    revenue: "+$104,500/year",
    revenueLabel: "in new business revenue",
    description:
      "How Sandy increased qualified leads by 7X with HamiltonWise lead generation system",
  },
  {
    id: 4,
    image: "/crsl-4.png",
    name: "Sandy Sei",
    business: "Owner of Cyclo Noodles",
    revenue: "+$104,500/year",
    revenueLabel: "in new business revenue",
    description:
      "How Sandy increased qualified leads by 7X with HamiltonWise lead generation system",
  },
];

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: false,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (emblaApi) {
      console.log("Embla carousel initialized");
    }
  }, [emblaApi]);

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      {/* Section Title - Containerized */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-8">
        <h2 className="mb-12 text-center text-[28px] font-medium text-black md:mb-14 md:text-[32px] lg:mb-16 lg:text-[36px]">
          Trusted by health care specialists
        </h2>
      </div>

      {/* Carousel - Full Width, No Container */}
      <div className="overflow-hidden pl-6 md:pl-8" ref={emblaRef}>
        <div className="flex">
          {/* Duplicate testimonials 3x for seamless infinite loop */}
          {[...testimonials, ...testimonials, ...testimonials].map(
            (testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="relative min-w-0 flex-[0_0_90%] pr-4 sm:flex-[0_0_45%] md:pr-5 lg:flex-[0_0_30%] lg:pr-6 xl:flex-[0_0_23%]"
              >
                {/* Card */}
                <div className="relative h-[500px] overflow-hidden rounded-2xl lg:h-[550px] lg:rounded-3xl">
                  {/* Background Image */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>

                  {/* Content */}
                  <div className="relative flex h-full flex-col justify-between p-6 lg:p-8">
                    {/* Top Section - Name & Business */}
                    <div>
                      <h3 className="text-[16px] font-medium text-white">
                        {testimonial.name}
                      </h3>
                      <p className="mt-1 text-[16px] font-medium text-white/80">
                        {testimonial.business}
                      </p>
                    </div>

                    {/* Bottom Section - Revenue & Description */}
                    <div>
                      <div className="mb-3">
                        <p className="text-[24px] font-bold text-white">
                          {testimonial.revenue}
                        </p>
                        <p className="mt-1 text-[12px] font-normal text-white/70">
                          {testimonial.revenueLabel}
                        </p>
                      </div>
                      <p className="text-[12px] font-normal leading-relaxed text-white/70">
                        {testimonial.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
