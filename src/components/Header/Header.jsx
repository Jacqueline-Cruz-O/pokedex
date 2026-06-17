import pokemonLogo from "../../images/pokemon-logo.png";

function Header() {
  return (
    <header className="header">
        <img
        className="header__logo"
        src={pokemonLogo}
        alt="Pokémon"
      />
    </header>
  );
}

export default Header;