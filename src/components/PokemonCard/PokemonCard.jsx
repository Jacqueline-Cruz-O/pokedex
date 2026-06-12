function PokemonCard({ pokemon }) {
  return (
    <article className="pokemon-card">
      <img
        className="pokemon-card__image"
        src={pokemon.image}
        alt={pokemon.name}
      />

      <h2 className="pokemon-card__name">{pokemon.name}</h2>

      <p className="pokemon-card__id">#{pokemon.id}</p>

      <p className="pokemon-card__type">{pokemon.type}</p>
    </article>
  );
}

export default PokemonCard;