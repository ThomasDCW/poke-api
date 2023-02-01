import Header from './components/Header';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Pokemon, Pokemons } from './types/Pokemon';
import Gallery from './components/Gallery';

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string>('');

  useEffect(() => {
    const getPokemons = async () => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
      );
      setNextUrl(res.data.next);

      res.data.results.forEach(async (pokemons: Pokemons) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemons.name}`
        );
        setPokemons((p) => [...p, poke.data]);
      });
    };
    getPokemons();
  }, []);

  const nextPage = async () => {
    let res = await axios.get(nextUrl);

    setNextUrl(res.data.next);

    res.data.results.forEach(async (pokemons: Pokemons) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemons.name}`
      );
      setPokemons((p) => [...p, poke.data]);
    });
  };

  return (
    <div className='App'>
      <Header />
      <Gallery pokemons={pokemons} />
      <div className='btn'>
        {' '}
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}

export default App;
