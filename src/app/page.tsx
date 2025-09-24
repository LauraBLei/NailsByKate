"use client";

import { useState } from "react";
import { HeaderComponent } from "@/components/header";
import { Booking } from "@/components/sections/booking";
import { Gallery } from "@/components/sections/gallery";
import { HeroSection } from "@/components/sections/heroSection";
import { OmMegSection } from "@/components/sections/om";
import { PrislisteSection } from "@/components/sections/prisliste";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-brand-CreamPink shadow-md w-full">
        <div className="max-w-[1400px] mx-auto">
          <HeaderComponent onMobileMenuClick={() => setIsSidebarOpen(true)} />
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

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
