import { Component } from 'react';

class Recipe extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <img className="onionImg" src={this.props.image_url} alt="" />
      </div>
    );
  }
}

export default Recipe;
