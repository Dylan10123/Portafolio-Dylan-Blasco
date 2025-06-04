import CopyToClipboard from "react-copy-to-clipboard";
import { CopyIcon, CheckCircledIcon } from "@radix-ui/react-icons";
import SectionTitle from "../SectionTitle";
import { useState } from "react";

export default function ContactSection() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <section
      id="contacto"
      data-section
      className="min-h-screen scroll-mt-24 flex flex-col items-center justify-center"
    >
      <div className="mb-10">
        <SectionTitle text1="¿Quieres" highlight="Contactar" text2="Conmigo?" />
      </div>
      <div className="flex items-center gap-2">
        <div className="w-fit border border-violet-400 px-4 py-2 text-lg rounded-md">
          <a
            href="mailto:dbds.101203@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            dbds.101203@gmail.com
          </a>
        </div>
        <CopyToClipboard
          text="dbds.101203@gmail.com"
          className="w-fit bg-violet-400 p-3 text-lg rounded-md"
          onCopy={handleCopy}
        >
          <span>
            {isCopied ? (
              <CheckCircledIcon className="w-6 h-6" />
            ) : (
              <CopyIcon className="w-6 h-6" />
            )}
          </span>
        </CopyToClipboard>
      </div>
    </section>
  );
}
