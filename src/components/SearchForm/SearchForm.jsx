
import searchIcon from "../../images/search-icon.png";

function SearchForm({ value, onChange, onSubmit }) {
  return (
    <form className="search-form" onSubmit={onSubmit}>
      <div className="search-form__field">
        <img
          className="search-form__icon"
          src={searchIcon}
          alt=""
          aria-hidden="true"
        />

        <input
          className="search-form__input"
          type="text"
          placeholder="Buscar por nombre, número o tipo..."
          value={value}
          onChange={onChange}
          aria-label="Buscar Pokémon por nombre, número o tipo"
        />
      </div>
    </form>
  );
}

export default SearchForm;