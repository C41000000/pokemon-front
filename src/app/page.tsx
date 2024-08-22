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
          
            "name": "Pikachu",
            "sprites": {
              "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            },
            "moves": [
              {
                "move": {
                  "name": "Thunder Shock",
                  "effect_entries": [
                    {
                      "short_effect": "Has a 10% chance to paralyze the target."
                    }
                  ]
                }
              },
              {
                "move": {
                  "name": "Quick Attack",
                  "effect_entries": [
                    {
                      "short_effect": "This move always goes first."
                    }
                  ]
                }
              },
              {
                "move": {
                  "name": "Iron Tail",
                  "effect_entries": [
                    {
                      "short_effect": "Has a 30% chance to lower the target's Defense by 1 stage."
                    }
                  ]
                }
              },
              {
                "move": {
                  "name": "Electro Ball",
                  "effect_entries": [
                    {
                      "short_effect": "The faster the user compared to the target, the greater the move's power."
                    }
                  ]
                }
              },
              {
                "move": {
                  "name": "Thunderbolt",
                  "effect_entries": [
                    {
                      "short_effect": "Has a 10% chance to paralyze the target."
                    }
                  ]
                }
              }
            ]
          },
          {
          
            "name": "Pikachu",
            "sprites": {
              "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            },
            "moves": [
              {
                "move": {
                  "name": "Thunder Shock",
                  "effect_entries": [
                    {
                      "short_effect": "Has a 10% chance to paralyze the target."
                    }
                  ]
                }
              },
              {
                "move": {
                  "name": "Quick Attack",
                  "effect_entries": [
                    {
                      "short_effect": "This move always goes first."
                    }
                  ]
                }
              },
              {
                "move": {
                  "name": "Iron Tail",
                  "effect_entries": [
                    {
                      "short_effect": "Has a 30% chance to lower the target's Defense by 1 stage."
                    }
                  ]
                }
              },
              {
                "move": {
                  "name": "Electro Ball",
                  "effect_entries": [
                    {
                      "short_effect": "The faster the user compared to the target, the greater the move's power."
                    }
                  ]
                }
              },
              {
                "move": {
                  "name": "Thunderbolt",
                  "effect_entries": [
                    {
                      "short_effect": "Has a 10% chance to paralyze the target."
                    }
                  ]
                }
              }
            ]
          },
          {
          
            "name": "Pikachu",
            "sprites": {
              "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            },
            "moves": [
              {
                "move": {
                  "name": "Thunder Shock",
                  "effect_entries": [
                    {
                      "short_effect": "Has a 10% chance to paralyze the target."
                    }
                  ]
                }
              },
              {
                "move": {
                  "name": "Quick Attack",
                  "effect_entries": [
                    {
                      "short_effect": "This move always goes first."
                    }
                  ]
                }
              },
              {
                "move": {
                  "name": "Iron Tail",
                  "effect_entries": [
                    {
                      "short_effect": "Has a 30% chance to lower the target's Defense by 1 stage."
                    }
                  ]
                }
              },
              {
                "move": {
                  "name": "Electro Ball",
                  "effect_entries": [
                    {
                      "short_effect": "The faster the user compared to the target, the greater the move's power."
                    }
                  ]
                }
              },
              {
                "move": {
                  "name": "Thunderbolt",
                  "effect_entries": [
                    {
                      "short_effect": "Has a 10% chance to paralyze the target."
                    }
                  ]
                }
              }
            ]
          },
          {
          
            "name": "Pikachu",
            "sprites": {
              "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            },
            "moves": [
              {
                "move": {
                  "name": "Thunder Shock",
                  "effect_entries": [
                    {
                      "short_effect": "Has a 10% chance to paralyze the target."
                    }
                  ]
                }
              },
              {
                "move": {
                  "name": "Quick Attack",
                  "effect_entries": [
                    {
                      "short_effect": "This move always goes first."
                    }
                  ]
                }
              },
              {
                "move": {
                  "name": "Iron Tail",
                  "effect_entries": [
                    {
                      "short_effect": "Has a 30% chance to lower the target's Defense by 1 stage."
                    }
                  ]
                }
              },
              {
                "move": {
                  "name": "Electro Ball",
                  "effect_entries": [
                    {
                      "short_effect": "The faster the user compared to the target, the greater the move's power."
                    }
                  ]
                }
              },
              {
                "move": {
                  "name": "Thunderbolt",
                  "effect_entries": [
                    {
                      "short_effect": "Has a 10% chance to paralyze the target."
                    }
                  ]
                }
              }
            ]
          },
                  {
          
            "name": "Pikachu",
            "sprites": {
              "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            },
            "moves": [
              {
                "move": {
                  "name": "Thunder Shock",
                  "effect_entries": [
                    {
                      "short_effect": "Has a 10% chance to paralyze the target."
                    }
                  ]
                }
              },
              {
                "move": {
                  "name": "Quick Attack",
                  "effect_entries": [
                    {
                      "short_effect": "This move always goes first."
                    }
                  ]
                }
              },
              {
                "move": {
                  "name": "Iron Tail",
                  "effect_entries": [
                    {
                      "short_effect": "Has a 30% chance to lower the target's Defense by 1 stage."
                    }
                  ]
                }
              },
              {
                "move": {
                  "name": "Electro Ball",
                  "effect_entries": [
                    {
                      "short_effect": "The faster the user compared to the target, the greater the move's power."
                    }
                  ]
                }
              },
              {
                "move": {
                  "name": "Thunderbolt",
                  "effect_entries": [
                    {
                      "short_effect": "Has a 10% chance to paralyze the target."
                    }
                  ]
                }
              }
            ]
          }
      ];
      let test = fetch('http://0.0.0.0:9501/pokemon/list')

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
