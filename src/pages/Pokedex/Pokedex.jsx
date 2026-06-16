import { useState, useEffect } from "react";


import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import SearchForm from "../../components/SearchForm/SearchForm";
import PokemonList from "../../components/PokemonList/PokemonList";
import Footer from "../../components/Footer/Footer";
import Preloader from "../../components/Preloader/Preloader";

import { getPokemonList } from "../../utils/PokeApi";

function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    getPokemonList()
      .then((data) => {
        setPokemon(data);
      })
      .catch(() => {
        setError(
          "Algo salió mal al cargar los Pokémon. Por favor, intenta de nuevo."
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Reiniciar el contador cuando cambia la búsqueda
  useEffect(() => {
    setVisibleCount(3);
  }, [searchTerm]);

  const search = searchTerm.trim().toLowerCase();

  const filteredPokemon = pokemon.filter((item) => {
    // Buscar por número
    if (search !== "" && !isNaN(search)) {
      return item.id.toString().includes(search);
    }

    // Buscar por nombre
    if (item.name.toLowerCase().includes(search)) {
      return true;
    }

    // Buscar por tipo
    return item.types.some((type) =>
      type.toLowerCase().includes(search)
    );
  });

  return (
    <>
      <Header />
      <Navigation />

      <main className="pokedex">
          <SearchForm
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          onSubmit={(event) => event.preventDefault()}
        />

        {loading ? (
          <Preloader />
        ) : error ? (
          <p className="pokedex__error">{error}</p>
        ) : filteredPokemon.length === 0 ? (
          <p className="pokedex__empty">
            No se ha encontrado nada.
          </p>
        ) : (
          <>
            <PokemonList
              pokemon={filteredPokemon.slice(0, visibleCount)}
            />

            {visibleCount < filteredPokemon.length && (
              <button
                className="pokedex__show-more"
                onClick={() =>
                  setVisibleCount((prev) => prev + 3)
                }
              >
                Mostrar más
              </button>
            )}
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

export default Pokedex;