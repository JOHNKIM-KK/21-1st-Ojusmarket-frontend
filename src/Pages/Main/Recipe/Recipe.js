import React from 'react';
import RecipeContent from './RecipeContent';
import './Recipe.scss';

class Recipe extends React.Component {
  render() {
    return (
      <div className="recipe-component">
        <div className="recipe-category">
          <ul>
            <li>
              <button>전체보기</button>
            </li>
            <li>
              <button>국/찌개/전골</button>
            </li>
            <li>
              <button>밥/죽</button>
            </li>
            <li>
              <button>반찬/김치</button>
            </li>
            <li>
              <button>일품요리</button>
            </li>
            <li>
              <button>간단요리</button>
            </li>
            <li>
              <button>면류/파스타</button>
            </li>
            <li>
              <button>간식/음료</button>
            </li>
            <li>
              <button>베이킹</button>
            </li>
          </ul>
        </div>
        <div className="recipe-wrap">
          <div className="recipe-header">
            <p>요리도 하고, 주문도 하고</p>
            <span>오져스 제품으로 즐길 수 있는 레시피</span>
          </div>
          <RecipeContent />
          <RecipeContent />
          <RecipeContent />
          <RecipeContent />
          <RecipeContent />
          <RecipeContent />
        </div>
      </div>
    );
  }
}
export default Recipe;
