import React from 'react';
import { Button } from '@mui/material';

interface SearchButtonProps {
  onClick: () => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  return (
    <Button 
      variant="contained" 
      onClick={onClick}
      sx={{ 
        padding: '10px 20px', 
        borderRadius: '0.5rem',
        marginTop: '1rem',
        background: '#003366'
      }}
    >
      Search
    </Button>
  );
};

export default SearchButton;
