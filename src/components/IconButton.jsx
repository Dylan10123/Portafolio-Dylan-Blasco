export default function IconButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent hover:bg-zinc-700"
    >
      {children}
    </button>
  );
}
