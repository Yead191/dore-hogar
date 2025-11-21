import { getTranslate } from "@/lib/helpers/getTranslate";
import AppButton from "@/shared/buttons/AppButton";
import PlayButton from "@/shared/buttons/PlayButton";
import Image from "next/image";

export async function WhyShopWithUs() {
  const data: any = await getTranslate("WhyShopWithUs");

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-[#09B782] mb-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT */}
        <div className="text-white space-y-6">
          <h1
            className="section-title leading-tight text-[#FCD770]"
            dangerouslySetInnerHTML={{
              __html: data.heading.replace(
                /<highlight>(.*?)<\/highlight>/g,
                `<span class="  text-white">$1</span>`
              ),
            }}
          ></h1>

          <p className="text-[#FFFFFF] lg:text-lg leading-relaxed text-justify">
            {data.paragraph1}
          </p>

          <p className="text-[#FFFFFF] lg:text-lg leading-relaxed text-justify">
            {data.paragraph2}
          </p>

          {/* DOWNLOAD BUTTONS */}
          <div className="flex justify-between md:justify-start gap-2  lg:gap-4 pt-4">
            <AppButton />
            <PlayButton />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/assets/images/home/shop.png"
            alt="Why Shop With Us"
            width={600}
            height={600}
            draggable={false}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
