import { useEffect, useState } from "react";

/**
 * Props:
 *   - staticText: string (requerido)
 *   - dynamicText1: string (requerido)
 *   - dynamicText2: string (requerido)
 */

export default function Title({
  staticText,
  dynamicText1,
  dynamicText2,
  dynamicText3 = dynamicText1,
  dynamicText4 = dynamicText2,
}) {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showTitle && (
        <>
          <h1 className="animate-fade-in-up font-vina-sans text-8xl lg:text-[15rem] leading-tight font-bold grid grid-cols-2 grid-rows-2 z-10 h-fit">
            <span className="col-span-2 leading-24 lg:leading-none">
              {staticText}
            </span>
            <span className="col-span-2 row-start-2 relative flex text-violet-400">
              <span className="animate-rotate-cube-pause transform-3d">
                <span className="absolute backface-hidden inset-0 flex items-center font-bold  [transform:rotateX(0deg)_translateZ(0.4em)]">
                  {dynamicText1}
                </span>
                <span className="absolute backface-hidden inset-0 flex items-center font-bold  [transform:rotateX(90deg)_translateZ(0.4em)]">
                  {dynamicText2}
                </span>
                <span className="absolute backface-hidden inset-0 flex items-center font-bold  [transform:rotateX(180deg)_translateZ(0.4em)]">
                  {dynamicText3}
                </span>
                <span className="absolute backface-hidden inset-0 flex items-center font-bold  [transform:rotateX(270deg)_translateZ(0.4em)]">
                  {dynamicText4}
                </span>
              </span>
            </span>
          </h1>
          <h1 className="animate-fade-in-left text-right relative bottom-0 right-0 text-4xl font-pinyon pr-4 pb-2 lg:text-6xl">
            Dylan Blasco
          </h1>
        </>
      )}
    </>
  );
}
