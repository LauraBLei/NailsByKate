"use client";

import { HeaderComponent } from "@/components/header";
import { Booking } from "@/components/sections/booking";
import { Gallery } from "@/components/sections/gallery";
import { HeroSection } from "@/components/sections/heroSection";
import { OmMegSection } from "@/components/sections/om";
import { PrislisteSection } from "@/components/sections/prisliste";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <div className="w-full">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-brand-CreamPink shadow-md w-full">
        <div className="max-w-[1400px] mx-auto">
          <HeaderComponent />
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col gap-10 items-center max-w-[1400px] w-full mx-auto">
        <HeroSection />
        <PrislisteSection />
        <Booking />
        <OmMegSection />
        <Gallery />
      </div>
    </div>
  );
}
