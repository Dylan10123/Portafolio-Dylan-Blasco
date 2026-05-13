import SectionTitle from "../SectionTitle";
import JarallaxProyect from "./JarallaxProyect";
import TallerMock from "/images/Taller_Mock.webp";
import RanniaMock from "/images/Rannia_Mock.webp";
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
          titulo="Rannia Proyectos Modulares"
          descripcion="Web corporativa para empresa de construcción modular. Next.js, React, SEO optimizado, formulario de captación de leads, galería de proyectos."
          imgSrc={RanniaMock}
          link={"https://www.ranniamodular.es"}
        />
        <JarallaxProyect
          titulo="TV Graphics"
          descripcion="Proyecto de grafismo para carreras en el que he trabajado. +50 pull request aprobadas en las que aportaba soluciones a problemas de diseño y bugs de desarrollo."
          imgSrc={PixelComMock}
          link={
            "https://pixelcom.io/professional-sports-broadcast-graphics-solution"
          }
        />
        <JarallaxProyect
          titulo="Garatge Javier"
          descripcion="Proyecto escolar creado para poner en práctica mis conocimientos de JavaScript, PHP y JQuery."
          imgSrc={TallerMock}
          link="https://garaje-javier.vercel.app"
        />
      </article>
    </section>
  );
}
