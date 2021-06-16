import { Component } from 'react';
import Recipe from '../Recipe/Recipe';
class RecipeList extends Component {
  render() {
    console.log(this.props.recipeData);
    const { recipeData } = this.props;

    return (
      <div>
        <div>
          <Recipe
            id={recipeData.id}
            name={recipeData.name}
            image_url={recipeData.image_url}
          />
        </div>
      </div>
    );
  }
}

export default RecipeList;
