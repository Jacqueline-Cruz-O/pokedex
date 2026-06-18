import { BASE_URL, POKEMON_LIMIT } from "./constants";

export async function getPokemonList() {
  const response = await fetch(`${BASE_URL}/pokemon?limit=${POKEMON_LIMIT}`);

  if (!response.ok) {
    throw new Error("Error al obtener la lista Pokémon");
  }

  const data = await response.json();

  const pokemonDetails = await Promise.all(
    data.results.map(async (pokemon) => {
      const detailResponse = await fetch(pokemon.url);

      if (!detailResponse.ok) {
        throw new Error(`Error al obtener ${pokemon.name}`);
      }

      const detail = await detailResponse.json();

      return {
        id: detail.id,
        name: detail.name,
        image:
          detail.sprites.front_default ||
          detail.sprites.other["official-artwork"].front_default,
        types: detail.types.map((typeInfo) => typeInfo.type.name),
      };
    })
  );

  return pokemonDetails.sort((a, b) => a.id - b.id);
}