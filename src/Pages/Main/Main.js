import React from 'react';
import Header from '../../Component/HeaderComponent/Header';
import Footer from '../../Component/FooterComponent/Footer';
import Delivery from '../Delivery/Delivery';

class Main extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Delivery />
        <Footer />
      </>
    );
  }
}

export default Main;
