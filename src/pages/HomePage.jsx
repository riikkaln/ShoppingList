import React from 'react';
import styled from 'styled-components';
import RecipeInput from '../components/RecipeInput';

const H1 = styled.h1`
  margin: 0px auto 20px auto;
`;

const HomePage = ({ addRecipe }) => {
  return (
    <div>
      <H1>Pidä reseptisi tallessa :)</H1>
      <RecipeInput addRecipe={addRecipe} />
    </div>
  );
};

export default HomePage;
