export default function TextBox({ children, className }) {
  return (
    <>
      <p
        className={`text-base text-balance leading-6 tracking-wide font-medium text-zinc-400 ${className}`}
      >
        {children}
      </p>
    </>
  );
}
