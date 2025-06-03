import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import ActivitySection from "./components/ActivitySection/ActivitySection";
import ContactSection from "./components/ContactSection/ContactSection";
import ProyectSection from "./components/ProyectSection/ProyectSection";
import FooterSection from "./components/FooterSection/FooterSection";
import StackSection from "./components/StackSection/StackSection";
import HeroSection from "./components/HeroSection/HeroSection";
import HeaderBox from "./components/HeaderSection/HeaderBox";
import { useState, useEffect } from "react";
import "./index.css";
import "./App.css";

function App() {
  const [isInitialContentVisible, setIsInitialContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialContentVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <body className="bg-zinc-800 text-zinc-200">
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out h-auto delay-[600ms]">
        <HeaderBox showInitialContent={isInitialContentVisible} />
      </header>
      <main className="px-4">
        <HeroSection isInitialContentVisible={isInitialContentVisible} />
        <StackSection />
        <ExperienceSection />
        <ActivitySection />
        <ProyectSection />
        <ContactSection />
      </main>
      <FooterSection />
    </body>
  );
}

export default App;
