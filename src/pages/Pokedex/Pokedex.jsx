import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

function Pokedex() {
  return (
<>
  <Header />
  <Navigation />

  <main>
    <h1>Pokédex</h1>

    <p>
      Aquí se mostrarán los Pokémon obtenidos desde la API.
    </p>
  </main>

  <Footer />
</>
  );
}

export default Pokedex;

