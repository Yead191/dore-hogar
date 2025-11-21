import React from "react";
import Banner from "./sections/Banner";
import { WhyChooseUs } from "./sections/why-use-our-app/WhyUseOurApp";
import { WhyShopWithUs } from "./sections/WhyShopWithUs";
import { getTranslate } from "@/lib/helpers/getTranslate";
import FAQSection from "./sections/FAQ";

export default async function HomePage() {
  const faq: any = await getTranslate("faq");

  const items = faq?.faqData?.map((item: any, index: number) => ({
    key: String(index + 1),
    label: item.question,
    children: <p>{item.answer}</p>,
  }));
  return (
    <section>
      <Banner />
      <WhyChooseUs />
      <WhyShopWithUs />
      <FAQSection items={items} faqHeading={faq?.faqHeading} />
    </section>
  );
}
