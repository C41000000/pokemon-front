
import React from 'react';

interface Ability {
  ability: {
    name: string;
  };
}

interface Move {
  move: {
    name: string;
  };
}

interface Sprite {
  front_default: string;
}

interface Pokemon {
  name: string;
  moves: Move[];
  sprites: Sprite;
}

const PokemonCard: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  return (
    <div 
        style={{ 
            border: '1px solid #ccc', 
            padding: '16px', 
            margin: '16px', 
            width: '17rem', 
            background: 'white',
            borderRadius: '1rem'
        }}>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ width: '100px', height: '100px' }} />
      <h3>Movimentos:</h3>
      <ul style={{listStyle: 'none'}}>
        {pokemon.moves.slice(0, 5).map((move, index) => (
          <li key={index}>{move.move.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonCard;
