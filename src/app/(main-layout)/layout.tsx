import NavServer from "@/shared/navbar/NavServer";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative">
      <NavServer />

      <section>{children}</section>
    </main>
  );
}
