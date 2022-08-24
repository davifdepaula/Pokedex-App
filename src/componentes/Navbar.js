import React from "react";
import pokedexLogo from "./imagens/PokedexLogo.png";

export default function Navbar() {
  return (
    <nav>
      <div>
        <img alt="nav-img" src={pokedexLogo} className="Pokedex-logo" />
      </div>
    </nav>
  );
}
