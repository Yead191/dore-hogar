import Image from "next/image";
import React from "react";
import ContactUsForm from "./component/ContactUsForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center container">
      <div className="grid md:grid-cols-2 gap-12 items-center justify-center pt-[88px]">
        {/* Left side - Form */}
        <div className="py-6 lg:py-0">
          <h1 className="section-title text-[#06825C] lg:mb-2">Contact Us</h1>
          <p className="section-subtitle text-[#717171] -mt-2 lg:mt-0 mb-8">
            Any question or remarks? Just write us a message!
          </p>
          <div data-aos="fade-up" data-aos-delay={100}>
            <ContactUsForm />
          </div>
        </div>

        {/* Right side - Image */}
        <div className="hidden md:block">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/assets/images/contact/office.png"
              alt="Office workspace with ergonomic chair"
              width={500}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
