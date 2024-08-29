import React, { Suspense } from "react";
import PokemonCard from "../components/PokemonCard";

const getPokemons = async () => {
  const pokemons = await fetch("http://localhost:3000/api/pokemons");
  const result = await pokemons.json();
  return result;
};

const Pokemons = async () => {
  const pokemons = await getPokemons();
  return (
    <>
    <h1 className="text">Pokemons</h1>
    <div className="flex gap-3 flex-wrap">
      <Suspense fallback={<div>Loading!!!!</div>}>
        {pokemons.map((pokemon) => (
          <PokemonCard
            id={pokemon.id}
            image={pokemon.image}
            name={pokemon.name}
            key={pokemon.id}
          />
        ))}
      </Suspense>
    </div>
    </>  
  );
};

export default Pokemons;
