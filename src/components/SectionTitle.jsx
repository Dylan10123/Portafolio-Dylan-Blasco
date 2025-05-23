export default function SectionTitle({
  text1,
  highlight,
  alignRight = false,
  center = false,
}) {
  return (
    <h2 className="text-5xl font-vina-sans text-balance my-10">
      <div
        className={`font-pinyon leading-2 ${alignRight ? "text-right" : ""} ${
          center ? "text-center -translate-x-20" : ""
        }`}
      >
        {text1}
      </div>
      <div
        className={`text-violet-400 ${alignRight ? "text-right" : ""} ${
          center ? "text-center translate-x-7" : ""
        }`}
      >
        {highlight}
      </div>
    </h2>
  );
}
