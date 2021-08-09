import React, { useState, useEffect } from "react";
import {getPokemonDetails} from "../Services/httpService";
export default function PokemonInfo(url){

    useEffect(() => {
        const pokemonDetails = async () => {
          try {
            let data = await getPokemonDetails(url.infoPokemon);
            console.log(data.data);
          } catch (err) {}
        };
        pokemonDetails();
      }, [true]);

      return (
        <div className="App">
          <header className="App-header">

          </header>
        </div>
      );
    }
