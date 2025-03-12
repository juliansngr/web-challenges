import Link from "next/link";
import { volumes } from "../lib/data";
import Image from "next/image";
import { useRouter } from "next/router";

export default function VolumeDetail() {
  const router = useRouter();

  const { slug: incomingSlug } = router.query;
  const currentVolume = volumes.find(({ slug }) => slug === incomingSlug);

  const currentIndex = volumes.findIndex(
    (volume) => volume.slug === currentVolume.slug
  );

  const previousVolume = currentIndex > 0 ? volumes[currentIndex - 1] : null;
  const nextVolume =
    currentIndex < volumes.length ? volumes[currentIndex + 1] : null;

  return (
    <div>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{currentVolume.title}</h1>
      <p>{currentVolume.description}</p>
      <ul>
        {currentVolume.books.map((book) => {
          return (
            <li key={currentVolume.slug}>
              <p>
                {book.title} ({book.ordinal})
              </p>
              <p></p>
            </li>
          );
        })}
      </ul>
      <Image
        src={currentVolume.cover}
        alt={currentVolume.title + "volume cover"}
        width="140"
        height="230"
      />
      <div style={{ display: "flex", gap: "10px" }}>
        {previousVolume && (
          <Link href={"/volumes/" + previousVolume.slug}>Previous Volume</Link>
        )}
        {nextVolume && (
          <Link href={"/volumes/" + nextVolume.slug}>Next Volume</Link>
        )}
      </div>
    </div>
  );
}
