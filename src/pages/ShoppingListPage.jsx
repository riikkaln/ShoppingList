import React from 'react';
import Button from '@mui/material/Button'; // Tuodaan Button MUI:sta

const ShoppingListPage = ({ shoppingList, removeFromShoppingList, clearShoppingList }) => {
  return (
    <div>
      <h2>Ostoslista</h2>
      {shoppingList.length === 0 ? (
        <p>Ostoslista on tyhjä.</p>
      ) : (
        <ul>
          {shoppingList.map((item, index) => (
            <li key={index}>
              {item}{' '}
              {/* Poista ainesosat ostoslistalta */}
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
                  marginLeft: '10px', // Lisää tilaa poisto-painikkeen ja ainesosan väliin
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
            marginTop: '20px', // Lisää hieman tilaa tyhjentämispainikkeen ympärille
          }}
          onClick={clearShoppingList}
        >
          Tyhjennä ostoslista
        </Button>
      )}
    </div>
  );
};

export default ShoppingListPage;
