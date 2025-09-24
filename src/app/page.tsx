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
    <div className="flex flex-col gap-10 items-center max-w-[1400px] w-full">
      {/* Header - always visible, contains desktop nav and mobile button */}
      <div className="w-full">
        <HeaderComponent onMobileMenuClick={() => setIsSidebarOpen(true)} />
      </div>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <HeroSection />
      <PrislisteSection />
      <Booking />
      <OmMegSection />
      <Gallery />
    </div>
  );
}
