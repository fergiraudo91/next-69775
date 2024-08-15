import React from "react";
import PokemonCard from "../components/PokemonCard";

const getPokemons = async () => {
  const pokemons = await fetch("http://localhost:3000/api/pokemons");
  const result = await pokemons.json();
  return result;
};

const Pokemons = async () => {
  const pokemons = await getPokemons();
  return (
    <div className="flex gap-3 flex-wrap">
      {pokemons.map((pokemon) => (
        <PokemonCard
          id={pokemon.id}
          image={pokemon.image}
          name={pokemon.name}
          key={pokemon.id}
        />
      ))}
    </div>
  );
};

export default Pokemons;
