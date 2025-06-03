import SectionTitle from "../SectionTitle";
import JarallaxProyect from "./JarallaxProyect";
import TallerMock from "./assets/images/Taller_Mock.webp";
import KodeMiseMock from "./assets/images/KodeMise_Mock.webp";
import PixelComMock from "./assets/images/PixelCom_Mock.webp";

export default function ProyectSection() {
  return (
    <section id="proyectos" className="my-24 scroll-mt-24">
      <div className="mb-24">
        <SectionTitle text1="Mis" highlight="Proyectos" text2="Favoritos" />
      </div>
      <div className="-mx-4 w-screen left-0 overflow-hidden">
        <JarallaxProyect
          titulo="Garatge Javier"
          descripcion="Proyecto personal"
          imgSrc={TallerMock}
          link="https://github.com/Dylan10123/Garaje_Javier"
        />
        <JarallaxProyect
          titulo="KodeMise"
          descripcion="Red Social"
          imgSrc={KodeMiseMock}
        />
        <JarallaxProyect
          titulo="TV Graphics"
          descripcion="Grafismo para carreras"
          imgSrc={PixelComMock}
          link={
            "https://pixelcom.io/professional-sports-broadcast-graphics-solution"
          }
        />
      </div>
    </section>
  );
}
