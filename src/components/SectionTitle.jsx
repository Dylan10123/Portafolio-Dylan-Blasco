export default function SectionTitle({ highlight, text1 = "", text2 = "" }) {
  const lines = [
    text1 && { text: text1, type: "script", position: "left" },
    { text: highlight, type: "highlight", position: "center" },
    text2 && { text: text2, type: "script", position: "right" },
  ].filter(Boolean);

  const getTranslate = (position) => {
    switch (position) {
      case "left":
        return "-translate-x-10 leading-4";
      case "right":
        return "translate-x-10 leading-12";
      default:
        return "";
    }
  };

  return (
    <h2 className="text-5xl my-10 flex flex-col items-center text-balance">
      {lines.map((line, i) => (
        <div
          key={i}
          className={`${
            line.type === "highlight"
              ? "font-vina-sans text-violet-400 uppercase"
              : "font-pinyon text-zinc-300"
          } text-center transition-transform duration-300 ${getTranslate(
            line.position
          )}`}
        >
          {line.text}
        </div>
      ))}
    </h2>
  );
}
