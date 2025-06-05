export default function TextBox({ children, className }) {
  return (
    <>
      <p
        className={`text-base lg:text-lg text-balance leading-6 tracking-wide font-inter text-zinc-300 ${className}`}
      >
        {children}
      </p>
    </>
  );
}
