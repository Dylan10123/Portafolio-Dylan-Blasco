import CopyToClipboard from "react-copy-to-clipboard";
import TextBox from "../TextBox";
import { useState } from "react";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
  CopyIcon,
  CheckCircledIcon,
} from "@radix-ui/react-icons";

function Icon({ link, icon, showInitialContent, children, className }) {
  return (
    <a
      className={`${className} ${
        showInitialContent ? "animate-fade-in-up" : "opacity-0"
      } border-2 border-zinc-300/30 p-2 h-fit lg:p-4 rounded-md lg:rounded-lg transition-colors duration-200 ease-in-out hover:bg-violet-600/20 hover:text-violet-300`}
      href={link}
      target="_blank"
    >
      {icon}
      {children && children}
    </a>
  );
}

export default function IntroText({ showInitialContent }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <section className="col-span-full max-h-fit row-start-3 mt-6 lg:row-start-4 lg:col-start-3 lg:col-end-10">
      <TextBox
        className={` ${
          showInitialContent ? "animate-fade-in-up" : "opacity-0"
        } `}
      >
        Creativo y amante del diseño digital, con una mentalidad perfeccionista
        que me impulsa a mejorar y pulir constantemente mis habilidades.
      </TextBox>
      <div className="flex gap-2 lg:gap-4 mt-6">
        <Icon
          link="https://www.linkedin.com/in/dylan-blasco-de-souza-904b20262/"
          icon={<LinkedInLogoIcon className="h-6 w-6 lg:h-9 lg:w-9" />}
          showInitialContent={showInitialContent}
        />
        <Icon
          link="https://github.com/Dylan10123"
          icon={<GitHubLogoIcon className="h-6 w-6 lg:h-9 lg:w-9" />}
          showInitialContent={showInitialContent}
        />
        <CopyToClipboard
          text="dbds.101203@gmail.com"
          options={{ message: "Copiado!" }}
          onCopy={handleCopy}
        >
          <div
            className={`${
              showInitialContent ? "animate-fade-in-up" : "opacity-0"
            } cursor-pointer flex items-center gap-2 border-2 border-zinc-300/30 p-2 lg:p-4 rounded-md lg:rounded-lg transition-colors duration-200 ease-in-out hover:bg-violet-600/20 hover:text-violet-300`}
          >
            {isCopied ? (
              <>
                <CheckCircledIcon className="h-6 w-6 lg:h-9 lg:w-9" />
                Copiado al portapapeles!
              </>
            ) : (
              <>
                <CopyIcon className="h-6 w-6 lg:h-9 lg:w-9" />
                dbds.101203@gmail.com
              </>
            )}
          </div>
        </CopyToClipboard>
      </div>
    </section>
  );
}
