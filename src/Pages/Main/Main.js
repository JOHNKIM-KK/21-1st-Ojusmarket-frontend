import React from 'react';
import Header from '../../Component/HeaderComponent/Header';
import CartList from '../CartList/CartList';

class Main extends React.Component {
  render() {
    return (
      <>
        <Header />
        <CartList />
      </>
    );
  }
}

export default Main;
