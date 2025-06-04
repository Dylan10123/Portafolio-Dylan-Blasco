import SectionTitle from "../SectionTitle";
import TechPill from "./TechPill";
import {
  MySQLLogo,
  NodejsLogo,
  PythonLogo,
  ReactLogo,
  TypeScriptLogo,
} from "../../assets/Icons";

function StackPills({ stack, children }) {
  return (
    <div className="flex flex-col gap-2 justify-center bg-zinc-900/70 p-4 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold uppercase">{stack}</h3>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function PillBox() {
  return (
    <>
      <StackPills stack="Front end">
        <TechPill tech="React" logo={<ReactLogo />} />
        <TechPill tech="TypeScript" logo={<TypeScriptLogo />} />
      </StackPills>
      <StackPills stack="Back end">
        <TechPill tech="Python" logo={<PythonLogo />} />
        <TechPill tech="Node.js" logo={<NodejsLogo />} />
        <TechPill tech="MySQL" logo={<MySQLLogo />} />
      </StackPills>
    </>
  );
}

export default function StackSection() {
  return (
    <section id="stack" data-section className="scroll-mt-24 min-h-screen">
      <div className="mt-24">
        <SectionTitle highlight="STACK" text2="Principal" />
      </div>
      <article className="flex flex-col gap-6 font-inter">
        <PillBox />
      </article>
    </section>
  );
}
