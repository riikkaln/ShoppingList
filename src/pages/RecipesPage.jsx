import SavedRecipes from '../components/SavedRecipes';
import styled from 'styled-components';

const RecipesPage = () => {
  return (
    <div>
      <h1>Reseptit</h1>
      <p>Hallinnoi reseptejäsi täällä.</p>
      <SavedRecipes />
    </div>
  );
};

export default RecipesPage;
