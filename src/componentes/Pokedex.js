import React from "react";
import carregando from "./imagens/carregando.gif";
import Paginacao from "./Paginacao";
import Pokemon from "./Pokemon";

export default function Pokedex(props) {
  const { pokemons, loading, page, setPage, totalPage} = props;

  const home = () => {
    setPage(0)
  }

  const clickBotaoDireito = () => {
    if(page + 1 < totalPage){
      setPage(page + 1)
    }
  }

  const clickBotaoEsquerdo = () => {
    if(page > 0){
      setPage(page - 1)
    }
  }

  return (
    <div >
      <Paginacao page={page + 1} 
        setPage={setPage} 
        totalPage={totalPage} 
        clickBotaoDireito={clickBotaoDireito} 
        clickBotaoEsquerdo={clickBotaoEsquerdo }
        home={home} />

      {loading ? (
        <div className="carregando">
          <img
            alt="carregando-img"
            src={carregando}
            className="carregando-img"
          />
          <div className="carregando-texto">
          Carregando...
        </div>
      </div>
      ) : (
        <div className="pokedexGrid">
          {pokemons.map((pokemon, index) => {
            return <Pokemon key={index} pokemon={pokemon}  />;
          })}
        </div>
      )}
    </div>
  );
}
