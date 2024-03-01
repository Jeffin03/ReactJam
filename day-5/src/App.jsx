import { useState, useEffect } from "react";

export default function App() {
  const [pokemonName, setPokemonName] = useState();
  const [pokemonInfo, setPokemonInfo] = useState();
  const [images, setImages] = useState();

  function handleInput(event) {
    const typed = event.target.value;
    setPokemonName(typed);
  }

  useEffect(getPokeInfo, [pokemonName]);

  function getPokeInfo() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
      .then((resp) => resp.json())
      .then((data) => setPokemonInfo(data));

    fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokemonName}/`)
      .then((resp) => resp.json())
      .then((imageData) => setImages(imageData.sprites));
  }

  return (
    <div>
      <h1>PokePedia!</h1>
      <h2>Enter a Pokemon name and see the magic happen</h2>
      <p>
        Found Pokemon: {pokemonInfo ? pokemonInfo.name : <span>Not Found</span>}
      </p>
      {images && (
        <>
          <img src={images?.front_default} alt="pokemon-image" />
          <img src={images?.back_default} alt="pokemon-image" />
        </>
      )}

      <audio controls src={pokemonInfo?.cries.latest} />

      <label htmlFor="">Pokemon Name:</label>
      <input
        type="text"
        onChange={handleInput}
      />
    </div>
  );
}
