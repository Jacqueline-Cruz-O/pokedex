import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";

function Main() {
  return (
    <>
      <Header />
      <Navigation />

      <main className="main">
        <section className="hero">
          <h1 className="hero__title">Explora el mundo Pokémon</h1>

          <p className="hero__description">
            Consulta información de cientos de Pokémon utilizando la PokeAPI.
          </p>

          <Link className="hero__button" to="/pokedex">
            Explorar Pokédex
          </Link>
        </section>

        <About />
      </main>

      <Footer />
    </>
  );
}

export default Main;