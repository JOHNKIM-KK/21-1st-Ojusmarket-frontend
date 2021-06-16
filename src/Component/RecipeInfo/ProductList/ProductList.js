import { Component } from 'react';
import Product from '../Product/Product';
class ProductList extends Component {
  render() {
    return (
      <div>
        {/* {this.props.recipeData.related_ingredients.map(recipe => {
          return (
            <Product id={recipe.id} name={recipe.name} email={recipe.email} />
          );
        })} */}
      </div>
    );
  }
}

export default ProductList;
