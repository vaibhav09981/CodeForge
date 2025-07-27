"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
  Keyboard,
  FreeMode,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "CodeForge gave me the confidence to contribute to a large codebase. The feedback from my peers was invaluable for my growth and understanding of real-world development practices.",
    author: "Jane Doe",
    role: "Computer Science Student",
  },
  {
    text: "As a project lead, CodeForge provides an incredible platform to mentor new contributors and see innovative ideas come to life. The collaborative spirit here is truly inspiring.",
    author: "John Smith",
    role: "Project Lead for DSA Visualizer",
  },
  {
    text: "I started at CodeForge with basic coding skills, and through the guidance of the community and hands-on experience, I've grown immensely. It's more than just coding; it's about building together.",
    author: "Emily White",
    role: "Aspiring Software Engineer",
  },
  {
    text: "The open-source environment at CodeForge is fantastic for learning and experimenting. I was able to contribute to a feature that's now used by many, and that's a truly rewarding feeling.",
    author: "David Green",
    role: "Backend Developer & Contributor",
  },
  {
    text: "CodeForge helped me bridge the gap between academic knowledge and practical application. The supportive community and clear contribution guidelines made my first open-source experience seamless and enjoyable.",
    author: "Sarah Brown",
    role: "Recent Graduate & Frontend Enthusiast",
  },
];

const TestimonialsCard = () => {
  return (
    <div className="mt-16 rounded-[45px] bg-dark mx-4 py-10 lg:py-[60px]">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Autoplay,
          Mousewheel,
          Keyboard,
          FreeMode,
        ]}
        spaceBetween={30}
        slidesPerView={"auto"}
        freeMode={true}
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000 }}
        loop
        className="text-green max-w-full w-full"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="relative px-6 lg:py-12 text-white">
              <p className="relative mb-8 leading-relaxed border-green border px-6 py-8 lg:p-16 rounded-[45px]">
                {testimonial.text}
                <span className="absolute -bottom-7 left-20 lg:left-28 transform -translate-x-1/2 w-0 h-0 border-t-[30px] border-t-dark border-x-[30px] border-x-transparent z-10"></span>
                <span className="absolute -bottom-8 left-20 lg:left-28 transform -translate-x-1/2 w-0 h-0 border-t-[32px] border-t-green border-x-[30px] border-x-transparent"></span>
              </p>
              <h4 className="font-semibold text-green ml-16 lg:ml-28 mt-10">
                {testimonial.author}
              </h4>
              <p className="text-gray-500 text-sm mt-1 ml-16 lg:ml-28 mb-16">
                {testimonial.role}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsCard;