import React from 'react';
import Header from '../../Component/HeaderComponent/Header';
import ProductInfo from '../ProductInfo/ProductInfo';
import { withRouter, Link } from 'react-router-dom';

class Main extends React.Component {
  state = {
    ingredient_id: 6,
  };

  goToDetail = () => {
    this.props.history.push(`/ingredients/${this.state.ingredient_id}`);
  };

  render() {
    return (
      <button id={this.state.id} onClick={this.goToDetail}>
        Go to Detail
      </button>
    );
  }
}

export default withRouter(Main);
