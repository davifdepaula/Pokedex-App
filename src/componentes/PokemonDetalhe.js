import React, { useContext } from "react";
import pokemonFavorito from "../context/Favoritocontext";
import { color } from "./Color";
import Coração from "/home/davi/pokedex/src/componentes/imagens/coracao.png";
import coracaoPreto from "/home/davi/pokedex/src/componentes/imagens/coracaoPreto.png";

export default function pokemonDetalhes(props) {
  const { favoritos, atualizaFavoritos } = useContext(pokemonFavorito);
  const { pokemon } = props;

  const types = pokemon.types.map((type, index) => {
    return type.type.name;
  });

  const background = color(types[0]);

  const abilities = pokemon.abilities.map((ability, index) => {
    return ability.ability.name;
  });

  const clickCoracao = () => {
    atualizaFavoritos(pokemon.name);
  };
  const heart = favoritos.includes(pokemon.name) ? (
    <img alt="coração" src={Coração} className="coração" />
  ) : (
    <img alt="coração" src={coracaoPreto} className="coraçãoPreto" />
  );

  return (
    <div className="detalhesContainer" style={{ background: `${background}` }}>
      <div className="Grid">
        <div className="GridTop">
          <div>
            <h3>{pokemon.name}</h3>
          </div>
          <button
            onClick={clickCoracao}
            className="heartBtn"
            style={{ background: `${background}` }}
          >
            <div>{heart}</div>
          </button>
        </div>
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="gridTopImage"
        />
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
          <div className="GridMid">
            <h3>abilities</h3>
            {abilities.length > 1 ? (
              <div className="gridAbilities">
                <div className="ability-0"> {abilities[0]} </div>
                <div className="ability-1"> {abilities[1]} </div>
              </div>
            ) : (
              <div>
                <div className="ability-0">{abilities[0]}</div>
              </div>
            )}
          </div>
        </div>

        <div className="GridBottom">
          <li>Altura: {pokemon.height / 10} m</li>
          <li>Peso: {pokemon.weight / 10} kg</li>
        </div>
      </div>
    </div>
  );
}
