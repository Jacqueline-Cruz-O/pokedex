import { useState, useEffect } from "react";

import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import SearchForm from "../../components/SearchForm/SearchForm";
import PokemonList from "../../components/PokemonList/PokemonList";
import Footer from "../../components/Footer/Footer";

import { getPokemonList } from "../../utils/PokeApi";




function Pokedex() {
    const [pokemon, setPokemon] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    getPokemonList()
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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

        <PokemonList pokemon={pokemon.slice(0, visibleCount)} />

        {visibleCount < pokemon.length && (
          <button
            className="pokedex__show-more"
            onClick={() => setVisibleCount((prev) => prev + 3)}
          >
            Mostrar más
          </button>
        )}
      </main>

      <Footer />
    </>
  );
}
export default Pokedex;