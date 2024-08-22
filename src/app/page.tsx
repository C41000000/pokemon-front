'use client';
import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Box, Typography, CircularProgress  } from '@mui/material';
import SearchButton from './searchButton';
import PokemonCard from './pokemonCard';

const App: React.FC = () => {

  const [pokemons, setPokemons] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchPokemons = async () => {
    try {
      setIsLoading(true)
      let response = await fetch('http://localhost:9501/api/v1/pokemon/list');
      
      if(response.ok){
        let data = await response.json()
        setPokemons(data.list);
      }
    } catch (error:any) {
      setError(error.message)
    }
    finally{
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []); //

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          paddingBottom: '50px',
        }}
      >
        <Box 
          sx={{ 
            backgroundColor: '#003366',
            height: '50px', 
            width: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1200,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Typography variant="h6" sx={{ color: '#ffffff' }}>
            <img width='40rem' src='./pokeball.png'></img>
          </Typography>
        </Box>
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
              boxShadow: 'none',
              backgroundColor: 'transparent',

            }}>
            <Box textAlign="center">
              <SearchButton onClick={fetchPokemons} />
            </Box>

            { isLoading?(
              <Box display="flex" justifyContent="center" alignItems="center" minHeight="70vh">
                <CircularProgress />
              </Box>              
              ): error ? (
              <Typography color="error">Error: {error}</Typography>
              ):(
                  <Grid container spacing={2} justifyContent="center" sx={{marginTop: '1rem'}}>
                    {pokemons.map((pokemon, index) => (
                      <Grid item key={index}>
                        <PokemonCard pokemon={pokemon} />
                      </Grid>
                    ))}
                </Grid>
              )
            }

          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default App;
