import { HeaderComponent } from "@/components/header";
import { HeroSection } from "@/components/sections/heroSection";
import { PrislisteSection } from "@/components/sections/prisliste";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 items-center max-w-[1400px]">
      <HeaderComponent />
      <HeroSection />
      <PrislisteSection />
    </div>
  );
}
