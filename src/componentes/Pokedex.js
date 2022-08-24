import React, { useState } from "react";
import carregando from "./imagens/carregando.gif";
import Paginacao from "./Paginacao";
import Pokemon from "./Pokemon";
import PokemonDetalhes from "./PokemonDetalhe";

export default function Pokedex(props) {
  const {
    pokemons,
    loading,
    page,
    setPage,
    totalPage,
    setTotalPage,
    ativo,
    setAtivo,
    home,
  } = props;
  const [pokemonCard, setPokemonCard] = useState([]);

  const clickBotaoDireito = () => {
    if (page + 1 < totalPage) {
      setPage(page + 1);
    }
  };

  const clickBotaoEsquerdo = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <div>
      <Paginacao
        page={page + 1}
        setPage={setPage}
        totalPage={totalPage}
        clickBotaoDireito={clickBotaoDireito}
        clickBotaoEsquerdo={clickBotaoEsquerdo}
        home={home}
      />

      {loading ? (
        <div className="carregando">
          <img
            alt="carregando-img"
            src={carregando}
            className="carregando-img"
          />
          <div className="carregando-texto">Carregando...</div>
        </div>
      ) : (
        <div>
          {ativo ? (
            <PokemonDetalhes pokemon={pokemonCard} />
          ) : (
            <div className="pokedexGrid">
              {pokemons.map((pokemon, index) => {
                return (
                  <Pokemon
                    key={index}
                    pokemon={pokemon}
                    setPokemonCard={setPokemonCard}
                    setPage={setPage}
                    setTotalPage={setTotalPage}
                    setAtivo={setAtivo}
                  />
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
