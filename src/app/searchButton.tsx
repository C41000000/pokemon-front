import React from 'react';
import { Button } from '@mui/material';

interface SearchButtonProps {
  onClick: () => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  return (
    <Button 
      variant="contained" 
      color="info" 
      onClick={onClick}
      sx={{ 
        padding: '10px 20px', 
        borderRadius: '0.5rem',
        marginTop: '1rem',
      }}
    >
      Search
    </Button>
  );
};

export default SearchButton;
