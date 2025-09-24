import { Headline } from "../headline";
import { ServiceCard } from "../serviceCard";

export const PrislisteSection = () => {
  return (
    <section>
      <Headline value="PRISLISTE" />
      <div className="p-5 flex gap-5  text-base justify-evenly flex-wrap w-full">
        <ServiceCard
          src="/forlengelse.jpg"
          alt="Negle"
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
              <button className="button">Læs mere</button>
            </div>
          </div>
        </ServiceCard>
        <ServiceCard
          src="/forlengelse.jpg"
          alt="Negle"
          time="45 min"
          price="400"
          title="GELLAK PÅ EGNE NEGLE"
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
          alt="Negle"
          time="2-3 timer"
          price="600 - 800"
          title="GELLAK MED FORLENGELSE"
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
          alt="Negle"
          time="2-3 timer"
          price="500-700"
          title="PÅFYLL"
        >
          <div>
            <p>
              Tidligere gellakk fjernes, og neglene bygges opp på nytt med
              ferskt lag av gellakk. Anbefales hver 3.–4. uke (maks 4 uker).
              Inkluderer valgfri manikyrtype. Pris er avhengig av lengde og
              mengde arbeid, med tanke på ødelagte negler som skal forlenges.{" "}
            </p>
          </div>
        </ServiceCard>
        <ServiceCard
          src="/påfyll.jpg"
          alt="Negle"
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
          src="/påfyll.jpg"
          alt="Negle"
          time="25 min"
          title="KUN FJERNING"
        >
          <div className="flex flex-col gap-5">
            <div className="flex justify-between">
              <p>French</p>
              <p>150 NOK</p>
            </div>
            <div className="flex justify-between">
              <p>Design</p>
              <p>150-300 NOK</p>
            </div>
            <div className="flex justify-between gap-5">
              <p>Charms:</p>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between">
                  <p>Små:</p>
                  <p>2 NOK per stk</p>
                </div>
                <div className="flex justify-between">
                  <p>Store:</p>
                  <p>5 NOK per stk</p>
                </div>
              </div>
            </div>
          </div>
        </ServiceCard>
      </div>
    </section>
  );
};
