import React, { useState } from "react";
import Lupa from "./imagens/lupa.png";

export default function Searchbar(props) {
  const [busca, setBusca] = useState("");
  const { buscaPokemon } = props;

  const pesquisa = (elemento) => {
    setBusca(elemento.target.value);
    if (elemento.target.value.length === 0) {
      buscaPokemon(undefined);
    }
  };

  const clickLupa = () => {
    buscaPokemon(busca);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Buscar pokemon..."
        className="searchBar"
        onChange={pesquisa}
      />
      <button className="search-btn" onClick={clickLupa}>
        <img alt="Buscar" src={Lupa} className="search-img" />
      </button>
    </div>
  );
}
