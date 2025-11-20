"use server";
import { cookies } from "next/headers";
import enData from "../../../public/locales/en/common.json";
import esData from "../../../public/locales/es/common.json";

export const getTranslate = async (key: keyof typeof enData) => {
  const langType = (await cookies()).get("lang")?.value || "es";
  if (langType === "es") {
    return esData[key as keyof typeof esData];
  }
  return enData[key as keyof typeof enData];
};
