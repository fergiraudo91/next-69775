import React from "react";

const PokemonDetailCard = ({ id, name, image, types, abilities }) => {
  return (
    <div className="pokemon-detail-card border p-6 rounded shadow-lg max-w-xs mx-auto bg-white">
      <div className="text-center">
        <img src={image} alt={name} className="w-32 h-32 mx-auto" />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-2xl font-bold capitalize">#{id} {name}</h2>
        <div className="mt-2">
          <h3 className="text-lg font-semibold">Type(s):</h3>
          <ul className="flex justify-center space-x-2">
            {types.map((type, index) => (
              <li key={index} className="bg-gray-200 px-2 py-1 rounded-full">
                {type}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Abilities:</h3>
          <ul className="list-disc list-inside">
            {abilities.map((ability, index) => (
              <li key={index} className="capitalize">
                {ability}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailCard;
