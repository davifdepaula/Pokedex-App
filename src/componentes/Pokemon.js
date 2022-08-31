import React, { useContext } from "react";
import pokemonFavorito from "../context/Favoritocontext";
import { color } from "./Color";
import Coração from "/home/davi/pokedex/src/componentes/imagens/coracao.png";
import coracaoPreto from "/home/davi/pokedex/src/componentes/imagens/coracaoPreto.png";

export default function Pokemon(props) {
  const { pokemon, setPokemonCard, setPage, setTotalPage, setAtivo } = props;
  const { favoritos, atualizaFavoritos } = useContext(pokemonFavorito);

  const types = pokemon.types.map((type, index) => {
    return type.type.name;
  });

  const background = color(types[0]);

  const clickCoracao = () => {
    atualizaFavoritos(pokemon.name);
  };
  const heart = favoritos.includes(pokemon.name) ? (
    <img alt="coração" src={Coração} className="coração" />
  ) : (
    <img alt="coração" src={coracaoPreto} className="coraçãoPreto" />
  );

  const clickCard = () => {
    setPokemonCard(pokemon);
    setPage(0);
    setTotalPage(1);
    setAtivo(true);
  };
  return (
    <div className={`pokemon-card`}>
      <div
        className="pokemon-card-body"
        style={{ background: `${background}` }}
      >
        <div className="card-top">
          <div># {("000" + pokemon.id).slice(-3)}</div>
          <div className="informacao" onClick={clickCard}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
            </svg>
          </div>
          <button
            onClick={clickCoracao}
            className="heartBtn"
            style={{ background: `${background}` }}
          >
            <div>{heart}</div>
          </button>
        </div>

        <div className="card-mid">
          <img
            alt={pokemon.name}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            className="pokemon-image"
          />
        </div>

        <div className="card-bottom">
          <h3>{pokemon.name}</h3>
          <div className="pokemon-type-text">
            {types.length > 1 ? (
              <div className="gridTypes">
                <div className="type-0"> {types[0]} </div>
                <div className="type-1"> {types[1]} </div>
              </div>
            ) : (
              <div>
                <div className="type-0">{types}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
