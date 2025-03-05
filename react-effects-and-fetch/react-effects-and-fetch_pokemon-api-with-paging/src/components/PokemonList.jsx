import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonApiOffset, setPokemonApiOffset] = useState(0);

  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${pokemonApiOffset}`
        );
        const data = await response.json();

        setPokemon(data.results);

        setPrevious(data.previous);
        setNext(data.next);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [pokemonApiOffset]);

  function handleNextPage() {
    if (next === null) {
      alert("You reached the end!");
    } else {
      setPokemonApiOffset((prev) => prev + 20);
    }
  }

  function handleLastPage() {
    if (previous === null) {
      alert("You reached the end!");
    } else {
      setPokemonApiOffset((prev) => prev - 20);
    }
  }

  return (
    <main>
      <button type="button" onClick={handleLastPage}>
        Previous Page
      </button>
      <button type="button" onClick={handleNextPage}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
