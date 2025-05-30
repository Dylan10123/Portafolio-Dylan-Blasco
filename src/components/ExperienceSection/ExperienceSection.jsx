import { PixelComLogo } from "../../assets/Icons";
import ExperienceCard from "./ExperienceCard";
import SectionTitle from "../SectionTitle";
import TextBox from "../TextBox";

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="my-24 scroll-mt-24">
      <section className="mb-24">
        <SectionTitle text1="¿Qué" highlight="EXPERIENCIA" text2="Tengo?" />
      </section>
      <section className="flex flex-col gap-4 font-inter">
        <ExperienceCard
          puesto={"Full Stack Developer"}
          empresa={"PixelCom"}
          logo={<PixelComLogo />}
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
    </section>
  );
}
