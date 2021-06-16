import { Component } from 'react';
import './Cook.scss';

class Cook extends Component {
  render() {
    return (
      <div>
        <div className="foodName">
          <h2>{this.props.name}</h2>
        </div>

        <div className="recipeImgBox">
          <img
            className="onionImg"
            src={this.props.image_url}
            alt="제품이미지"
          />
        </div>
      </div>
    );
  }
}

export default Cook;
