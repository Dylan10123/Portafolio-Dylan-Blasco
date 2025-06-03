import SectionTitle from "../SectionTitle";
import JarallaxProyect from "./JarallaxProyect";

export default function ProyectSection() {
  return (
    <section id="proyectos" className="my-24 scroll-mt-24">
      <div className="mb-24">
        <SectionTitle text1="Mis" highlight="Proyectos" text2="Favoritos" />
      </div>
      <div className="absolute w-full left-0 overflow-hidden">
        <JarallaxProyect
          titulo="Garatge Javier"
          descripcion="Proyecto personal"
          imgSrc="src/assets/images/Taller_Mock.webp"
          link="https://github.com/Dylan10123/Garaje_Javier"
        />
        <JarallaxProyect
          titulo="KodeMise"
          descripcion="Red Social"
          imgSrc="src/assets/images/KodeMise_Mock.webp"
        />
        <JarallaxProyect
          titulo="TV Graphics"
          descripcion="Grafismo para carreras"
          imgSrc="src/assets/images/PixelCom_Mock.webp"
          link={
            "https://pixelcom.io/professional-sports-broadcast-graphics-solution"
          }
        />
      </div>
    </section>
  );
}
