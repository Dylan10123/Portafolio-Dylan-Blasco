export default function ExperienceCard({
  puesto,
  empresa,
  logo,
  children,
  tecnologias = [],
}) {
  return (
    <article className="grid grid-cols-4 lg:grid-cols-8 lg:grid-rows-4 gap-4 font-inter bg-zinc-900/70 p-4 rounded-2xl shadow-lg lg:bg-transparent lg:shadow-none">
      <div className="col-span-full lg:col-start-6 lg:row-span-5 bg-zinc-700/50 lg:shadow-[-18px_18px_17px_-5px_rgba(0,_0,_0,_0.3)] w-full h-fit lg:h-full rounded-2xl flex items-center justify-center p-4 mb-4">
        {typeof logo === "string" ? (
          <img src={logo} alt="" className="h-2/5" />
        ) : (
          logo
        )}
      </div>

      <h3 className="col-span-full lg:col-start-1 lg:col-end-5 lg:row-start-1 text-2xl lg:text-4xl font-bold flex flex-col gap-2">
        {puesto.toUpperCase()}
        <span className="text-violet-400 text-lg lg:text-2xl text-balance">
          {empresa}
        </span>
      </h3>

      <div className="col-span-full lg:col-start-1 lg:col-end-5 lg:row-start-3">
        {children}
      </div>

      {tecnologias.length > 0 && (
        <div className="col-span-full lg:h-fit lg:self-center lg:col-start-1 lg:col-end-5 lg:row-start-4 flex flex-wrap gap-1">
          {tecnologias.map((tech, i) => (
            <span
              key={i}
              className="w-fit bg-violet-400/20 border border-violet-400 px-3 py-1 text-sm rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
