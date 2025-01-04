import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShoppingListPage from './pages/ShoppingListPage';
import RecipesPage from './pages/RecipesPage';
import NavBar from './components/NavBar';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);

  // Lataa reseptit localStorage:sta sivun alussa
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(savedRecipes);
  }, []);

  const addRecipe = (recipe) => {
    setRecipes((prevRecipes) => {
      const newRecipes = [...prevRecipes, recipe];
      localStorage.setItem('recipes', JSON.stringify(newRecipes)); // Päivitä localStorage
      return newRecipes;
    });
  };

  const addToShoppingList = (item) => {
    setShoppingList((prevList) => [...prevList, item]);
  };

  const removeFromShoppingList = (item) => {
    setShoppingList((prevList) => prevList.filter((i) => i !== item));
  };

  const clearShoppingList = () => {
    setShoppingList([]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage addRecipe={addRecipe} />} />
        <Route
          path="/shopping-list"
          element={
            <ShoppingListPage
              shoppingList={shoppingList}
              removeFromShoppingList={removeFromShoppingList}
              clearShoppingList={clearShoppingList}
            />
          }
        />
        <Route
          path="/recipes"
          element={<RecipesPage recipes={recipes} addToShoppingList={addToShoppingList} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
