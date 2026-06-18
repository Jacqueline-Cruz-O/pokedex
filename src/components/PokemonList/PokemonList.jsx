import PokemonCard from "../PokemonCard/PokemonCard";

function PokemonList({ pokemon }) {
  return (
    <section className="pokemon-list">
      {pokemon.map((poke) => (
        <PokemonCard
          key={poke.id}
          pokemon={poke}
        />
      ))}
    </section>
  );
}

export default PokemonList;