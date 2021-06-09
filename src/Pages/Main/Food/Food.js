import React from 'react';
import FoodContent from './FoodContent';
import './Food.scss';

class Food extends React.Component {
  render() {
    return (
      <div className="food-component">
        <div className="food-category">
          <ul>
            <li>
              <button>반찬/요리</button>
            </li>
            <li>
              <button>샐러드/간편식</button>
            </li>
            <li>
              <button>청과</button>
            </li>
            <li>
              <button>농산물</button>
            </li>
            <li>
              <button>수산물</button>
            </li>
            <li>
              <button>축산물</button>
            </li>
            <li>
              <button>간식/과자</button>
            </li>
            <li>
              <button>신선식품</button>
            </li>
            <li>
              <button>건강음료</button>
            </li>
            <li>
              <button>생활리빙</button>
            </li>
          </ul>
        </div>
        <div className="food-header">
          <p>시간은 없고 마트 가야할 때?</p>
          <span>원하는 시간에 우리집에 쏙~</span>
        </div>
        <div className="food-wrap">
          <FoodContent />
          <FoodContent />
          <FoodContent />
          <FoodContent />
          <FoodContent />
          <FoodContent />
          <FoodContent />
        </div>
      </div>
    );
  }
}

export default Food;
