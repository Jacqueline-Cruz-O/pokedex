function SearchForm({ value, onChange, onSubmit }) {
  return (
    <form className="search-form" onSubmit={onSubmit}>
      <input
        className="search-form__input"
        type="text"
        placeholder="Buscar Pokémon..."
        value={value}
        onChange={onChange}
      />

      <button className="search-form__button" type="submit">
        Buscar
      </button>
    </form>
  );
}

export default SearchForm;