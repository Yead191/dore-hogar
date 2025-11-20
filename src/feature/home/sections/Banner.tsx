import React from "react";

export default function Banner() {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/images/home/banner_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <div className="lg:max-w-[700px] 2xl:max-w-[1176px] mx-auto text-3xl lg:text-5xl  2xl:text-[80px] text-center ">
        <h1 className="font-semibold mb-8 leading-[110%]">
          Shop Smarter, Faster, and Better —{" "}
          <span className="text-[#D5382E]">All in One App</span>{" "}
        </h1>
        <p className="lg:text-lg 2xl:text-[30px] leading-[]">
          Discover a smarter shopping experience designed just for you. Browse
          thousands of products, enjoy app-only discounts, track your orders,
          and get everything you love — all with a single tap.
        </p>
      </div>
    </div>
  );
}
