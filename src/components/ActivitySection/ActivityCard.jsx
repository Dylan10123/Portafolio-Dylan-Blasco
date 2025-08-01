import { ExternalLinkIcon } from "@radix-ui/react-icons";

export default function ActivityCard({
  title,
  company,
  companyDescription,
  logo,
  body,
  infoLink,
  tag = "En curso",
}) {
  return (
    <article className="max-w-xl bg-zinc-900/70 p-4 rounded-2xl flex flex-col gap-3 shadow-lg min-h-[300px]">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl lg:text-4xl font-bold text-violet-400">
          {title}
        </h3>
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent hover:bg-zinc-700">
          {logo}
        </div>
      </div>

      <span className="text-xs bg-violet-500 text-white rounded-full px-2 py-0.5 w-fit">
        {tag}
      </span>

      {/* Este div crece para ocupar el espacio disponible */}
      <div className="flex flex-col gap-6 flex-1">
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-bold">{company}</p>
            <p className="text-sm lg:text-base text-zinc-200">
              {companyDescription}
            </p>
            <p className="text-sm lg:text-base text-zinc-200">{body}</p>
          </div>
        </div>
      </div>

      {/* Este enlace se empuja al fondo */}
      <a
        href={infoLink}
        className="mt-auto self-end bg-violet-400 text-sm lg:text-base text-zinc-900 font-medium px-3 py-1 rounded-md flex items-center gap-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        Más información
        <ExternalLinkIcon />
      </a>
    </article>
  );
}
