import React from 'react';

class RecipeContent extends React.Component {
  render() {
    const { recipe } = this.props;
    console.log(recipe.id);
    return (
      <div className="recipe">
        <img alt="요리사진" src={recipe.image_url} />
        <div className="recipe-name">
          <span>{recipe.name}</span>
        </div>
      </div>
    );
  }
}
export default RecipeContent;
