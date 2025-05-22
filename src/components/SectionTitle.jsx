export default function SectionTitle({ text1, highlight, alignRight = false }) {
  return (
    <h2
      className={`animate-fade-in-right text-3xl font-vina-sans text-balance flex flex-col gap-2 ${
        alignRight ? "items-end" : "items-start"
      }`}
    >
      <span className="font-pinyon">{text1}</span>
      <span className="text-violet-400">{highlight}</span>
    </h2>
  );
}
