import ExperienceCard from "./components/ExperienceCard";
import SectionTitle from "./components/SectionTitle";
import HeroImage from "./components/HeroImage";
import HeaderBox from "./components/HeaderBox";
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

// TODO: Cambiar la letra de los títulos, buscar una mas minimalista

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
        <section>
          <section>
            <SectionTitle text1="Mi" highlight="EXPERIENCIA" center />
          </section>
          <ExperienceCard
            puesto={"Full Stack Developer"}
            empresa={"PixelCom"}
            descripcion={
              "Utilización de metodologías de trabajo ágiles (CICD) Experiencia con tecnologías como React.js, Storybook, Node.js, Terraform y Kubernetes."
            }
            backgroundColor={"bg-zinc-700"}
          />
          <ExperienceCard
            puesto={"Técnico en sistemas informáticos"}
            empresa={"IVO (Intituto Valenciano de Oncología)"}
            descripcion={
              "Resolución de problemas de equipos e impresoras, tanto de forma física como remota. Gestión de bases de datos, actualizando la información obsoleta. Utilización de programas como, DameWare, Acronis, Mini Tool - Partition Wizard."
            }
            backgroundColor={"bg-zinc-700"}
          />
        </section>
      </main>
    </body>
  );
}

export default App;
