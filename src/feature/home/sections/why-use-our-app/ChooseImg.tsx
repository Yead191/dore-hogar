"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ChooseImg({ whyChooseUs }: any) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: false,
      mirror: true,
    });

    // refresh AOS after images load or DOM changes
    const handleResize = () => AOS.refresh();
    globalThis.addEventListener("resize", handleResize);

    return () => {
      globalThis.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div data-aos="fade-right" className="flex justify-center md:justify-start">
      {/* <div className=" w-80 h-80 md:w-96 md:h-96 2xl:w-[500px] 2xl:h-[500px]"> */}
      <div className=" h-full">
        <Image
          src="/assets/images/home/phone2.png"
          alt={"why choose us image"}
          width={900}
          height={900}
          draggable={false}
          className="w-full h-full lg:h-fit object-cover scale-125 lg:scale-110"
        />
      </div>
    </div>
  );
}
