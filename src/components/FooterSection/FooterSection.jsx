import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons";

export default function FooterSection() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-8 mt-24 px-4 text-base">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
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
        <div className="flex gap-6">
          <a href="#inicio">Inicio</a>
          <a href="#stack">Stack</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="flex flex-col gap-2 items-start w-full">
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
        <p>© 2025 Dylan Blasco</p>
      </div>
    </footer>
  );
}
