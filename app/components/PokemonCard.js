import Link from "next/link";
import React from "react";

const PokemonCard = ({ id, name, image }) => {
  return (
    <Link href={`/pokemons/${id}`}>
    <div className="pokemon-card border p-4 rounded shadow-lg cursor-pointer">
      <div className="text-center">
        <img src={image} alt={name} className="w-24 h-24 mx-auto" />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl font-bold">#{id}</h2>
        <p className="text-lg capitalize">{name}</p>
      </div>
    </div>
    </Link>
  );
};

export default PokemonCard;
