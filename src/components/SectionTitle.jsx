export default function SectionTitle({ highlight, text1 = "", text2 = "" }) {
  const lines = [
    text1 && { text: text1, type: "script", position: "left" },
    { text: highlight, type: "highlight", position: "center" },
    text2 && { text: text2, type: "script", position: "right" },
  ].filter(Boolean);

  const getTranslate = (position) => {
    switch (position) {
      case "left":
        return "-translate-x-10 leading-6 lg:leading-12";
      case "right":
        return "translate-x-10 leading-18 lg:leading-28";
      default:
        return "";
    }
  };

  return (
    <h2 className="h-[50vh] text-6xl lg:text-9xl my-10 flex flex-col items-center justify-center text-balance">
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
