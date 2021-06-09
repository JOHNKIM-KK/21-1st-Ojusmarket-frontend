import React from 'react';
import './ProductInfo.scss';

class ProductInfo extends React.Component {
  render() {
    return (
      <div className="contents-container">
        <div className="img-container">
          <span>
            <a href="#">홈</a>
            {'>'}
            <a href="#">오감동</a>
            {'>'}
            <a href="#">청과</a>
          </span>
          <div className="image">암튼 무야호</div>
        </div>
        <div className="info-container">
          <div className="text-title">
            <h1>유기농 무야호</h1>
          </div>
          <div className="text-contents">
            <div className="price">
              <span className="price-text">일반가</span>
              <span className="price-number">3,800원</span>
            </div>
            <div className="info-box">
              <div className="delivery">
                <span>배송비</span>
                <span>3,000원</span>
              </div>
              <div className="storage">
                <span>보관방법</span>
                <span>씽씽</span>
              </div>
            </div>
          </div>
          <div className="product-feature__box">
            <span>상품특징</span>
            <span>바나나로 키워 부드럽고 달콤한 근데 이제 마크업을 곁들인</span>
          </div>
          <div className="product-counter">
            <span className="buy-counter">구매수량</span>
            <div className="count-button">
              <div className="button-container">
                <button className="minus">-</button>
                <span className="counter">1</span>
                <button className="plus">+</button>
              </div>
              <div className="total-price">
                <span>3800</span>
                <span>원</span>
              </div>
            </div>
          </div>
          <div className="btn-area">
            <button>장바구니</button>
            <button>바로구매</button>
            <button>
              <i class="far fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductInfo;
