import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

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
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  backgroundColor: '#d32f2f',
                  '&:hover': {
                    backgroundColor: '#b71c1c',
                  },
                  fontSize: '14px',
                  borderRadius: '30px',
                  textTransform: 'none',
                  marginLeft: '10px',
                  fontFamily: "'Source Code Pro', monospace", // Lisää tilaa poisto-painikkeen ja ainesosan väliin
                }}
                onClick={() => removeFromShoppingList(item)}
              >
                Poista
              </Button>
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
