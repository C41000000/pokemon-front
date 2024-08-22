'use client';
import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import SearchButton from './searchButton';
import PokemonCard from './pokemonCard';

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);

  const fetchPokemons = async () => {
    try {
      const response = [
        {
          name: "Pikachu",
          sprites: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          },
          moves: [
            {
              move: {
                name: "Thunder Shock",
                effect_entries: [
                  {
                    short_effect: "Has a 10% chance to paralyze the target."
                  }
                ]
              }
            },
          ]
        },
        {
          name: "Pikachu",
          sprites: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          },
          moves: [
            {
              move: {
                name: "Thunder Shock",
                effect_entries: [
                  {
                    short_effect: "Has a 10% chance to paralyze the target."
                  }
                ]
              }
            },
          ]
        },
        {
          name: "Pikachu",
          sprites: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          },
          moves: [
            {
              move: {
                name: "Thunder Shock",
                effect_entries: [
                  {
                    short_effect: "Has a 10% chance to paralyze the target."
                  }
                ]
              }
            },
          ]
        },
        {
          name: "Pikachu",
          sprites: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          },
          moves: [
            {
              move: {
                name: "Thunder Shock",
                effect_entries: [
                  {
                    short_effect: "Has a 10% chance to paralyze the target."
                  }
                ]
              }
            },
            {
              move: {
                name: "Thunder Shock",
                effect_entries: [
                  {
                    short_effect: "Has a 10% chance to paralyze the target."
                  }
                ]
              }
            },
            {
              move: {
                name: "Thunder Shock",
                effect_entries: [
                  {
                    short_effect: "Has a 10% chance to paralyze the target."
                  }
                ]
              }
            },
          ]
        },
        {
          name: "Pikachu",
          sprites: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          },
          moves: [
            {
              move: {
                name: "Thunder Shock",
                effect_entries: [
                  {
                    short_effect: "Has a 10% chance to paralyze the target."
                  }
                ]
              }
            },
            {
              move: {
                name: "Thunder Shock",
                effect_entries: [
                  {
                    short_effect: "Has a 10% chance to paralyze the target."
                  }
                ]
              }
            },
            {
              move: {
                name: "Thunder Shock",
                effect_entries: [
                  {
                    short_effect: "Has a 10% chance to paralyze the target."
                  }
                ]
              }
            },
          ]
        },
        {
          name: "Pikachu",
          sprites: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          },
          moves: [
            {
              move: {
                name: "Thunder Shock",
                effect_entries: [
                  {
                    short_effect: "Has a 10% chance to paralyze the target."
                  }
                ]
              }
            },
            {
              move: {
                name: "Thunder Shock",
                effect_entries: [
                  {
                    short_effect: "Has a 10% chance to paralyze the target."
                  }
                ]
              }
            },
            {
              move: {
                name: "Thunder Shock",
                effect_entries: [
                  {
                    short_effect: "Has a 10% chance to paralyze the target."
                  }
                ]
              }
            },
          ]
        }
      ];
      // let test = await fetch('http://0.0.0.0:9501/pokemon/list');

      setPokemons(response);
    } catch (error) {
      console.error('Erro ao buscar Pokémons:', error);
    }
  };

  return (
    <Container>
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        minHeight="70vh"
        sx={{  borderRadius: '1rem', padding: '2rem' }}
      >
        <Paper elevation={3} 
          sx={{ padding: '2rem', 
            maxWidth: '90vw', 
            // minWidth: '60vw', 
            // minHeight: '90vh', 

          }}>
          <Box textAlign="center">
            <SearchButton onClick={fetchPokemons} />
          </Box>
          <Grid container spacing={2} justifyContent="center" sx={{marginTop: '1rem'}}>
            {pokemons.map((pokemon, index) => (
              <Grid item key={index}>
                <PokemonCard pokemon={pokemon} />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default App;
