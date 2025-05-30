export default function ExperienceCard({
  puesto,
  empresa,
  logo,
  children,
  tecnologias = [],
}) {
  return (
    <article
      className={`bg-zinc-900/70 p-4 rounded-2xl flex flex-col gap-6 shadow-lg`}
    >
      <header className="flex flex-col gap-2">
        <div className="bg-zinc-700/50 w-full h-fit rounded-2xl flex items-center justify-center p-4 mb-4">
          {logo}
        </div>

        <h3 className="text-2xl font-bold ">{puesto.toUpperCase()}</h3>
        <span className="text-violet-400 text-lg text-balance">{empresa}</span>
      </header>

      <div>{children}</div>

      {tecnologias.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {tecnologias.map((tech, i) => (
            <span
              key={i}
              className="w-fit bg-violet-400/20 border border-violet-400 px-3 py-1 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
