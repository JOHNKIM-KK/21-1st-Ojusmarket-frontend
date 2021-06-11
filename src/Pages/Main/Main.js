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
      changeTap: 0,
      productList: [],
      productSortList: [],
      recipeList: [],
      recipeSortList: [],
      storageLabel: '',
      slideImgList: [],
    };
  }

  handleTap = id => {
    this.setState({
      changeTap: id,
    });
  };

  componentDidMount() {
    fetch('http://10.58.6.155:8000/ingredient/main')
      .then(res => res.json())
      .then(data => {
        this.setState({
          productList: data.ingredient,
          productSortList: data.ingredient,
          recipeList: data.recipe,
          recipeSortList: data.recipe,
        });
      });

    fetch('/data/SlideData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          slideImgList: data.slideImg,
        });
      });
  }

  filterFoodCategory = name => {
    const categoryItems = this.state.productSortList.filter(items => {
      return items.category_id.toString().includes(name);
    });

    this.setState({
      productList: categoryItems,
    });
  };

  filterRecipeCategory = name => {
    const categoryItems = this.state.recipeSortList.filter(items => {
      return items.category_id.toString().includes(name);
    });

    this.setState({
      recipeList: categoryItems,
    });
  };

  render() {
    const tab = {
      0: (
        <Food
          productList={this.state.productList}
          storageLabel={this.state.storageLabel}
          filterFoodCategory={this.filterFoodCategory}
        />
      ),
      1: (
        <Recipe
          recipeList={this.state.recipeList}
          filterRecipeCategory={this.filterRecipeCategory}
        />
      ),
    };
    return (
      <>
        <Header />
        <div className="main">
          <Slider slideImgList={this.state.slideImgList} />
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
            <div>{tab[this.state.changeTap]}</div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Main;
