import React from 'react';

interface EffectEntries {
  short_effect: string;
}

interface Move {
  move: {
    name: string;
    effect_entries: EffectEntries[];
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
            borderRadius: '1rem',
            minHeight: '35vh'
        }}>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ width: '100px', height: '100px' }} />
  
      <div 
        style={{
            fontSize: '14px',  
            fontWeight: 'unset',
            marginTop: '0.5rem'
        }}>
        <ul style={{listStyle: 'none'}}>
            {pokemon.moves.slice(0, 5).map((move, index) => (
            <li key={index}>
              <b>{move.move.name}</b>: {move.move.effect_entries[0]?.short_effect || 'Sem efeitos'}
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonCard;
