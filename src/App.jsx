import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShoppingListPage from './pages/ShoppingListPage';
import RecipesPage from './pages/RecipesPage';
import NavBar from './components/NavBar';

const App = () => {
  // Tilat resepteille ja ostoslistalle
  const [recipes, setRecipes] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);

  // Funktio reseptin lisäämiseen
  const addRecipe = (recipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, recipe]);
  };

  // Funktio ainesosan lisäämiseen ostoslistalle
  const addToShoppingList = (item) => {
    setShoppingList((prevList) => [...prevList, item]);
  };
  
    // Funktio ainesosan poistamiseen ostoslistalta
    const removeFromShoppingList = (itemToRemove) => {
      setShoppingList((prevList) => prevList.filter((item) => item !== itemToRemove));
    };
  
    // Funktio ostoslistan tyhjentämiseen
    const clearShoppingList = () => {
      setShoppingList([]);
    };

    const removeRecipe = (index) => {
      setRecipes((prevRecipes) => {
        const updatedRecipes = prevRecipes.filter((_, idx) => idx !== index);
        localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
        return updatedRecipes;
      });
    };

    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage addRecipe={addRecipe} />} />
          <Route
            path="/shopping-list"
            element={<ShoppingListPage shoppingList={shoppingList} removeFromShoppingList={removeFromShoppingList} clearShoppingList={clearShoppingList} />}
          />
          <Route
            path="/recipes"
            element={<RecipesPage recipes={recipes} addToShoppingList={addToShoppingList} removeRecipe={removeRecipe} />}
          />
        </Routes>
      </Router>
    );
  };
  
  export default App;