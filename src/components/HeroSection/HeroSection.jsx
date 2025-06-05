import HeroImage from "./HeroImage";
import IntroText from "./IntroText";
import Title from "./Title";

export default function HeroSection({ isInitialContentVisible }) {
  return (
    <section
      id="inicio"
      data-section
      className="grid grid-cols-4 lg:grid-cols-16 gap-x-4 mb-12 h-screen lg:h-[calc(100vh-4rem)] scroll-mt-24"
    >
      <div className="animate-blurred-fade-in flex justify-end col-span-full lg:col-start-9 lg:col-end-15 lg:row-start-2 lg:row-end-5 row-start-2 row-end-3 -z-10 m-0 p-0 box-border ">
        <HeroImage />
      </div>
      <div className="col-span-full row-start-2 lg:row-start-3 lg:col-start-3 lg:col-end-10 self-end">
        <Title
          staticText="WEB"
          dynamicText1="DESIGNER"
          dynamicText2="DEVELOPER"
          dynamicText3="ENGINEER"
          dynamicText4="INNOVATOR"
        />
      </div>
      <IntroText showInitialContent={isInitialContentVisible} />
    </section>
  );
}
