import { MasterDLogo } from "../assets/Icons";

export default function ActivityBox({
  title,
  company,
  companyDescription,
  logo,
  body,
  infoLink,
}) {
  return (
    <section className="bg-zinc-800 p-4 rounded-2xl flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold ">{title}</h3>
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent hover:bg-zinc-700">
          {logo}
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-2">
            <p className="text-base font-bold">{company}</p>
            <p className="text-base text-zinc-300">{companyDescription}</p>
            <p className="text-base text-zinc-300">{body}</p>
          </div>
        </div>
        <button className="self-end bg-violet-400 px-3 py-1 text-sm rounded-md text-zinc-900">
          <a href={infoLink}>Más información</a>
        </button>
      </div>
    </section>
  );
}
