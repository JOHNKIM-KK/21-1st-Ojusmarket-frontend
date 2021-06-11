import React from 'react';
import RecipeContent from './RecipeContent';
import './Recipe.scss';

class Recipe extends React.Component {
  render() {
    const { recipeList, filterRecipeCategory } = this.props;
    return (
      <div className="recipe-component">
        <div className="recipe-category">
          <ul>
            <li>
              <button>전체보기</button>
            </li>
            <li>
              <button onClick={() => filterRecipeCategory('국/찌개/전골')}>
                국/찌개/전골
              </button>
            </li>
            <li>
              <button onClick={() => filterRecipeCategory('반찬/김치')}>
                반찬/김치
              </button>
            </li>
            <li>
              <button onClick={() => filterRecipeCategory('면류/파스타')}>
                면류/파스타
              </button>
            </li>
            <li>
              <button onClick={() => filterRecipeCategory('베이킹')}>
                베이킹
              </button>
            </li>
          </ul>
        </div>
        <div className="recipe-wrap">
          <div className="recipe-header">
            <p>레시피</p>
            <span>오져스 제품으로 즐길 수 있는 레시피</span>
          </div>
          {recipeList.map(data => (
            <RecipeContent key={data.id} recipe={data} />
          ))}
        </div>
      </div>
    );
  }
}
export default Recipe;
