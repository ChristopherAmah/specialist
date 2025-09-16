import React from "react";
import { SlLocationPin } from "react-icons/sl";

const ContactUsSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const description = form.description.value;
    const message = form.message.value;

    const subject = `New Contact Message from ${name}`;
    const body = `Hello,

You have a new message from your website contact form.

Name: ${name}
Email: ${email}
Phone: ${phone}
Description: ${description}

Message:
${message}

Thank you.`;

    // Change this to your email address
    window.location.href = `mailto:your-email@example.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="bg-white py-12 sm:py-16 px-4 font-sans">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-4 py-1 text-sm sm:text-base text-[#1B7FF2] border rounded-full mb-4">
            We'd Love To Hear From You
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#000000] tracking-tight leading-snug">
            Leave us a message
          </h2>
          <p className="text-base sm:text-lg text-[#2E2E27] max-w-xl mx-auto mt-4 px-2">
            Feel free to contact us. Submit your queries here and we will get
            back to you as soon as possible.
          </p>
        </div>

        {/* Info Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 px-2 sm:px-6 lg:px-20">
          {/* Address Card */}
          <div className="bg-[#000000] text-white p-6 sm:p-8 rounded-[14px] flex flex-col items-center justify-center text-center">
            <SlLocationPin className="w-10 h-10 mb-4" />
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-2">
              Address
            </h3>
            <p className="text-sm sm:text-base md:text-[15.75px] font-medium">
              5 Taiwo Balewa Crescent, Off Adeniran Ogunsanya, Surulere, Lagos.
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-[#EDEDED] p-6 sm:p-8 rounded-[14px] flex flex-col items-center justify-center text-center">
            <SlLocationPin className="w-10 h-10 text-[#8C8C8C] mb-4" />
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#8C8C8C] mb-2">
              Contact
            </h3>
            <p className="text-sm sm:text-base md:text-[15.75px] font-medium text-[#8C8C8C]">
              +234 802 314 1562
            </p>
          </div>

          {/* Social Media Card */}
          <div className="bg-[#EDEDED] p-6 sm:p-8 rounded-[14px] flex flex-col items-center justify-center text-center">
            <SlLocationPin className="w-10 h-10 text-[#8C8C8C] mb-4" />
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#8C8C8C] mb-2">
              Social Media
            </h3>
            <p className="text-sm sm:text-base md:text-[15.75px] font-medium text-[#8C8C8C]">
              Links
            </p>
          </div>
        </div>

        {/* Map & Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch lg:px-20">
          {/* Map */}
          <div className="w-full h-72 sm:h-80 md:h-auto md:min-h-[500px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4447385934526!2d3.354181814770114!3d6.529068025514691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8cc7e0255b89%3A0x67a9a14c69335a1b!2s5%20Taiwo%20Balewa%20Cres%2C%20Surulere%2C%20Lagos!5e0!3m2!1sen!2sng!4v1628109670742!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="w-full flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl md:text-[24px] font-semibold text-[#000000B2] mb-6">
              Send us a Message
            </h3>
            <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                required
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm sm:text-base"
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
