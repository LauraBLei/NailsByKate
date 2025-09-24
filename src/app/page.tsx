import { HeaderComponent } from "@/components/header";
import { Booking } from "@/components/sections/booking";
import { Gallery } from "@/components/sections/gallery";
import { HeroSection } from "@/components/sections/heroSection";
import { OmMegSection } from "@/components/sections/om";
import { PrislisteSection } from "@/components/sections/prisliste";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 items-center max-w-[1400px] w-full">
      <HeaderComponent />
      <HeroSection />
      <PrislisteSection />
      <Booking />
      <OmMegSection />
      <Gallery />
    </div>
  );
}
