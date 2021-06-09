import React from 'react';

class RecipeContent extends React.Component {
  render() {
    return (
      <div className="recipe">
        <img
          alt="요리사진"
          src="https://www.oasis.co.kr:48580/content/d30c4f41-1040-472c-b2f3-2d9938a7a6af.jpg"
        />
        <div className="recipe-name">
          <span>애플시나몬 와플</span>
        </div>
      </div>
    );
  }
}
export default RecipeContent;
