import { DBLogo } from "../assets/Icons";
import NavLinks from "./NavLinks";
import MenuButton from "./MenuButton";

export default function HeaderBox({
  showInitialContent,
  isMenuOpen,
  onMenuButtonClick,
  showMenuContent,
}) {
  return (
    <section
      className={`z-10 flex items-center justify-center p-4 w-screen h-20 transition-all duration-500 ease-in-out ${
        isMenuOpen ? "bg-zinc-950 h-full" : "bg-transparent delay-[600ms]"
      }`}
    >
      {showInitialContent && (
        <>
          <DBLogo
            className={`animate-fade-in-right absolute transition-all duration-500 delay-500 ease-in-out ${
              isMenuOpen
                ? "top-11/12 left-1/2 transform -translate-x-1/2"
                : "top-7 left-6"
            }`}
          />
          <MenuButton
            isOpen={isMenuOpen}
            onClick={onMenuButtonClick}
            className="animate-fade-in-left absolute top-4 right-6 transition-all ease-in-out"
          />
        </>
      )}

      {showMenuContent && <NavLinks isOpen={isMenuOpen} />}
    </section>
  );
}
