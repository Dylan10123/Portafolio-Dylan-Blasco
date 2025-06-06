import ActivityCard from "./ActivityCard";
import SectionTitle from "../SectionTitle";
import { MasterDLogo, FreeCodeCampLogo } from "../../assets/Icons";

export default function ActivitySection() {
  return (
    <section
      id="actividad"
      data-section
      className="lg:px-[12.5%] min-h-screen scroll-mt-24"
    >
      <div className="my-24">
        <SectionTitle text1="Actividades" highlight="EN PROGRESO" center />
      </div>
      <article className="flex flex-col gap-8 lg:flex-row justify-center font-inter">
        <ActivityCard
          title={"Master en IA"}
          company={"MasterD | Davante"}
          companyDescription={"Compañía de formación abierta lider en España"}
          logo={<MasterDLogo />}
          body={
            "Cursando un máster en IA para complementar mis habilidades en desarrollo web y crear aplicaciones más inteligentes y adaptativas"
          }
          infoLink={"https://www.masterd.es/master-inteligencia-artificial"}
        />
        <ActivityCard
          title={"Cursos online"}
          company={"FreeCodeCamp"}
          companyDescription={
            "Plataforma de formación en línea que enseña desarrollo web"
          }
          logo={<FreeCodeCampLogo width="48" height="36" />}
          body={
            "Realizo cursos periódicamente en FreeCodeCamp para reforzar conocimientos y mantenerme actualizado en desarrollo web y Python"
          }
          infoLink={"https://forum.freecodecamp.org"}
        />
      </article>
    </section>
  );
}
