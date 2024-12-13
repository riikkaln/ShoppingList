import RecipeForm from '../components/RecipeForm';
import styled from 'styled-components';

const H1 = styled.h1`
padding: 20px;
`

const HomePage = () => {
  return (
    <div>
      <H1>Etusivu</H1>
      <RecipeForm />
    </div>
  );
};

export default HomePage;