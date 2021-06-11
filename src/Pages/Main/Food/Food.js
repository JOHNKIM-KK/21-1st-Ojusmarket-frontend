import React from 'react';
import FoodContent from './FoodContent';
import './Food.scss';

class Food extends React.Component {
  render() {
    const { productList, storage, filterRecipeCategory } = this.props;
    return (
      <div className="food-component">
        <div className="food-category">
          <ul>
            <li>
              <button onClick={() => filterRecipeCategory('농산물')}>
                농산물
              </button>
            </li>
            <li>
              <button onClick={() => filterRecipeCategory('축산물')}>
                축산물
              </button>
            </li>
            <li>
              <button onClick={() => filterRecipeCategory('수산물')}>
                수산물
              </button>
            </li>
            <li>
              <button onClick={() => filterRecipeCategory('양념/면류')}>
                양념/면류
              </button>
            </li>
            <li>
              <button onClick={() => filterRecipeCategory('간식/유제품')}>
                간식/유제품
              </button>
            </li>
            <li>
              <button onClick={() => filterRecipeCategory('간편식품')}>
                간편식품
              </button>
            </li>
          </ul>
        </div>
        <div className="food-header">
          <p>식품</p>
          <span>원하는 시간에 우리집에 쏙~</span>
        </div>
        <div className="food-wrap">
          {productList.map(data => (
            <FoodContent key={data.id} ingredients={data} storage={storage} />
          ))}
        </div>
      </div>
    );
  }
}

export default Food;
