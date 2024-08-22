
import React from 'react';

interface SearchButtonProps {
  onClick: () => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  return (
    <button 
        onClick={onClick} 
        style={{ 
            padding: '10px 20px', 
            cursor: 'pointer', 
            background: '#3c99c8',
            color: 'white',
            borderRadius: '0.5rem',
            border: '1px solid',
            marginTop: '1rem'
        }}>
      Buscar Pokemons
    </button>
  );
};

export default SearchButton;
