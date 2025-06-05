import SectionTitle from "../SectionTitle";
import JarallaxProyect from "./JarallaxProyect";
import TallerMock from "/images/Taller_Mock.webp";
import KodeMiseMock from "/images/KodeMise_Mock.webp";
import PixelComMock from "/images/PixelCom_Mock.webp";

export default function ProyectSection() {
  return (
    <section id="proyectos" data-section className="min-h-screen scroll-mt-24">
      <div className="mb-24">
        <SectionTitle text1="Mis" highlight="Proyectos" text2="Favoritos" />
      </div>

      <div
        id="proyectos"
        className="h-[1px] w-full opacity-0 pointer-events-none"
        data-intersection-trigger
      />

      <article className="-mx-4 left-0 overflow-hidden">
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
      </article>
    </section>
  );
}
