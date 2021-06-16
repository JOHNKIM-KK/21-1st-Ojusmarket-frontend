import { Component } from 'react';

class RecipeList extends Component {
  render() {
    const { name, image_url } = this.props;
    return (
      <div>
        <h3>{name}</h3>
        <img className="onionImg" src={image_url} alt="" />
      </div>
    );
  }
}

export default RecipeList;
