import ExperienceCard from "./components/ExperienceCard";
import SectionTitle from "./components/SectionTitle";
import ActivityBox from "./components/ActivityBox";
import HeroImage from "./components/HeroImage";
import HeaderBox from "./components/HeaderBox";
import { PixelComLogo, MasterDLogo, FreeCodeCampLogo } from "./assets/Icons";
import { useState, useEffect } from "react";
import TextBox from "./components/TextBox";
import Title from "./components/Title";
import "./index.css";
import "./App.css";

function IntroText({ showInitialContent }) {
  return (
    <section className="row-start-11 col-start-1 col-span-4 mt-6">
      {showInitialContent && (
        <TextBox className="animate-fade-in-up">
          Creativo y amante del diseño digital, con una mentalidad
          perfeccionista que me impulsa a mejorar y pulir constantemente mis
          habilidades.
        </TextBox>
      )}
    </section>
  );
}

function App() {
  const [isInitialContentVisible, setIsInitialContentVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialContentVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let timeoutId;
    if (isMenuOpen) {
      timeoutId = setTimeout(() => {
        setIsMenuVisible(true);
      }, 1000);
    } else {
      timeoutId = setTimeout(() => {
        setIsMenuVisible(false);
      }, 700);
    }
    return () => clearTimeout(timeoutId);
  }, [isMenuOpen]);

  const handleMenuButtonClick = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <body className="bg-zinc-800 text-zinc-200">
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isMenuOpen ? "h-full" : "h-20 delay-[600ms]"
        }`}
      >
        <HeaderBox
          showInitialContent={isInitialContentVisible}
          isMenuOpen={isMenuOpen}
          onMenuButtonClick={handleMenuButtonClick}
          showMenuContent={isMenuVisible}
        />
      </header>
      <main className="px-4">
        <section className="grid grid-cols-4 grid-rows-12 gap-x-4 gap-y-2 mb-12 h-screen">
          <section className="col-start-2 row-start-4 row-end-12 col-span-3">
            <HeroImage />
          </section>
          <section className="col-start-1 row-start-8 row-end-11 col-span-4">
            <Title
              staticText="WEB"
              dynamicText1="DESIGNER"
              dynamicText2="DEVELOPER"
              dynamicText3="ENGINEER"
              dynamicText4="INNOVATOR"
            />
          </section>
          <IntroText showInitialContent={isInitialContentVisible} />
        </section>
        <section className="my-24">
          <section className="mb-24">
            <SectionTitle text1="Mi" highlight="EXPERIENCIA" center />
          </section>
          <section className="flex flex-col gap-4 font-inter">
            <ExperienceCard
              puesto={"Full Stack Developer"}
              empresa={"PixelCom"}
              descripcion={`Periodo de formación profesional dual en el que he trabajado con metodologías ágiles (CI/CD) y he
                 participado en el desarrollo de soluciones tanto en el frontend como en el backend, utilizando tecnologías modernas.`}
              tecnologias={[
                "React",
                "TypeScript",
                "Storybook",
                "AWS",
                "Node.js",
                "Express",
                "DynamoDB",
                "Terraform",
                "Kubernetes",
                "WebSockets",
              ]}
            >
              <PixelComLogo />
            </ExperienceCard>
          </section>
        </section>
        <section className="my-24">
          <section className="my-">
            <SectionTitle text1="Actividades" highlight="EN PROGRESO" center />
          </section>
          <section className="flex flex-col gap-8 font-inter">
            <ActivityBox
              title={"Master en IA"}
              company={"MasterD | Davante"}
              companyDescription={
                "Compañía de formación abierta lider en España"
              }
              logo={<MasterDLogo />}
              body={
                "Hago este master porque considero que la IA se complementa muy bien con el desarrollo web. Dando la posibilidad de crear aplicaciones que sean mas inteligentes y dinámicas."
              }
              infoLink={"https://www.masterd.es/master-inteligencia-artificial"}
            />
            <ActivityBox
              title={"Cursos de Python"}
              company={"FreeCodeCamp"}
              companyDescription={
                "Plataforma de formación en línea que enseña desarrollo web"
              }
              logo={<FreeCodeCampLogo width="48" height="36" />}
              body={
                "De vez en cunado hago alguno de los cursos de FreeCodeCamp para complementar lo que aprendo en clase o actualizarme en alguno de los campos que ya conozco."
              }
              infoLink={"https://forum.freecodecamp.org"}
            />
          </section>
        </section>
      </main>
    </body>
  );
}

export default App;
