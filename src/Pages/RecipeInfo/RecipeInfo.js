import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../Component/FooterComponent/Footer';
import Footer from '../../Component/HeaderComponent/Header';
import RecipeList from './RecipeList/RecipeList';
import ProductList from './ProductList/ProductList';
import { GET_RECIPE_INFO_API } from '../../Utill/config';
import './RecipeInfo.scss';

class RecipeInfo extends React.Component {
  constructor() {
    super();
    this.state = { recipeData: {} };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`${GET_RECIPE_INFO_API}/${id}`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          recipeData: res.recipe,
        })
      );
  }

  goList = () => {
    this.props.history.push('/main');
  };

  render() {
    const { recipeData } = this.state;
    return (
      <div className="recipeInfo">
        <Footer />
        <article>
          <div className="foodInfo">
            <RecipeList recipeData={recipeData} />
          </div>
          <p>관련제품</p>
          <div>
            <ProductList recipeData={recipeData} />
          </div>
          <div className="btnBox">
            <button onClick={this.goList} className="goList">
              목록보기
            </button>
          </div>
        </article>
        <Header />
      </div>
    );
  }
}
export default withRouter(RecipeInfo);
