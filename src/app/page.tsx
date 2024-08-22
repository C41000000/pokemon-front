'use client';
import React, { useState } from 'react';
import SearchButton from './searchButton';
import PokemonCard from './pokemonCard';


const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);

  const fetchPokemons = async () => {
    try {
      const response = [
        {
          name: 'Pikachu',
          moves: [{ move: { name: 'Thunderbolt' } }, { move: { name: 'Quick Attack' } }, { move: { name: 'Iron Tail' } }, { move: { name: 'Electro Ball' } }],
          sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png' }
        },
        {
          name: 'Charmander',
          moves: [{ move: { name: 'Flamethrower' } }, { move: { name: 'Scratch' } }, { move: { name: 'Growl' } }, { move: { name: 'Ember' } }],
          sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png' }
        },
        {
          name: 'Charmander',
          moves: [{ move: { name: 'Flamethrower' } }, { move: { name: 'Scratch' } }, { move: { name: 'Growl' } }, { move: { name: 'Ember' } }],
          sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png' }
        },
        {
          name: 'Charmander',
          moves: [{ move: { name: 'Flamethrower',  effect_entries: {effect: 'inflicts fire damaga'}  } }, { move: { name: 'Scratch',  } }, { move: { name: 'Growl' } }, { move: { name: 'Ember' } }],
          sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png' }
        },
        {
          name: 'Charmander',
          moves: [{ move: { name: 'Flamethrower' } }, { move: { name: 'Scratch', effect_entries: {effect: 'inflicts fire damaga'} } }, { move: { name: 'Growl' } }, { move: { name: 'Ember' } }],
          sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png' }
        }
      ];

      setPokemons(response);
    } catch (error) {
      console.error('Erro ao buscar Pokémons:', error);
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      
    }}>
      <div 
        style={{ 
          textAlign: 'center', 
          marginTop: '2rem', 
          background: '#f3f3f5', 
          minHeight: '70vh',
          maxWidth: '50vw',
          borderRadius: '1rem'
        }}>
        <SearchButton onClick={fetchPokemons} />
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap',   
            width: '50vw',
          }}>
          {pokemons.map((pokemon, index) => (
            <PokemonCard key={index} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
