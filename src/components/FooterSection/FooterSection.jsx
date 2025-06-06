import { useState, useEffect } from "react";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons";

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [breakpoint]);

  return isMobile;
};

function Separador() {
  const isMobile = useIsMobile();

  return !isMobile && <div id="separador" className="w-px h-32 bg-zinc-300" />;
}

export default function FooterSection() {
  return (
    <footer className="bg-gradient-to-t from-zinc-950 to-zinc-800 text-zinc-400 pb-8 pt-32 mt-24 px-4 text-base lg:flex lg:items-center lg:justify-center">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-8 self-center">
        <div className="flex gap-6">
          <a
            href="https://github.com/Dylan10123"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubLogoIcon className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/dylan-blasco-de-souza-904b20262/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInLogoIcon className="w-8 h-8" />
          </a>
        </div>

        <Separador />

        <div className="flex gap-6 lg:flex-col lg:gap-2">
          <a className="hover:text-violet-400 p-2 " href="#inicio">
            Inicio
          </a>
          <a className="hover:text-violet-400 p-2" href="#stack">
            Stack
          </a>
          <a className="hover:text-violet-400 p-2" href="#proyectos">
            Proyectos
          </a>
          <a className="hover:text-violet-400 p-2" href="#contacto">
            Contacto
          </a>
        </div>

        <Separador />

        <div className="flex flex-col gap-2 items-start w-ful lg:w-fit">
          Inspirado en los portafolios de:
          <a
            href="https://valentincheval.design"
            target="_blank"
            className="flex gap-1 items-center hover:text-violet-400"
          >
            <ExternalLinkIcon />
            Valentin Cheval
          </a>
          <a
            href="https://michael-aust.com"
            target="_blank"
            className="flex gap-1 items-center hover:text-violet-400"
          >
            <ExternalLinkIcon />
            Michael Aust
          </a>
          <a
            href="https://www.unbearable.design"
            target="_blank"
            className="flex gap-1 items-center hover:text-violet-400"
          >
            <ExternalLinkIcon />
            Michelangelo Giorgini
          </a>
        </div>

        <Separador />

        <div id="separador" className="w-px h-full bg-zinc-700" />
        <p>© 2025 Dylan Blasco</p>
      </div>
    </footer>
  );
}
