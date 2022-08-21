import { createContext } from "react";

const pokemonFavorito = createContext({
  favoritos: [],
  atualizaFavoritos: (id) => null,
});

export const FavoritoProvider = pokemonFavorito.Provider;

export default pokemonFavorito;
