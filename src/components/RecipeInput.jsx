import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const StyledRecipeForm = styled.div`
  background-color: beige;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
`;

const H2 = styled.h2`
  margin: 0px auto 20px auto;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  height: 100px;
`;

const RecipeInput = ({ addRecipe }) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  // Tämä hook lataa reseptit localStorage:sta sivun latautuessa
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    savedRecipes.forEach((recipe) => addRecipe(recipe));
  }, [addRecipe]);

  const handleAddRecipe = () => {
    if (name && ingredients && instructions) {
      const ingredientArray = ingredients.split(',').map((item) => item.trim());
      const newRecipe = { name, ingredients: ingredientArray, instructions };

      // Lisää resepti App-komponenttiin ja tallentaa localStorageen
      addRecipe(newRecipe);

      const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
      savedRecipes.push(newRecipe);
      localStorage.setItem('recipes', JSON.stringify(savedRecipes));

      // Tyhjennetään lomake
      setName('');
      setIngredients('');
      setInstructions('');
    }
  };

  return (
    <StyledRecipeForm>
      <H2>Syötä resepti</H2>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Reseptin nimi"
      />
      <Input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ainekset (pilkulla eroteltuna)"
      />
      <Textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        placeholder="Kirjoita valmistusohjeet tähän"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: '#235633',
          '&:hover': {
            backgroundColor: '#235633',
          },
          fontSize: '16px',
          borderRadius: '30px',
          textTransform: 'none',
        }}
        onClick={handleAddRecipe}
      >
        Tallenna resepti
      </Button>
    </StyledRecipeForm>
  );
};

export default RecipeInput;
