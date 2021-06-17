import React from 'react';
import Header from '../../Component/FooterComponent/Footer';
import Footer from '../../Component/HeaderComponent/Header';
import RecipeList from './RecipeList/RecipeList';
import ProductList from './ProductList/ProductList';
import { withRouter } from 'react-router-dom';
import './RecipeInfo.scss';

class RecipeInfo extends React.Component {
  constructor() {
    super();
    this.state = { recipeData: {} };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://10.58.3.10:8000/recipes/${id}`)
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
      <>
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
      </>
    );
  }
}
export default withRouter(RecipeInfo);
