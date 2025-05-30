import { useState, useEffect } from "react";
import { DBLogo } from "../../assets/Icons";
import MenuButton from "./MenuButton";
import NavLinks from "./NavLinks";

export default function HeaderBox({ showInitialContent }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let timeoutId;
    if (isMenuOpen) {
      timeoutId = setTimeout(() => {
        setIsMenuVisible(true);
      }, 1000);
    } else {
      timeoutId = setTimeout(() => {
        setIsMenuVisible(false);
      }, 700);
    }
    return () => clearTimeout(timeoutId);
  }, [isMenuOpen]);

  const handleMenuButtonClick = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -40% 0px", // Detecta la sección centrada en pantalla
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isMenuVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <section
      className={`z-10 flex items-center justify-center p-4 w-screen h-20 transition-all duration-500 ease-in-out ${
        isMenuOpen ? "bg-zinc-950 h-screen" : "backdrop-blur-md delay-[600ms]"
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
            onClick={handleMenuButtonClick}
            className="animate-fade-in-left absolute top-4 right-6 transition-all ease-in-out"
          />
        </>
      )}

      {isMenuVisible && (
        <NavLinks
          isOpen={isMenuOpen}
          activeSection={activeSection}
          onMenuButtonClick={handleMenuButtonClick}
        />
      )}
    </section>
  );
}
