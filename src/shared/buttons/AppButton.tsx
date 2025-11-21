import { getTranslate } from "@/lib/helpers/getTranslate";
import Image from "next/image";
import React from "react";

export default async function AppButton() {
  const data: any = await getTranslate("WhyShopWithUs");

  return (
    <button data-aos="fade-up" data-aos-delay={100} className="px-2 lg:px-6 py-2 bg-black rounded-[10px] flex justify-center items-center gap-2 lg:gap-[17px] w-full md:w-fit">
      <Image
        src="https://i.ibb.co/xFjCsGm/download-1-removebg-preview.png"
        alt="apple logo"
        className="lg:w-[30px] lg:h-[30px] w-6 h-6"
        width={50}
        height={50}
      />
      <div className="text-start flex items-start flex-col">
        <span className="text-xs lg:text-[0.8rem] font-medium text-[#ffff]">
          {data.buttons.appStore}
        </span>
        <h3 className="text-sm lg:text-[1.5rem] font-medium leading-5 mb-2 text-[#ffff]">
          AppStore
        </h3>
      </div>
    </button>
  );
}
