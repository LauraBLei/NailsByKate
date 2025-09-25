import { useModal } from "@/context/modalcontext";
import { CircleSmall } from "lucide-react";
import { Modal } from "./Modal";

export const InfoModal = () => {
  const { closeInfoModal, infoModal } = useModal();

  return (
    <Modal isOpen={infoModal} onClose={closeInfoModal}>
      <h1 className="text-lg md:text-2xl font-semibold">
        MANEKYR + HEALTH TREATMENT
      </h1>
      <p className="text-base md:text-lg">Manekyrtyper du kan velge mellom:</p>
      <ul className="text-sm md:text-base flex flex-col gap-2 pl-2">
        <ListItem text="Europeisk: Skånsom dytting og polering av pterygium (laget som danner neglebånd), uten å kutte selve neglebåndet. " />
        <ListItem text="Russisk: Dytting og polering av pterygium ved bruk av kombinasjonsteknikk eller maskinmetode, med fjerning av neglebånd." />
        <ListItem text="Tørr: Dytting og polering av pterygium samt klipping av neglebånd, uten å mykgjøre neglebåndet først." />
        <ListItem text="populær: Kombo: En kombinasjon av klassisk og maskinmetode. Neglebåndet fjernes uten mykgjøring." />
        <ListItem text="Maskin: Hele prosessen utføres med maskin, uten mykgjøring av neglebånd." />
        <ListItem text="Klassisk: Tradisjonell manikyt hvor neglebånd fjernes uten bruk av maskiner." />
      </ul>
    </Modal>
  );
};

const ListItem = ({ text }: { text: string }) => (
  <li className="flex gap-5 items-center">
    <CircleSmall className="w-5 h-5 flex-shrink-0 mt-1" />
    <p>{text}</p>
  </li>
);
