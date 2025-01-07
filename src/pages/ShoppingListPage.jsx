import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

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

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: ${({ isChecked }) => (isChecked ? 'line-through' : 'none')};
  color: ${({ isChecked }) => (isChecked ? '#888' : 'inherit')};
`;

const List = styled.ul`
  padding: 0px;
`;

const ShoppingListPage = ({ shoppingList, removeFromShoppingList, clearShoppingList }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  const toggleChecked = (item) => {
    setCheckedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <StyledRecipeForm>
      <H1>Ostoslista</H1>
      {shoppingList.length === 0 ? (
        <p>Ostoslista on tyhjä.</p>
      ) : (
        <List>
          {shoppingList.map((item, index) => (
            <ListItem key={index} isChecked={checkedItems.includes(item)}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedItems.includes(item)}
                    onChange={() => toggleChecked(item)}
                    sx={{ color: 'black', '&.Mui-checked': { color: '#235633' } }}
                  />
                }
                label={item}
              />
              <IconButton
                aria-label="poista"
                size="small"
                sx={{
                  backgroundColor: 'transparent',
                  '&:hover': {
                    backgroundColor: 'black',
                  },
                  '&:hover svg': {
                    color: 'white',
                  },
                }}
                onClick={() => removeFromShoppingList(item)}
              >
                <CloseIcon fontSize="small" sx={{ color: 'black' }} />
              </IconButton>
            </ListItem>
          ))}
        </List>
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
            fontFamily: 'Source Code Pro, monospace',
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
