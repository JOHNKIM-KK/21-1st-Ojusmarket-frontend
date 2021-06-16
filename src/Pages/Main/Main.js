import React from 'react';
import { GET_PRODUCT_API } from '../../Utill/config';
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
      storageLabel: '',
      slideImgList: [],
    };
  }

  handleTap = event => {
    console.log('탭 바꿈');
    this.props.history.push(`/${event.target.value}`);
  };

  componentDidUpdate(prevProps, _) {
    if (prevProps.match.params.category !== this.props.match.params.category)
      fetch(`${GET_PRODUCT_API}/${this.props.match.params.category}`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            productList: data,
          });
        });

    if (prevProps.location.search !== this.props.location.search)
      fetch(
        `${GET_PRODUCT_API}/${this.props.match.params.category}${this.props.location.search}`
      )
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({
            productList: data,
          });
        });
  }
  componentDidMount() {
    const path = this.props.match.params.category || 'ingredients';
    fetch(`${GET_PRODUCT_API}/${path}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productList: data,
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

  filterFoodCategory = e => {
    const query = `category_id=${e.target.value}`;
    this.props.history.push(`/${this.props.match.params.category}?${query}`);
  };

  filterRecipeCategory = e => {
    const query = `category_id=${e.target.value}`;
    this.props.history.push(`/recipes?${query}`);
  };

  render() {
    console.log('렌더 발생');
    console.log(this.state.productList);
    const { productList } = this.state;

    return (
      <>
        <Header />
        <div className="main">
          <Slider slideImgList={this.state.slideImgList} />
          <div>
            <div className="product-container">
              <div className="product-selection">
                <div>
                  <button value={'ingredients'} onClick={this.handleTap}>
                    주문도하고
                  </button>
                </div>
                <div>
                  <button value={'recipes'} onClick={this.handleTap}>
                    요리도 하고
                  </button>
                </div>
              </div>
            </div>
            <div>
              {productList.ingredients && (
                <Food
                  productList={this.state.productList}
                  storageLabel={this.state.storageLabel}
                  filterFoodCategory={this.filterFoodCategory}
                />
              )}
              {productList.recipes && (
                <Recipe
                  recipeList={this.state.productList}
                  filterRecipeCategory={this.filterRecipeCategory}
                />
              )}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Main;
