import React from 'react';
import RecipeInput from '../components/RecipeInput';

const HomePage = ({ addRecipe }) => {
  return (
    <div>
      <h1>Etusivu</h1>
      <RecipeInput addRecipe={addRecipe} />
    </div>
  );
};

export default HomePage;
