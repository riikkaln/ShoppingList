import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin: 20px;
`;

const ListItem = styled.div`
  margin: 10px 0;
  padding: 5px;
  background-color: #f1f1f1;
  border-radius: 5px;
`;

const ShoppingList = ({ shoppingList }) => {
  return (
    <ListContainer>
      <h2>Ostoslista</h2>
      {shoppingList.length > 0 ? (
        shoppingList.map((ingredient, index) => (
          <ListItem key={index}>
            {ingredient}
          </ListItem>
        ))
      ) : (
        <p>Ostoslista on tyhjä. Lisää resepteistä aineksia!</p>
      )}
    </ListContainer>
  );
};

export default ShoppingList;
