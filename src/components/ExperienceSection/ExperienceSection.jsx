import { PixelComLogoMobile } from "../../assets/Icons";
import PixelComLogo from "/images/PixelCom-logo_Large.webp";
import ExperienceCard from "./ExperienceCard";
import SectionTitle from "../SectionTitle";
import TextBox from "../TextBox";
import { useState, useEffect } from "react";

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [breakpoint]);

  return isMobile;
};

export default function ExperienceSection() {
  const isMobile = useIsMobile();

  return (
    <section
      id="experiencia"
      data-section
      className="min-h-screen scroll-mt-24 lg:px-[12.5%] flex flex-col lg:gap-20"
    >
      <div className="mb-24">
        <SectionTitle text1="¿Qué" highlight="EXPERIENCIA" text2="Tengo?" />
      </div>{" "}
      <ExperienceCard
        puesto={"Full Stack Developer"}
        empresa={"PixelCom"}
        logo={isMobile ? <PixelComLogoMobile /> : PixelComLogo}
        tecnologias={[
          "React",
          "TypeScript",
          "Storybook",
          "AWS",
          "Node.js",
          "Express",
          "DynamoDB",
          "Terraform",
          "Kubernetes",
          "WebSockets",
        ]}
      >
        <TextBox>
          Periodo de formación profesional dual en el que he trabajado con
          metodologías ágiles (CI/CD) y he participado en el desarrollo de
          soluciones tanto en el frontend como en el backend, utilizando
          tecnologías modernas.
        </TextBox>
      </ExperienceCard>
    </section>
  );
}
