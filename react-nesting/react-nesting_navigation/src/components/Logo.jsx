import Image from "./Image";

export default function Logo({ src }) {
  return (
    <>
      <a href="#">
        <Image src={src} alt="logo" />
      </a>
    </>
  );
}
