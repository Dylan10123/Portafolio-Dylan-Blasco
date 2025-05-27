export default function NavLinks({ isOpen }) {
  return (
    <>
      <nav className="text-white font-vina-sans text-6xl h-fit">
        <ul className="flex flex-col gap-16 justify-center items-center h-full">
          {[
            { label: "Inicio", fromLeft: true },
            { label: "Experiencia", fromLeft: false },
            { label: "Actividad", fromLeft: true },
            { label: "Proyectos", fromLeft: false },
            { label: "Contacto", fromLeft: true },
          ].map(({ label, fromLeft }, index) => (
            <li
              key={index}
              className={`transition-all duration-500 ease-in-out ${
                isOpen
                  ? `${
                      fromLeft
                        ? "animate-fade-in-left"
                        : "animate-fade-in-right"
                    }`
                  : `${
                      fromLeft
                        ? "animate-fade-out-left"
                        : "animate-fade-out-right"
                    }`
              }`}
            >
              {label.toUpperCase()}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
