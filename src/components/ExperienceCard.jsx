export default function ExperienceCard({
  puesto,
  empresa,
  descripcion,
  backgroundColor,
}) {
  return (
    <div
      className={`${backgroundColor} p-8 rounded-2xl flex flex-col w-full my-4`}
    >
      <div className="bg-black w-80 h-52 rounded-xl"></div>
      <div>
        <h3 className="text-2xl font-bold">{puesto}</h3>
        <span>{empresa}</span>
      </div>
      <div>
        <p className="text-zinc-400 text-balance">{descripcion}</p>
      </div>
    </div>
  );
}
