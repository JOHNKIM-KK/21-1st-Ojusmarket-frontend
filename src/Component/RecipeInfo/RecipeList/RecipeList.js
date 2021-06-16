import { Component } from 'react';
import Cook from '../Cook/Cook';

class RecipeList extends Component {
  render() {
    const { recipeData } = this.props;

    return (
      <div>
        <Cook name={recipeData.name} image_url={recipeData.image_url} />
      </div>
    );
  }
}

export default RecipeList;
