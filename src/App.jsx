import ExperienceTitle from "./components/ExperienceTitle";
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
    <body className="bg-zinc-800">
      <header>
        <HeaderBox
          showInitialContent={isInitialContentVisible}
          isMenuOpen={isMenuOpen}
          onMenuButtonClick={handleMenuButtonClick}
          showMenuContent={isMenuVisible}
        />
      </header>
      <main className="p-4">
        <section className="grid grid-cols-4 grid-rows-12 gap-x-4 gap-y-2 h-screen">
          <section className="col-start-2 row-start-4 row-end-12 col-span-3">
            <HeroImage />
          </section>
          <section className="text-white col-start-1 row-start-9 row-end-11 col-span-4">
            <Title
              staticText="WEB"
              dynamicText1="Designer"
              dynamicText2="Developer"
              dynamicText3="Engineer"
              dynamicText4="Innovator"
            />
          </section>
          <IntroText showInitialContent={isInitialContentVisible} />
        </section>
        <section>
          <section>
            <ExperienceTitle />
          </section>
          <article>hablo de mi experiencia en una empresa</article>
          <article>hablo de mi experiencia en otra empresa</article>
        </section>
      </main>
    </body>
  );
}

export default App;
