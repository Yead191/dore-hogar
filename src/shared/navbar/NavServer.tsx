import React from "react";
import Navbar from "./Navbar";
import { getTranslate } from "@/lib/helpers/getTranslate";

export default async function NavServer() {
  const t: any = await getTranslate("nav");
  // console.log(t);
  return <Navbar t={t} />;
}
