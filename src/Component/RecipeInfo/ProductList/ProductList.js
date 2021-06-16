import { Component } from 'react';

class ProductList extends Component {
  render() {
    return (
      <div>
        <img className="onionImg" src={this.props.image_url} alt="" />

        <h3>{this.props.name}</h3>
        <span> {Math.floor(this.props.price).toLocaleString()}원</span>
      </div>
    );
  }
}

export default ProductList;
