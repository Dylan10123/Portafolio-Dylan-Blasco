import SectionTitle from "../SectionTitle";
import TechPill from "./TechPill";
import {
  MySQLLogo,
  NodejsLogo,
  PythonLogo,
  ReactLogo,
  TypeScriptLogo,
  CssLogo,
} from "../../assets/Icons";

function StackPills({ stack, children }) {
  return (
    <div className="flex flex-col gap-2 justify-center bg-zinc-900/70 p-4 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold uppercase">{stack}</h3>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function PillBox({ text, children }) {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 w-full h-fit py-4 justify-center items-center my-4">
        <h3 className="justify-self-center lg:tracking-[0.3em] row-end-1 col-span-full flex text-5xl lg:text-8xl font-bold uppercase justify-center items-center">
          {text}
        </h3>
        <div className="justify-self-center row-end-1 col-span-3 col-start-1 p-4 lg:p-8 w-fit flex justify-center items-center gap-2 bg-white/7 rounded-2xl shadow-lg backdrop-blur-xs lg:backdrop-blur-sm border border-white/10">
          {children}
        </div>
      </div>
    </>
  );
}

// function PillBox() {
//   return (
//     <>
//       <StackPills stack="Front end">
//         <TechPill tech="React" logo={<ReactLogo />} />
//         <TechPill tech="TypeScript" logo={<TypeScriptLogo />} />
//       </StackPills>
//       <StackPills stack="Back end">
//         <TechPill tech="Python" logo={<PythonLogo />} />
//         <TechPill tech="Node.js" logo={<NodejsLogo />} />
//         <TechPill tech="MySQL" logo={<MySQLLogo />} />
//       </StackPills>
//     </>
//   );
// }

export default function StackSection() {
  return (
    <section
      id="stack"
      data-section
      className="scroll-mt-24 min-h-screen lg:px-[12.5%]"
    >
      <div className="mt-24">
        <SectionTitle highlight="STACK" text2="Principal" />
      </div>
      <article className="flex flex-col gap-6 font-inter">
        <PillBox text="Frontend">
          <TechPill tech="React" logo={<ReactLogo />} />
          <TechPill tech="CSS" logo={<CssLogo />} />
          <TechPill tech="TypeScript" logo={<TypeScriptLogo />} />
        </PillBox>
        <PillBox text="Backend">
          <TechPill tech="Python" logo={<PythonLogo />} />
          <TechPill tech="Node.js" logo={<NodejsLogo />} />
          <TechPill tech="MySQL" logo={<MySQLLogo />} />
        </PillBox>
      </article>
    </section>
  );
}
