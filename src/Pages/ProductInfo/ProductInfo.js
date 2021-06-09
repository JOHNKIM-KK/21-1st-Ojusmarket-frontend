import React from 'react';

class ProductInfo extends React.Component {
  render() {
    return (
      <>
        <div className="img-container">
          <span>
            <a href="#">홈</a>><a href="#">오감동</a>><a href="#">청과</a>
          </span>
          <div className="image"></div>
        </div>
        <div className="info-container"></div>
      </>
    );
  }
}

export default ProductInfo;
