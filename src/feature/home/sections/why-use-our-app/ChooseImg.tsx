import Image from "next/image";
import React from "react";
import "aos/dist/aos.css";
export default function ChooseImg({ whyChooseUs }: any) {
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
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
