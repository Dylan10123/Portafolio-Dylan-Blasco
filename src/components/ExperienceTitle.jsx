export default function ExperienceTitle() {
  const words = new Array(9).fill("EXPERIENCIA");

  return (
    <div className="relative w-full not-even:flex items-center justify-center overflow-hidde">
      <div className="inset-0 flex flex-col justify-center items-center">
        {words.map((word, index) => {
          const centerIndex = Math.floor(words.length / 2);
          const distanceFromCenter = Math.abs(index - centerIndex);

          // Controla color e intensidad según cercanía al centro
          const colorClass =
            distanceFromCenter === 0
              ? "text-indigo-400"
              : distanceFromCenter === 1
              ? "text-indigo-700"
              : "text-zinc-700";

          // Alterna inclinación izquierda/derecha para efecto óptico
          const skewClass = index % 2 === 0 ? "-skew-x-6" : "skew-x-6";

          return (
            <h1
              key={index}
              className={`text-6xl sm:text-7xl font-black uppercase tracking-wider ${colorClass} ${skewClass} transition-all`}
              style={{
                transform: `perspective(800px) translateZ(-${
                  distanceFromCenter * 20
                }px)`,
              }}
            >
              {word}
            </h1>
          );
        })}
      </div>
    </div>
  );
}
