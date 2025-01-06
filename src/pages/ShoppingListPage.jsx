import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const H1 = styled.h1`
  color: black;
  font-size: 32px;
  margin: 0px auto 20px auto;
`;

const StyledRecipeForm = styled.div`
  background-color: beige;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
`;

const ShoppingListPage = ({ shoppingList, removeFromShoppingList, clearShoppingList }) => {
  return (
    <StyledRecipeForm>
      <H1>Ostoslista</H1>
      {shoppingList.length === 0 ? (
        <p>Ostoslista on tyhjä.</p>
      ) : (
        <ul>
          {shoppingList.map((item, index) => (
            <li key={index}>
              {item}{' '}
              <IconButton
                aria-label="poista"
                size="small"
                sx={{
                  '&:hover': {
                  backgroundColor: '#',
                },
                fontSize: '15px',
                borderRadius: '50%',
                marginLeft: '0px',
                fontFamily: "'Source Code Pro', monospace",
             }}
            onClick={() => removeFromShoppingList(item)}
          >
            <DeleteIcon fontSize="small" sx={{ color: 'black' }} />
          </IconButton>
            </li>
          ))}
        </ul>
      )}

      {shoppingList.length > 0 && (
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: '#235633',
            '&:hover': {
              backgroundColor: '#1d4d29',
            },
            fontSize: '16px',
            borderRadius: '30px',
            textTransform: 'none',
            marginTop: '20px',
            fontFamily: "'Source Code Pro', monospace",
          }}
          onClick={clearShoppingList}
        >
          Tyhjennä ostoslista
        </Button>
      )}
    </StyledRecipeForm>
  );
};

export default ShoppingListPage;
