import React, { useContext } from "react";
import esquerda from "./imagens/esquerda.png";
import direita from "./imagens/direita.png";
import Coração from "/home/davi/pokedex/src/componentes/imagens/coracao.png";
import casa from "/home/davi/pokedex/src/componentes/imagens/home.png";
import pokemonFavorito from "../context/Favoritocontext";

export default function Paginacao(props) {
  const {
    page,
    totalPage,
    clickBotaoDireito,
    clickBotaoEsquerdo,
    home,
  } = props;
  const { favoritos } = useContext(pokemonFavorito);

  return (
    <div className="navegacaoPagina">
      <div className="conteudo-pagina">

        <div className="conteudoCasinha">
          <button className="casinhaBtn" onClick={home}>
            <img alt="home" src={casa} className="casinha" />
          </button>

          <div className="casinhaTexto">Home</div>
        </div>

        <div className="controlePagina">
        <button onClick={clickBotaoEsquerdo} className="botao-esquerda">
          <img alt="esquerda" src={esquerda} className="imagem-botao-esquerda" />
        </button>

        <div className="pagina">
          {page} de {totalPage}
        </div>

        <button onClick={clickBotaoDireito} className="botao-direita">
          <img alt="direita" src={direita} className="imagem-botao-direita" />
        </button>

        </div>

        <div className="conteudoFavorito">
          <div>
          {favoritos.length} <img alt="coração" src={Coração} className="coraçãoFavorito" /> 
          </div>
          <div className="favoritoTexto"> Favoritos</div>
        </div>

      </div>

    </div>
  
  );
}
