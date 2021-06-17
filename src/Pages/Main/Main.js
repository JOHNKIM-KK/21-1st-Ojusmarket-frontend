import React from 'react';
import { GET_PRODUCT_API } from '../../Utill/config';
import { withRouter } from 'react-router-dom';
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
    fetch(`http://10.58.3.10:8000/ingredients`)
      .then(res => {
        if (res.status !== 200)
          return alert(
            `페이지를 불러오지 못했습니다. 에러코드 : ${res.status}`
          );
        return res.json();
      })
      .then(data => {
        this.setState({
          productList: data.ingredients,
          productSortList: data.ingredients,
          recipeList: data.recipe,
          recipeSortList: data.recipe,
        });
      });

    fetch('/Data/SlideData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          slideImgList: data.slideImg,
        });
      });
  }

  filterFoodCategory = e => {
    const categoryItems = this.state.productSortList.filter(items => {
      return items.category_id.toString().includes(e.target.value);
    });

    this.setState({
      productList: categoryItems,
    });
  };

  filterRecipeCategory = e => {
    const categoryItems = this.state.recipeSortList.filter(items => {
      return items.category_id.toString().includes(e.target.value);
    });

    this.setState({
      recipeList: categoryItems,
    });
  };

  render() {
    const tab = {
      0: (
        <Food
          productSortList={this.state.productSortList}
          productList={this.state.productList}
          storageLabel={this.state.storageLabel}
          filterFoodCategory={this.filterFoodCategory}
          matchId={this.props.match.params}
        />
      ),
      1: (
        <Recipe
          recipeSortList={this.state.recipeSortList}
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
