function PokemonCard({ pokemon }) {
  return (
    <article className="pokemon-card">
      <p className="pokemon-card__id">
        #{String(pokemon.id).padStart(3, "0")}
      </p>

      <img
        className="pokemon-card__image"
        src={pokemon.image}
        alt={pokemon.name}
      />

      <h2 className="pokemon-card__name">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </h2>

      <div className="pokemon-card__types">
        {pokemon.types.map((type) => (
          <span
            className={`pokemon-card__type pokemon-card__type_type_${type}`}
            key={type}
          >
            {type}
          </span>
        ))}
      </div>
    </article>
  );
}

export default PokemonCard;