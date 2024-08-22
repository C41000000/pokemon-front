'use client';
import React, { useState } from 'react';
import { Container, Grid, Paper, Box } from '@mui/material';
import SearchButton from './searchButton';
import PokemonCard from './pokemonCard';

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);

  const fetchPokemons = async () => {
    try {

      let response = await fetch('http://localhost:9501/pokemon/list');
      
      if(response.ok){
        let data = await response.json()
        setPokemons(data.list);
      }
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
