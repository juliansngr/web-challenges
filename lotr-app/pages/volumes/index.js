import Link from "next/link";
import { introduction, volumes } from "../lib/data";

export default function VolumesPage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => {
          return (
            <li>
              <Link href={"/volumes/" + volume.slug}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
