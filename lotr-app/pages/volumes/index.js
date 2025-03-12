import Link from "next/link";
import { introduction, volumes } from "../lib/data";
import { useRouter } from "next/router";

export default function VolumesPage() {
  const router = useRouter();
  function handleRandomBook() {
    const getRandomNumber = Math.floor(Math.random() * volumes.length);
    const getRandomBook = volumes[getRandomNumber];
    router.push(`/volumes/${getRandomBook.slug}`);
  }

  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.slug}>
              <Link href={"/volumes/" + volume.slug}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
      <button onClick={handleRandomBook}>Random Book</button>
    </div>
  );
}
