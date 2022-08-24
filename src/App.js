import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./componentes/Navbar";
import Pokedex from "./componentes/Pokedex";
import Searchbar from "./componentes/Searchbar";
import { FavoritoProvider } from "./context/Favoritocontext.js";
import { searchPokemon, getPokemonData, pokemonGrid } from "./Api";

const chaveFavoritos = "f";
function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [notFound, setNotFound] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [favoritos, setFavoritos] = useState([]);
  const [ativo, setAtivo] = useState(false);

  const pokemonPorPagina = 20;

  const fetchpokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await pokemonGrid(pokemonPorPagina, page * pokemonPorPagina);
      setTotalPage(Math.ceil(data.count / pokemonPorPagina));
      const promises = await data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const result = await Promise.all(promises);
      setPokemons(result);
      setLoading(false);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const home = () => {
    setPage(0);
    console.log(ativo);
    if (ativo) {
      setAtivo(false);
      return fetchpokemons();
    }
  };

  const carregaFavoritos = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(chaveFavoritos)) || [];
    setFavoritos(pokemons);
  };

  const atualizaFavoritos = (nome) => {
    const atualizador = [...favoritos];
    const verificaPokemon = favoritos.indexOf(nome);

    if (verificaPokemon >= 0) {
      atualizador.splice(verificaPokemon, 1);
    } else {
      atualizador.push(nome);
    }

    setFavoritos(atualizador);
    window.localStorage.setItem(chaveFavoritos, JSON.stringify(atualizador));
  };

  const buscaPokemon = async (pokemon) => {
    if (!pokemon) {
      return fetchpokemons();
    }

    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPage(1);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchpokemons();
  }, [page]);

  useEffect(() => {
    carregaFavoritos();
  }, []);

  return (
    <FavoritoProvider
      value={{
        favoritos: favoritos,
        atualizaFavoritos: atualizaFavoritos,
      }}
    >
      <div>
        <Navbar />
        <Searchbar buscaPokemon={buscaPokemon} />
        {notFound ? (
          <div className="naoEncontrado">Pokemon não encontrado!</div>
        ) : (
          <Pokedex
            pokemons={pokemons}
            setPokemons={setPokemons}
            loading={loading}
            page={page}
            setPage={setPage}
            totalPage={totalPage}
            setTotalPage={setTotalPage}
            ativo={ativo}
            setAtivo={setAtivo}
            home={home}
          />
        )}

        <div className="rodape-text">
          Um catálogo Pokémon construído com React e PokéAPI
        </div>
        <div className="App"></div>
      </div>
    </FavoritoProvider>
  );
}

export default App;
