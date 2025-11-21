import { FEATURES } from "@/constants/features";
import Image from "next/image";
import React from "react";

export default function FeatureCard({ feature, index }: any) {
  return (
    <div
      data-aos="zoom-in-up"
      className={`${
        index === 0 ? "bg-[#E6F8F3]  " : "bg-[#F8F8F8]"
      } p-4 flex gap-4 items-start lg:items-center rounded-[20px]`}
    >
      <div
        className={`text-3xl shrink-0 flex items-center justify-center h-full ${
          index === 0 ? "bg-[#FFFFFF]" : "bg-[#FFFFFF]"
        } p-3 rounded-full`}
      >
        <Image
          src={FEATURES[index]?.icon}
          alt={FEATURES[index]?.title}
          width={100}
          height={100}
          className="h-10 w-10 object-contain"
        />
      </div>
      <div>
        <h3 className="text-[#000000] font-semibold mb-1 text-lg">
          {feature.title}
        </h3>
        <p className="text-[#000000]/90 text-sm">{feature.description}</p>
      </div>
    </div>
  );
}
