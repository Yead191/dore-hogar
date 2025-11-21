import navItems from "@/constants/navItem";
import { getTranslate } from "@/lib/helpers/getTranslate";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AppButton from "./buttons/AppButton";
import PlayButton from "./buttons/PlayButton";

export default async function Footer() {
  const translateData: any = await getTranslate("footer");
  const links = [
    { label: translateData.links.home, href: "/" },
    { label: translateData.links.about, href: "/about" },
    { label: translateData.links.contact, href: "/contact" },
    { label: translateData.links.privacy, href: "/privacy-policy" },
    { label: translateData.links.terms, href: "/terms-condition" },
  ];
  return (
    <footer className="pt-16 lg:pt-20 bg-[#E6F8F3] ">
      <div className="container flex flex-col items-center justify-center">
        <Image
          src="/logo 2.png"
          alt="VIAJIA Logo"
          width={400}
          height={200}
          className="h-full lg:h-52 w-fit mb-10"
        />
        {/* Navigation Links */}
        <div className="flex flex-wrap gap-4 lg:gap-6 text-xs lg:text-sm text-black/80 mb-8 md:mb-10 items-center justify-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-black font-medium "
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* DOWNLOAD BUTTONS */}
        <div className="flex justify-between md:justify-center gap-2  lg:gap-4 mb-10 w-full">
          <AppButton />
          <PlayButton />
        </div>
        {/* Bottom copyright */}
        <div className="text-center  text-sm text-black/70 border-t border-[#37373A] w-full py-4">
          {translateData.copyright}
        </div>
      </div>
    </footer>
  );
}
