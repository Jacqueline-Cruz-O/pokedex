import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import SearchForm from "../../components/SearchForm/SearchForm";
import PokemonList from "../../components/PokemonList/PokemonList";
import Footer from "../../components/Footer/Footer";

function Pokedex() {
  const demoPokemon = [
    {
      id: 25,
      name: "Pikachu",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      type: "Electric",
    },
    {
      id: 1,
      name: "Bulbasaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      type: "Grass",
    },
    {
      id: 4,
      name: "Charmander",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      type: "Fire",
    },
  ];

  return (
    <>
      <Header />
      <Navigation />

      <main className="pokedex">
        <h1 className="pokedex__title">Pokédex</h1>

        <SearchForm
          value=""
          onChange={() => {}}
          onSubmit={(event) => event.preventDefault()}
        />

        <PokemonList pokemon={demoPokemon} />
      </main>

      <Footer />
    </>
  );
}

export default Pokedex;