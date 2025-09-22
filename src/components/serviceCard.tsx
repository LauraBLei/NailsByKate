import { Clock } from "lucide-react";
import Image from "next/image";

interface ServiceCardProps {
  src: string;
  alt: string;
  time: string;
  price: string;
  title: string;
  children: React.ReactNode;
}

export const ServiceCard = ({
  src,
  alt,
  time,
  price,
  children,
  title,
}: ServiceCardProps) => {
  return (
    <article className="relative bg-brand-SecondPink max-w-[380px] w-full h-[465px] rounded-md shadow-md pt-5 flex flex-col">
      <div className="relative w-full h-[156px] overflow-hidden  mb-5">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      <h2 className="mb-2 px-5 font-semibold">{title}</h2>
      <div className="flex-1 px-5">{children}</div>
      <div className="flex justify-between mt-auto p-5 font-semibold">
        <p className="flex gap-2">
          <Clock className="text-brand-Black" /> ca. {time}
        </p>
        <p>{price} NOK</p>
      </div>
    </article>
  );
};
