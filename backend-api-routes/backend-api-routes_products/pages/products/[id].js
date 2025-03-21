import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Details() {
  const router = useRouter();
  const { id: idToFetch } = router.query;

  const { data, error, isLoading } = useSWR(
    `/api/products/${idToFetch}`,
    fetcher
  );

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <p>{data.name}</p>
      <p>{data.description}</p>
      <p>
        {data.price} {data.currency}
      </p>
      <p>{data.category}</p>
      <Link href={"/products"}>
        <button>Back</button>
      </Link>
    </>
  );
}
