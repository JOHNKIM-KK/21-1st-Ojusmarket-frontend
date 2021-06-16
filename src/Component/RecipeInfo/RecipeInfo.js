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
    const { id } = this.props.match.params;
    fetch(`http://10.58.6.166:8000/recipes/${id}`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          recipeData: res,
        })
      );
  }

  // componentDidMount() {
  //   fetch('/Data/recipeData.json')
  //     .then(res => res.json())
  //     .then(result => {
  //       console.log('결과: ', result);
  //     });
  //   // .then(res => {
  //   //   this.setState({ recipeData: res });
  //   // });
  // }

  render() {
    const { recipeData } = this.state;
    return (
      <>
        <div className="recipeInfo">
          <Footer />
          <article>
            <div className="foodInfo">
              <RecipeList recipeData={recipeData} />
            </div>

            <p>관련제품</p>
            <div className="relatedProduct">
              {/* <ProductList recipeData={this.state.recipeData} /> */}
            </div>
            <div className="btnBox">
              <button className="goBasket">관련제품 장바구니</button>
              <button onClick={this.goList} className="goList">
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
