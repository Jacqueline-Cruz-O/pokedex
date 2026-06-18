import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <Link className="navigation__link" to="/">
        INICIO
      </Link>

      <Link className="navigation__link" to="/pokedex">
        POKEDEX
      </Link>
    </nav>
  );
}

export default Navigation;