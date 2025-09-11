import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const testimonials = [
  {
    text: "As someone with chronic health issues, finding the right healthcare provider was crucial. Model Specialist Hospital has been a godsend. Their integrated approach to healthcare has significantly improved my quality of life.",
    name: "Fadipe Oluwalana",
    title: "Patient",
    avatar: "https://placehold.co/100x100/1e40af/fff?text=FO"
  },
  {
    text: "I was truly impressed by the professionalism and compassion of the entire team. They made a difficult time much easier to handle. The facilities are top-notch and the care is exceptional.",
    name: "Jane Doe",
    title: "Patient",
    avatar: "https://placehold.co/100x100/1e40af/fff?text=JD"
  },
  {
    text: "Model Specialist Hospital provides a truly holistic patient experience. From the initial consultation to post-treatment follow-up, every detail is handled with care. I highly recommend them.",
    name: "John Smith",
    title: "Patient",
    avatar: "https://placehold.co/100x100/1e40af/fff?text=JS"
  }
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const visibleTestimonials = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length]
  ];

  return (
    <section className="bg-white p-8 md:px-20 font-sans">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 text-[18.51px] text-[#1B7FF2] bg-white border rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#121212] tracking-tight leading-tight">
            What Our Patient Say<br className="hidden"/> About Us
          </h2>
          <p className="font-sans text-[16px] text-[#2E2E27] max-w-2xl mx-auto mt-4">
            Hear from patients who have experienced our care firsthand.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 transition-transform duration-500 ease-in-out">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id || index}
              className="bg-[#EDF5FE] p-8 rounded-3xl shadow-md w-full md:w-1/2 flex-shrink-0 relative overflow-hidden"
            >
              {/* Quote watermark */}
              <div className="absolute bottom-4 right-4 text-[#1B80F3] text-[120px] pointer-events-none z-10">
                <BiSolidQuoteAltLeft />
              </div>

              <p className="font-sans text-[#080808] text-[15px] mb-6 relative z-10">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center space-x-4 mt-6 relative z-10">
                <img
                  src={testimonial.avatar || "https://placehold.co/100x100/1e40af/fff?text=XX"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-blue-500"
                />
                <div className="text-gray-800">
                  <p className="font-semibold text-[#121212] text-[19.5px]">{testimonial.name}</p>
                  <p className="text-[12px] text-[#2E2E27]">{testimonial.title || testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots and Arrows */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
            aria-label="Previous testimonial"
          >
            <BsChevronLeft size={20} />
          </button>
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? "bg-[#1B80F3]" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-[#1B80F3] text-white hover:bg-blue-600 transition-colors"
            aria-label="Next testimonial"
          >
            <BsChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
