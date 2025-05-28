export default function ExperienceCard({
  puesto,
  empresa,
  descripcion,
  children,
  tecnologias = [],
}) {
  return (
    <article
      className={`bg-zinc-900/70 p-4 rounded-2xl flex flex-col gap-6 shadow-lg`}
    >
      <section className="bg-zinc-700/50 w-full h-fit rounded-2xl flex items-center justify-center p-4">
        {children}
      </section>

      <section>
        <h3 className="text-2xl font-bold ">{puesto.toUpperCase()}</h3>
        <span className="text-violet-400 text-lg text-balance">{empresa}</span>
      </section>

      <section>
        <p className="text-zinc-300 text-balance text-base">{descripcion}</p>
      </section>

      {tecnologias.length > 0 && (
        <section className="flex flex-wrap gap-1">
          {tecnologias.map((tech, i) => (
            <div
              key={i}
              className="w-fit bg-transparent border border-violet-400 px-3 py-1 text-xs rounded-md"
            >
              {tech}
            </div>
          ))}
        </section>
      )}
    </article>
  );
}
