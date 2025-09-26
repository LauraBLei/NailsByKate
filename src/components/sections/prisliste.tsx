import { useModal } from "@/context/modalcontext";
import { Headline } from "../headline";
import { ServiceCard } from "../serviceCard";

export const PrislisteSection = () => {
  const { openInfoModal } = useModal();
  return (
    <section id="prisliste">
      <Headline value="PRISLISTE" />
      <div className="p-5 flex gap-5  text-base justify-evenly flex-wrap w-full">
        <ServiceCard
          src="/gallery/4.png"
          alt="Negler"
          time="45 min"
          price="250"
          title="MANIKYR + HEALTH TREATMENT"
        >
          <div>
            <p>
              En valgfri manikyr fra en av de 7 ulike typene, inkludert et lag
              med vitaminrik neglelakk som styrker og fremmer sunne negler.
            </p>
            <div className="w-full flex justify-center">
              <button onClick={openInfoModal} className="button">
                Les mer
              </button>
            </div>
          </div>
        </ServiceCard>
        <ServiceCard
          src="/gallery/1.png"
          alt="Negler"
          time="1,5 time"
          price="400"
          title="GELLAKK PÅ EGNE NEGLER"
        >
          <div>
            <p>
              Inkluderer valgfri manikyrtype. Naturlige negler lakkeres med
              valgfri gellakk som varer i 3–4 uker (anbefales maks 4 uker).
            </p>
          </div>
        </ServiceCard>
        <ServiceCard
          src="/forlengelse.jpg"
          alt="Negler"
          time="2–3 timer"
          price="600–800"
          title="GELLAKK MED FORLENGELSE"
        >
          <div className="flex flex-col gap-2">
            <ul>
              <li>XS/S lengde: 600 NOK</li>
              <li>M lengde: 700 NOK</li>
              <li>L/XL lengde: 800 NOK</li>
            </ul>
            <p>
              Inkluderer valgfri manikyrtype. Naturlige negler forlenges til
              ønsket lengde med tips eller polygel, deretter dekkes med valgfri
              gellakk.
            </p>
          </div>
        </ServiceCard>
        <ServiceCard
          src="/påfyll.jpg"
          alt="Negler"
          time="2–3 timer"
          price="500–700"
          title="PÅFYLL"
        >
          <div>
            <p>
              Tidligere gellakk fjernes, og neglene bygges opp på nytt med
              friskt lag av gellakk. Anbefales hver 3.–4. uke (maks 4 uker).
              Inkluderer valgfri manikyrtype. Pris er avhengig av lengde og
              mengde arbeid, med tanke på ødelagte negler som skal forlenges.
            </p>
          </div>
        </ServiceCard>
        <ServiceCard
          src="/gallery/7.png"
          alt="Negler"
          time="25 min"
          price="400"
          title="KUN FJERNING"
        >
          <div className="flex flex-col gap-5">
            <p>Fjerning av gellakk eller forlengelse med maskin.</p>
            <p>
              OBS: Manikyr er ikke inkludert, men jeg anbefaler å kombinere
              denne prosedyren med Health Treatment for best resultat.
            </p>
          </div>
        </ServiceCard>
        <ServiceCard
          src="/tilleg.jpg"
          alt="Negler"
          time="25 min"
          title="TILLEGG"
        >
          <div className="flex flex-col gap-5">
            <div className="flex justify-between">
              <p>French</p>
              <p>150 NOK</p>
            </div>
            <div className="flex justify-between">
              <p>Design</p>
              <p>150–300 NOK</p>
            </div>
            <div className="flex justify-between gap-5">
              <p>Charms:</p>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between">
                  <p>Små:</p>
                  <p>2 NOK per stk.</p>
                </div>
                <div className="flex justify-between">
                  <p>Store:</p>
                  <p>5 NOK per stk.</p>
                </div>
              </div>
            </div>
          </div>
        </ServiceCard>
      </div>
    </section>
  );
};
