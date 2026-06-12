import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <Link className="navigation__link" to="/">
        Inicio
      </Link>

      <Link className="navigation__link" to="/pokedex">
        Pokédex
      </Link>
    </nav>
  );
}

export default Navigation;