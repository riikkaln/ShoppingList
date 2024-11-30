import { useEffect, useState } from 'react';

const SavedRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  // Ladataan reseptit localStoragesta
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(savedRecipes);
  }, []);

  // Funktio reseptin poistamiseksi
  const handleDelete = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index); // Suodatetaan poistettava resepti pois
    setRecipes(updatedRecipes); // Päivitetään komponentin tila
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes)); // Tallennetaan uudet reseptit localStorageen
  };

  return (
    <div>
      <h2>Tallennetut reseptit</h2>
      {recipes.length === 0 ? (
        <p>Ei tallennettuja reseptejä.</p>
      ) : (
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>
              <h3>{recipe.name}</h3>
              <p><strong>Ainesosat:</strong> {recipe.ingredients}</p>
              <p><strong>Ohjeet:</strong> {recipe.instructions}</p>
              <button onClick={() => handleDelete(index)}>Poista resepti</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedRecipes;