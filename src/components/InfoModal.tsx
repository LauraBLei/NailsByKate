import { useModal } from "@/context/modalcontext";
import { CircleSmall, X } from "lucide-react";
import { useEffect, useRef } from "react";

export const InfoModal = () => {
  const modalRef = useRef<HTMLDivElement>(null);

  const { closeInfoModal, infoModal } = useModal();
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && infoModal) {
        closeInfoModal();
      }
    };

    if (infoModal) {
      document.addEventListener("keydown", handleEscapeKey);
      // Calculate scrollbar width to prevent layout shift
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      // Prevent body scroll and compensate for scrollbar
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [infoModal, closeInfoModal]);
  if (infoModal) {
    console.log("infomodal open");
  }

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeInfoModal();
    }
  };

  return (
    <div
      className={`fixed z-50 inset-0 w-full h-screen bg-brand-Black/50 items-center justify-center ${
        infoModal ? "flex" : "hidden"
      }`}
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="bg-brand-CreamPink max-w-[800px]  text-brand-Black px-2 py-10 md:p-10 rounded-md flex flex-col gap-5"
      >
        <div className="w-full flex justify-end">
          <button onClick={closeInfoModal}>
            <X className="text-brand-Black" />
          </button>
        </div>
        <h1 className="text-lg md:text-2xl font-semibold">
          MANEKYR + HEALTH TREATMENT
        </h1>
        <p className="text-base md:text-lg">
          Manekyrtyper du kan velge mellom:
        </p>
        <ul className=" text-sm md:text-base flex flex-col gap-2 pl-2">
          <ListItem text="Europeisk: Skånsom dytting og polering av pterygium (laget som danner neglebånd), uten å kutte selve neglebåndet. " />
          <ListItem text="Russisk: Dytting og polering av pterygium ved bruk av kombinasjonsteknikk eller maskinmetode, med fjerning av neglebånd." />
          <ListItem text="Tørr: Dytting og polering av pterygium samt klipping av neglebånd, uten å mykgjøre neglebåndet først." />
          <ListItem text="populær: Kombo: En kombinasjon av klassisk og maskinmetode. Neglebåndet fjernes uten mykgjøring." />
          <ListItem text="Maskin: Hele prosessen utføres med maskin, uten mykgjøring av neglebånd." />
          <ListItem text="Klassisk: Tradisjonell manikyt hvor neglebånd fjernes uten bruk av maskiner." />
        </ul>
      </div>
    </div>
  );
};

const ListItem = ({ text }: { text: string }) => (
  <li className="flex gap-5 items-center">
    <CircleSmall className="w-5 h-5 flex-shrink-0 mt-1" />
    <p>{text}</p>
  </li>
);
