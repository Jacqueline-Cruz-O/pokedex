const BASE_URL = "https://pokeapi.co/api/v2";

export async function getPokemonList(limit = 30) {
  const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}`);

  if (!response.ok) {
    throw new Error("Error al obtener la lista de Pokémon");
  }

  const data = await response.json();

  return data.results.map((pokemon) => {
    // La URL termina en .../pokemon/25/
    const id = pokemon.url.split("/").filter(Boolean).pop();

    return {
      id: Number(id),
      name: pokemon.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
      type: "Desconocido", // Lo mejoraremos más adelante si queremos mostrar el tipo real
    };
  });
}