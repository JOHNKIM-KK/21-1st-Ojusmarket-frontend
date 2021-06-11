import React from 'react';

const label_color = {
  냉장: '#686de0',
  냉동: '#7ed6df',
  실온: '#f0932b',
  싱싱: '#badc58',
};

class FoodContent extends React.Component {
  render() {
    const { ingredients } = this.props;
    const labelName = ingredients.storage;
    return (
      <div className="food-content">
        <img alt="제품사진" src={ingredients.image_url} />
        <div
          className="storage-label"
          style={{ backgroundColor: label_color[labelName] }}
        >
          <span>{ingredients.storage}</span>
        </div>
        <div className="hover-btn">
          <button>
            <i className="fas fa-shopping-cart"></i>
          </button>
          <button>
            <i className="far fa-heart"></i>
          </button>
        </div>
        <div className="food-info">
          <h2>{ingredients.name}</h2>
          <p>
            <span className="discount">0%</span>
            <span>{Math.floor(ingredients.price).toLocaleString()}원</span>
          </p>
        </div>
      </div>
    );
  }
}
export default FoodContent;
