import { NextResponse } from "next/server";

const getPokemons = async (limit) => {
    const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    const data = await pokemons.json();
    return data.results.map((pokemon, index) => {
        const id = index + 1;
        return {
            id,
            name: pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        }
    })
}


export async function GET(request, {params}){
    const limit = params?.limit ?? 150;
    const pokemons = await getPokemons(limit);
    return NextResponse.json(pokemons);
}