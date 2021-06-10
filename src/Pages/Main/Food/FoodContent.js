import React from 'react';

class FoodContent extends React.Component {
  componentDidMount() {}

  render() {
    const labelColor = {
      냉장: '#686de0',
      냉동: '#7ed6df',
      실온: '#f0932b',
      싱싱: '#badc58',
    };
    const { ingredients } = this.props;
    const labelName = ingredients.storage;
    console.log(ingredients);
    return (
      <div className="food">
        <img alt="제품사진" src={ingredients.image_url} />
        <div
          className="storage-label"
          style={{ backgroundColor: labelColor[labelName] }}
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
            <span className="discount">43%</span>
            <span>{ingredients.price}원</span>
          </p>
        </div>
      </div>
    );
  }
}
export default FoodContent;
