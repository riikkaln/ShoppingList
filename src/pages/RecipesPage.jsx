import React from 'react';
import RecipeList from '../components/RecipeList';

const RecipesPage = ({ recipes, addToShoppingList }) => {
  return (
    <div>
      <h1>Reseptit</h1>
      <RecipeList recipes={recipes} addToShoppingList={addToShoppingList} />
    </div>
  );
};

export default RecipesPage;
