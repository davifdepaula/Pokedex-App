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
      <div className="conteudo-pagina">
        
        <div className="home">
          <div className="Casinha">
            <input type="image" src={casa} className="casinhaBtn" onClick={home} />
          </div>

          <div className="casinhaTexto">Home</div>
        </div>
    

        <div className="controlePagina">

          <div className="esquerda">
            <input type="image" onClick={clickBotaoEsquerdo} src={esquerda} className="botao-esquerda" />
          </div>    
          
          <div className="meio">{page} de {totalPage}</div>

          <div className="direita">
            <input type="image" src={direita}  onClick={clickBotaoDireito} className="botao-direita"/>
          </div>         

        </div>

        <div className="conteudoFavorito"> 
          <img alt="coração" src={Coração} className="coraçãoFavorito" />
          <div className="favoritoTexto">{favoritos.length}</div>
          <div className="favoritoTexto">Favoritos</div>
        </div>


      </div>
  
  );
}
