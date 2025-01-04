import React from 'react';

const RecipeList = ({ recipes, addToShoppingList }) => {
  return (
    <div className="recipe-list">
      <h2>Reseptit</h2>
      {recipes.length === 0 ? (
        <p>Ei reseptejä.</p>
      ) : (
        recipes.map((recipe, index) => (
          <div key={index} className="recipe">
            <h3>{recipe.name}</h3>
            <p><strong>Ohjeet:</strong> {recipe.instructions}</p>
            <ul>
              {recipe.ingredients.map((ingredient, idx) => (
                <li key={idx}>
                  {ingredient}{' '}
                  <button onClick={() => addToShoppingList(ingredient)}>
                    Lisää ostoslistaan
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
