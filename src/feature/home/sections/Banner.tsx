import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div
      id="banner"
      style={{
        backgroundImage: "url('/assets/images/home/banner_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen flex flex-col items-center justify-end"
    >
      <div className="lg:max-w-[700px]  2xl:max-w-[900px] mx-auto text-center lg:mt-40 2xl:mt-[260px]">
        <h1
          data-aos="fade-up"
          className="font-semibold mb-8 leading-[120%] text-[28px] lg:text-5xl 2xl:text-6xl   "
        >
          Shop Smarter, Faster, and Better —{" "}
          <span className="text-[#D5382E]">All in One App</span>{" "}
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay={100}
          className="text-sm lg:text-base  2xl:text-lg lg:max-w-[900px]"
        >
          Discover a smarter shopping experience designed just for you. Browse
          thousands of products, enjoy app-only discounts, track your orders,
          and get everything you love all with a single tap.
        </p>
        <div
          // data-aos="fade-up"
          data-aos="zoom-in"
          data-aos-delay={150}
          className="flex justify-end"
        >
          <Image
            src={"/assets/images/home/phone.png"}
            alt="Phone Image"
            width={1320}
            height={600}
            draggable={false}
            className="w-full  h-full object-contain mx-auto mt-6"
          />
        </div>
      </div>
    </div>
  );
}
