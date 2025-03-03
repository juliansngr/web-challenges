import Image from "./Image";

export default function Avatar({ src }) {
  return (
    <>
      <button
        type="button"
        onClick={() => console.log("I could toggle a profile!")}
        aria-label="toggle profile"
      >
        <Image src={src} alt="avatar" />
      </button>
    </>
  );
}
