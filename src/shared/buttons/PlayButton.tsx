import { getTranslate } from "@/lib/helpers/getTranslate";
import Image from "next/image";
import React from "react";

export default async function PlayButton({
  isAnimated = true,
}: {
  isAnimated?: boolean;
}) {
  const data: any = await getTranslate("WhyShopWithUs");

  return (
    <button
      data-aos={isAnimated ? "fade-up" : null}
      data-aos-delay={150}
      className="px-4 lg:px-6 py-2 bg-black rounded-[10px] flex justify-center items-center gap-2 lg:gap-[17px] w-full md:w-fit"
    >
      <Image
        src="https://i.ibb.co/s9dSrDs/download-2-removebg-preview-1.png"
        alt="playstore logo"
        className="lg:w-[30px] lg:h-[30px] w-5 h-5"
        width={50}
        height={50}
      />
      <div className="flex items-start flex-col  text-start">
        <span className="text-xs lg:text-[0.850rem] font-medium text-[#ffff] ">
          {data.buttons.appStore}
        </span>
        <h3 className="text-sm lg:text-[1.5rem] font-medium text-[#ffff] leading-5 mb-2 ">
          Google Play
        </h3>
      </div>
    </button>
  );
}
