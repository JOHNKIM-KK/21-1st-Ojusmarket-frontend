import React from 'react';
import Header from '../FooterComponent/Footer';
import Footer from '../HeaderComponent/Header';
import RecipeList from './RecipeList/RecipeList';
import ProductList from './ProductList/ProductList';
import './RecipeInfo.scss';

class RecipeInfo extends React.Component {
  constructor() {
    super();
    this.state = { recipeData: {} };
  }

  componentDidMount() {
    fetch('/data/recipeData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({ recipeData: res });
      });
  }

  render() {
    return (
      <>
        <div className="recipeInfo">
          <Footer />
          <article>
            <div className="foodName">
              <RecipeList recipeData={this.state.recipeData} />
            </div>

            <p>관련제품</p>
            <div className="relatedProduct">
              <ProductList recipeData={this.state.recipeData} />
            </div>
            <div className="btnBox">
              <button className="goBasket">관련제품 장바구니</button>
              <button onclick={this.goList} className="goList">
                목록보기
              </button>
            </div>
          </article>
          <Header />
        </div>
      </>
    );
  }
}
export default RecipeInfo;
