import { Link } from "react-router-dom";
import NotFoundImg from "../../images/notfound.png";

function NotFound() {
  return (
    <main className="not-found">
      <h1 className="not-found__title">404</h1>

      <p className="not-found__message">
       Aquí no encontraras ni fantasmas, regresa al inicio para seguir
        explorando la Pokédex.
      </p>
         <img
        className="not-found__image"
        src={NotFoundImg}
        alt="fantasma"
      />

      <Link className="not-found__link" to="/">
        Volver al inicio
      </Link>
    </main>
  );
}

export default NotFound;