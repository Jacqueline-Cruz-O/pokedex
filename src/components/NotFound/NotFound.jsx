import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found">
      <h1 className="not-found__title">404</h1>

      <p className="not-found__message">
        Parece que la ruta que buscas se escapó. Regresa al inicio para seguir
        explorando la Pokédex.
      </p>

      <Link className="not-found__link" to="/">
        Volver al inicio
      </Link>
    </main>
  );
}

export default NotFound;