import img from "/images/Hero_img.webp";

export default function HeroImage() {
  return (
    <img
      className="scale-x-[-1] h-auto max-h-[60vh] lg:max-h-[80vh] object-cover mask-r-from-80% mask-b-from-80% mask-radial-from-50% mask-radial-to-80% z-0"
      src={img}
      alt="hero image"
    />
  );
}
