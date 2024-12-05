import { useState } from 'react';
import styled from 'styled-components';
import Button from ‘@mui/material/Button’;

const StyledRecipeForm = styled.div`
background-color: beige;
`

const RecipeForm = () => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  // Lomakkeen lähetyksen käsittelijä
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reseptin tiedot tallennetaan localStorageen
    const newRecipe = {
      name: recipeName,
      ingredients,
      instructions,
    };

    const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    savedRecipes.push(newRecipe);
    localStorage.setItem('recipes', JSON.stringify(savedRecipes));

    // Tyhjennetään lomake
    setRecipeName('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <StyledRecipeForm>
      <h2>Lisää uusi resepti</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="recipeName">Reseptin nimi:</label>
          <input
            type="text"
            id="recipeName"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="ingredients">Ainesosat:</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="instructions">Ohjeet:</label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          />
        </div>

        <button type="submit">Tallenna resepti</button>
      </form>
      </Button>
    </StyledRecipeForm>
  );
};

export default RecipeForm;