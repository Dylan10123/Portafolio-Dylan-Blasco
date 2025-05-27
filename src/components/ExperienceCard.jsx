export default function ExperienceCard({
  puesto,
  empresa,
  descripcion,
  children,
  tecnologias = [],
}) {
  return (
    <article
      className={`border border-zinc-700 p-8 rounded-4xl flex flex-col w-full gap-6`}
    >
      <section className="bg-zinc-900 w-80 h-52 rounded-2xl flex items-center justify-center p-4">
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
