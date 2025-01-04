import React from 'react';

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
              <button onClick={() => removeFromShoppingList(item)}>Poista</button>
            </li>
          ))}
        </ul>
      )}
      {shoppingList.length > 0 && (
        <button onClick={clearShoppingList}>Tyhjennä ostoslista</button>
      )}
    </div>
  );
};

export default ShoppingListPage;
