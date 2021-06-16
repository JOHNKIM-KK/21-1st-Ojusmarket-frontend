import { Component } from 'react';

class Recipe extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>{this.props.name}</h2>
        </div>

        <div className="recipeImgBox">
          <img className="onionImg" src={this.props.image_url} alt="/" />
        </div>
      </div>
    );
  }
}

export default Recipe;
