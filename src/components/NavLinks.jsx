export default function NavLinks({
  isOpen,
  onMenuButtonClick,
  activeSection = "",
}) {
  return (
    <>
      <nav className="text-zinc-200 font-vina-sans text-6xl h-fit">
        <div className="flex flex-col gap-16 justify-center items-center h-full">
          {[
            { id: "inicio", label: "Inicio", fromLeft: true },
            { id: "experiencia", label: "Experiencia", fromLeft: false },
            { id: "actividad", label: "Actividad", fromLeft: true },
            { id: "proyectos", label: "Proyectos", fromLeft: false },
            { id: "contacto", label: "Contacto", fromLeft: true },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={onMenuButtonClick}
              className={`transition-all duration-500 ease-in-out scroll-smooth cursor-pointer ${
                isOpen
                  ? `${
                      item.fromLeft
                        ? "animate-fade-in-left"
                        : "animate-fade-in-right"
                    }`
                  : `${
                      item.fromLeft
                        ? "animate-fade-out-left"
                        : "animate-fade-out-right"
                    }`
              }
              ${activeSection === item.id ? "text-violet-400" : "text-zinc-200"}
              `}
            >
              {item.label.toUpperCase()}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
