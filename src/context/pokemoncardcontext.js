import { createContext } from "react";

const pokemonCardContext = createContext({
  favoritos: [],
  atualizaFavoritos: (id) => null,
});

export const pokemonProvider = pokemonCardCOntext.Provider;

export default pokemonFavorito;
