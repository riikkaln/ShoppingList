import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button'; // Import Button

const RecipeList = ({ recipes, addToShoppingList }) => {
  // Alustetaan tila resepteille
  const [recipeList, setRecipeList] = useState(recipes);

  // Poistetaan resepti ja päivitetään localStorage
  const removeRecipe = (index) => {
    const updatedRecipes = recipeList.filter((_, idx) => idx !== index);
    setRecipeList(updatedRecipes); // Päivitetään tila
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes)); // Tallennetaan localStorageen
  };

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipeList));
  }, [recipeList]);

  return (
    <div className="recipe-list">
      {recipeList.length === 0 ? (
        <p>Ei tallennettuja reseptejä.</p>
      ) : (
        recipeList.map((recipe, index) => (
          <div key={index} className="recipe">
            <h3>{recipe.name}</h3>
            <p><strong>Ohjeet:</strong> {recipe.instructions}</p>
            <ul>
              {recipe.ingredients.map((ingredient, idx) => (
                <li key={idx}>
                  {ingredient}{' '}
                  <Button
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
                      marginTop: '5px',
                      fontFamily: "'Source Code Pro', monospace",
                    }}
                    onClick={() => addToShoppingList(ingredient)}
                  >
                    Lisää ostoslistaan
                  </Button>
                </li>
              ))}
            </ul>
            {/* Poisto-painike reseptille */}
            <Button
              variant="contained"
              color="secondary"
              sx={{
                backgroundColor: 'red',
                '&:hover': {
                  backgroundColor: '#b71c1c',
                },
                fontSize: '16px',
                borderRadius: '30px',
                textTransform: 'none',
                marginTop: '10px',
                fontFamily: "'Source Code Pro', monospace",
              }}
              onClick={() => removeRecipe(index)}
            >
              Poista resepti
            </Button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
