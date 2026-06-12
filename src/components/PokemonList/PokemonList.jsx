import PokemonCard from "../PokemonCard/PokemonCard";

function PokemonList({ pokemon }) {
  return (
    <section className="pokemon-list">
      {pokemon.map((item) => (
        <PokemonCard key={item.id} pokemon={item} />
      ))}
    </section>
  );
}

export default PokemonList;