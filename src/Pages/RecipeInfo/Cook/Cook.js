import { Component } from 'react';
import './Cook.scss';

class Cook extends Component {
  render() {
    const { recipeData } = this.props;
    return (
      <div>
        <div className="foodName">
          <h2>{recipeData.name}</h2>
        </div>
        <div className="recipeImgBox">
          <img
            className="onionImg"
            src={recipeData.image_url}
            alt="제품이미지"
          />
        </div>
      </div>
    );
  }
}

export default Cook;
