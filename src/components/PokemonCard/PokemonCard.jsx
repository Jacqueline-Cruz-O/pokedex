function PokemonCard({ pokemon }) {
  return (
    <article className="pokemon-card">
      <img
        className="pokemon-card__image"
        src={pokemon.image}
        alt={pokemon.name}
      />

      <h2 className="pokemon-card__name">
        {pokemon.name.charAt(0).toUpperCase() +
          pokemon.name.slice(1)}
      </h2>

      <p className="pokemon-card__id">
        #{pokemon.id}
      </p>

      <p className="pokemon-card__types">
        {pokemon.types.join(" • ")}
      </p>
    </article>
  );
}

export default PokemonCard;