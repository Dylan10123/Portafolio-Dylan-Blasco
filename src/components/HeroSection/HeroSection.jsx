import HeroImage from "./HeroImage";
import Title from "./Title";
import TextBox from "../TextBox";

function IntroText({ showInitialContent }) {
  return (
    <section className="row-start-12 col-start-1 col-span-4 mt-6">
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

export default function HeroSection({ isInitialContentVisible }) {
  return (
    <section
      id="inicio"
      className="grid grid-cols-4 grid-rows-12 gap-x-4 gap-y-2 mb-12 h-screen scroll-mt-24"
    >
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
  );
}
