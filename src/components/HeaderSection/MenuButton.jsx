export default function MenuButton({ isOpen, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`w-12 h-12 flex flex-col items-center justify-center rounded-full bg-zinc-80 hover:bg-zinc-700 ${className}`}
    >
      <div
        className={`m-1 bg-white h-1 w-8 rounded transition duration-300 ${
          isOpen ? "rotate-45  translate-y-1.5" : ""
        }`}
      ></div>
      <div
        className={`m-1 bg-white h-1 w-8 rounded transition duration-300 ${
          isOpen ? "-rotate-45 -translate-y-1.5" : ""
        }`}
      ></div>
    </button>
  );
}
