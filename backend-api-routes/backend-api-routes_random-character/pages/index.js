import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

  if (isLoading) {
    return;
  }

  return (
    <p>
      Hi there, I am {data.firstName} {data.lastName}, currently working as a{" "}
      {data.profession}! Feel free to follow me on{" "}
      <a href={`https://x.com/${data.twitter}`}>Twitter</a>! If the link doesn't
      work, my username is {data.twitter} {":)"} If you wanna meet, my geohash
      is "{data.geohash}"
    </p>
  );
}
