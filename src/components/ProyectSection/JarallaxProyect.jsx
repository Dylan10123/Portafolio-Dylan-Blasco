import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { useEffect, useRef } from "react";
import { jarallax } from "jarallax";
import "jarallax/dist/jarallax.css";

export default function JarallaxProyect({ titulo, descripcion, imgSrc, link }) {
  const parallaxRef = useRef(null);

  useEffect(() => {
    if (parallaxRef.current) {
      jarallax(parallaxRef.current, {
        speed: 0.4,
      });
    }
  }, []);

  return (
    <section
      ref={parallaxRef}
      className="jarallax relative h-[90vh] w-full overflow-hidden"
      data-jarallax
    >
      {/* Div para que detecte el intersection observer */}
      <div
        id="proyectos"
        className="h-[1px] w-full opacity-0 pointer-events-none"
        data-intersection-trigger
      />

      {/* Imagen de fondo */}
      <div className="jarallax-img relative top-0 left-0 w-full h-full">
        <img
          src={imgSrc}
          alt="Imagen de la web Garatge Javier"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Capa oscura */}
      <div className="absolute h-full w-full inset-0 bg-black/40 z-10" />

      {/* Capa del texto */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-white">{titulo}</h2>
        <p className="mt-2 text-lg md:text-xl text-zinc-200">{descripcion}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-violet-400 text-zinc-900 px-3 py-1 rounded-md flex items-center gap-1"
          >
            Ver más
            <ExternalLinkIcon />
          </a>
        )}
      </div>
    </section>
  );
}
