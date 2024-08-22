import React from 'react';
import { Card, CardContent, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

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
    <Card 
      sx={{ 
        width: 275, 
        margin: 2, 
        borderRadius: '1rem',
        boxShadow: 3,
        background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
        minHeight: '35vh',
        '&:hover': {
          transform: 'scale(1.05)',
          background: '#e0e0e0',
          cursor: 'pointer',
        },  
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {pokemon.name}
        </Typography>
        <Box display="flex" justifyContent="center" my={2}>
          <img 
            src={pokemon.sprites.front_default} 
            alt={pokemon.name} 
            style={{ width: '100px', height: '100px' }} 
          />
        </Box>
        <Typography variant="h6" component="div">
          Moves
        </Typography>
        <Box           
          sx={{
            padding: '1.5rem',
            overflow: 'auto', 
            maxHeight: '9rem' 
          }}   
        >
          <List>
            {pokemon.moves.slice(0, 5).map((move, index) => (
              <ListItem key={index} disablePadding>
                <ListItemText 
                  primary={<b>{move.move.name}</b>} 
                  secondary={move.move.effect_entries[0]?.short_effect || 'Sem efeitos'} 
                />
              </ListItem>
            ))}
          </List>
        </Box>

      </CardContent>
    </Card>
  );
};

export default PokemonCard;
