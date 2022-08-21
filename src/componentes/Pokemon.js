import React, { useContext } from 'react'
import pokemonFavorito from '../context/Favoritocontext'
import Coração from "/home/davi/pokedex/src/componentes/imagens/coracao.png"
import coracaoPreto from "/home/davi/pokedex/src/componentes/imagens/coracaoPreto.png"

export default function Pokemon(props) {
    const {pokemon} = props
    const {favoritos, atualizaFavoritos} = useContext(pokemonFavorito)

    const types = pokemon.types.map((type, index) => {
       return type.type.name
    })
    
    const clickCoracao = () => {
        atualizaFavoritos(pokemon.name)
    }
    const heart = favoritos.includes(pokemon.name) ? <img alt="coração" src={Coração} className="coração"/> : <img alt="coração" src={coracaoPreto} className="coraçãoPreto"/>


    return (
        <div className="pokemon-card">  
            <div className={types[0]}> 
                <div className='pokemon-card-body'>
                    <div className='card-top'>    
                        <div>N° {("000" + pokemon.id).slice(-3)}</div>
                        <button onClick={clickCoracao} className={types[0]}>
                            {heart}
                        </button>
                    </div>

                    <div className="card-mid">
                    <img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon-image"/>
                    </div>

                    <div className='card-bottom'>
                        <h3>{pokemon.name}</h3>
                            <div className="pokemon-type-text">
                            {types.length >1 ? (
                            <div className='gridTypes'>
                                <div className="type-0"> {types[0]} </div>
                                < div className="type-1"> {types[1]} </div>
                            </div> ): 
                            (<div>
                                <div className="type-0">{types}</div>
                            </div>)
                            }                
                            </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
