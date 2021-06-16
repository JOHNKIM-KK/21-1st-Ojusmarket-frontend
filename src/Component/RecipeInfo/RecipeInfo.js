import React from 'react';
import Header from '../FooterComponent/Footer';
import Footer from '../HeaderComponent/Header';
import RecipeList from './RecipeList/RecipeList';
import ProductList from './ProductList/ProductList';
import './RecipeInfo.scss';

class RecipeInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      recipeData: [],
    };
  }

  componentDidMount() {
    fetch('/recipe/recipeData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({ recipeData: res });
      });
  }

  render() {
    const recipeData = this.state;
    return (
      <>
        <div className="recipeInfo">
          <Footer />
          <article>
            <div className="foodName">
              {/* {recipeData.map(data => {
                return (
                  <RecipeList
                    key={data.id}
                    name={data.name}
                    image={data.image_url}
                  />
                );
              })} */}
            </div>
            <div className="recipeImgBox">
              <img
                src="/images/recipeImg.png"
                alt="레시피"
                className="recipeImg"
              />
            </div>
            <p>관련제품</p>
            <div className="relatedProduct">
              <ProductList recipeData={this.state.recipeData} />
            </div>
            <div className="btnBox">
              <button className="goBasket">관련제품 장바구니</button>
              <button className="goList">목록보기</button>
            </div>
          </article>
          <Header />
        </div>
      </>
    );
  }
}
export default RecipeInfo;
