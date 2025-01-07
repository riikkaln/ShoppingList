import React from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const H3 = styled.h3`
  padding: 20px;
`;

const RecipeList = ({ recipes, addToShoppingList, removeRecipe }) => {
  return (
    <div className="recipe-list">
      {recipes.length === 0 ? (
        <p>Ei tallennettuja reseptejä.</p>
      ) : (
        recipes.map((recipe, index) => (
          <div key={index} className="recipe">
            <H3>{recipe.name}</H3>
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
