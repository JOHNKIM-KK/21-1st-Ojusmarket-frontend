import React from 'react';
import Header from '../../Component/HeaderComponent/Header';
import Slider from './slider/Slider';
import Food from './Food/Food';
import Recipe from './Recipe/Recipe';
import Footer from '../../Component/FooterComponent/Footer';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      isChangeTap: 0,
      isProductList: [],
      // isRecipeList: [],
      storageLabel: '',
    };
  }

  handleTap = id => {
    this.setState({
      isChangeTap: id,
    });
  };

  componentDidMount() {
    fetch('http://10.58.6.155:8000/ingredient')
      .then(res => res.json())
      .then(data => {
        this.setState({
          isProductList: data.result,
          // isRecipeList: data.result.recipe,
        });
      });
  }

  render() {
    const tab = {
      0: (
        <Food
          isProductList={this.state.isProductList}
          storageLabel={this.state.storageLabel}
        />
      ),
      1: <Recipe isRecipeList={this.state.isRecipeList} />,
    };
    return (
      <>
        <Header />
        <div className="main">
          <Slider />
          <div>
            <div className="product-container">
              <div className="product-selection">
                <div>
                  <button onClick={() => this.handleTap(0)}>주문도하고</button>
                </div>
                <div>
                  <button onClick={() => this.handleTap(1)}>요리도 하고</button>
                </div>
              </div>
            </div>
            <div>{tab[this.state.isChangeTap]}</div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Main;
