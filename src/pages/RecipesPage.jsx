import React from 'react';
import RecipeList from '../components/RecipeList';
import styled from 'styled-components';

const RecipeContainer = styled.div`
  padding: 20px;
  background-color: beige;
  border-radius: 10px;
  margin: 20px;
`;

const H1 = styled.h1`
  color: black;
  font-size: 32px;
  margin: 0px auto 20px auto;
`;

const RecipesPage = ({ recipes, addToShoppingList, removeRecipe }) => {
  return (
    <RecipeContainer>
      <H1>Reseptit</H1>
      <RecipeList recipes={recipes} addToShoppingList={addToShoppingList} removeRecipe={removeRecipe} />
    </RecipeContainer>
  );
};

export default RecipesPage;
