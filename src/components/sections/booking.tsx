import { ContactForm } from "../form";
import { Headline } from "../headline";

export const Booking = () => {
  return (
    <section id="booking" className="w-full font-primary">
      <Headline value="BOOKING & KONTAKT" />
      <div className="flex justify-evenly pt-5 gap-20 px-2 md:px-20 flex-col md:flex-row">
        <ContactForm />
        <div className="flex-1 flex flex-col justify-evenly gap-5">
          <div className="text-brand-Black">
            <p className="text-2xl">
              Hei! Du kan kontakte meg her, eller på Instagram, for booking av
              negler.
            </p>
            <p className="text-base italic">
              Jeg svarer normalt innen 1–2 arbeidsdager.
            </p>
          </div>
          <div className="text-base flex flex-col gap-2">
            <p>For å gjøre booking lettere, inkluder:</p>
            <ul className="list-disc list-inside px-2">
              <li>Dato og tid du ønsker.</li>
              <li>Hvilken service du ønsker.</li>
            </ul>
            <p>Gleder meg til å få neglene dine til å se fantastiske ut!</p>
          </div>
          <hr className="text-brand-SecondPink border-1 mx-10" />
          <div className="flex flex-col gap-5">
            <p className="text-2xl">Åpningstider:</p>
            <p>
              Se Instagram for åpningstider – jeg legger ut ledige tider hver
              uke siden timeplanen min varierer!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
