export default function TechPill({ tech, logo }) {
  return (
    <div className="w-fit bg-violet-400/20 border border-violet-400 px-3 py-2 text-base rounded-md flex items-center justify-center gap-2">
      {logo}
      <span>{tech}</span>
    </div>
  );
}
