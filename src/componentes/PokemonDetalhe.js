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

  const XP =  pokemon.base_experience
  const HP=   pokemon.stats[0].base_stat
  


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

            <div className="gridTopButton">
              <button
                onClick={clickCoracao}
                className="heartBtn"
                style={{ background: `${background}` }}>
                <div>{heart}</div>
              </button>
            </div>

            <img
            alt={pokemon.name}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            className="gridTopImage"
            />

            <h3>{pokemon.name}</h3>
            <div className="status">
            <dt>HP {HP}</dt>
            <dt>XP {XP}</dt>
            </div>

        </div>
          <div className="GridMid">
            <div className="gridAbilities">
            {abilities.length > 1 ? (
                <div className="ability-0"> {abilities[0]} | {abilities[1]} </div>
            ) : (
              <div>
                <div className="ability-0">{abilities[0]}</div>
              </div>
            )}
              <h6>abilities</h6>
            </div>

            
            <div className="pokemonHeight">
              <div className="pesoAltura">
                {pokemon.height / 10} m
              </div>
              <h6>Altura</h6>
            </div>

            <div className="pokemonWeight">
              <div className="pesoAltura">
                {pokemon.weight / 10} kg
              </div>
              <h6>Peso</h6>
            </div>
          </div>
        </div>
    </div>
  );
}
