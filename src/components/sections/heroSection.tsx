import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="w-full relative h-auto shadow-lg">
      <div className="relative w-full h-[370px] overflow-hidden flex items-center">
        <Image
          src={"/hero.png"}
          alt="Nails"
          fill
          className="object-cover"
          quality={100}
          priority
          unoptimized
        />
        <div className="absolute z-20 text-white text-xl md:text-2xl flex flex-col gap-2 ml-5 md:ml-30">
          <p>
            Nails <span className="text-xs md:text-base">By</span> Kate
          </p>
          <p>Beautiful Nails, Every Time</p>
          <a href="#booking" className="button mt-2 text-base md:text-2xl">
            Book Your Appointment Today
          </a>
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
    </div>
  );
};
