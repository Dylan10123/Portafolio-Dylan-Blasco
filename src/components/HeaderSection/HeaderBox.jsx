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
    const sections = document.querySelectorAll(
      "[data-section], [data-intersection-trigger]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
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
    <>
      <div className="-translate-y-1/3 w-full h-[150%] bg-linear-to-t from-[#0c0d1000] to-zinc-900 absolute left-0 top-0 origin-top-left pointer-events-none transition-transform duration-700 ease">
        <div className="backdrop-blur-md absolute inset-0 mask-b-from-45% mask-b-to-100%" />
      </div>
      <section
        className={`z-10 flex items-center justify-center p-4 w-screen h-20 transition-all duration-500 ease-in-out ${
          isMenuOpen ? "bg-zinc-950 h-screen" : "bg-transparent delay-[600ms]"
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
    </>
  );
}
