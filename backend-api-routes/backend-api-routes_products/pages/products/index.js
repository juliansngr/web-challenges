import Link from "next/link";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Home() {
  const { data, error, isLoading } = useSWR("/api/products/", fetcher);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <ul>
      {data.map((product) => {
        return (
          <li>
            <Link href={`/products/${product.id}`}>
              <p>{product.name}</p>
              <p>{product.description}</p>
              <p>
                {product.price} {product.currency}
              </p>
              <p>{product.category}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
