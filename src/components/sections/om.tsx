import Image from "next/image";

export const OmMegSection = () => {
  return (
    <section
      id="ommeg"
      className="bg-brand-SecondPink w-full p-10 flex flex-col md:flex-row shadow-md"
    >
      <div className="flex-1 flex flex-col gap-10">
        <h2 className="text-2xl">OM MEG</h2>
        <div className="flex flex-col gap-4">
          <p>
            Hei, jeg er Katerina! Jeg driver min egen neglevirksomhet ved siden
            av studiene mine på videregående skole.
          </p>
          <p>
            Negler har alltid vært en stor lidenskap for meg, og jeg elsker å
            skape vakre, unike design som får kundene mine til å føle seg
            spesielle.
          </p>
          <p>
            Som student setter jeg stor pris på flexibilitet, derfor varierer
            timeplanen min fra uke til uke. Men uansett når du kommer til meg,
            kan du være sikker på at du får den beste oppmerksomheten og omsorg
            for neglene dine!
          </p>
        </div>
        <p></p>
      </div>
      <div className="flex-1">
        <div className="relative w-70 h-70 md:w-100 md:h-100 mx-auto ">
          <Image
            src="/profile.jpg"
            alt="Image of Katerina"
            fill
            className="rounded-full object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};
