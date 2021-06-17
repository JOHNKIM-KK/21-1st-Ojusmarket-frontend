import React from 'react';
import './CheckCart.scss';

class CheckCart extends React.Component {
  render() {
    return (
      <div className="check-cart">
        <div className="notice">
          <i class="fas fa-info-circle"></i>
          <p>
            배송방법에 따른 배송 불가 상품이 포함되어 있는 경우 해당 상품은 주문
            취소 될 수 있습니다.
          </p>
        </div>
        <div className="cart-container">
          <div className="cart-header">
            <span>오져스 배송</span>
            <span className="cart-header__info">
              &#42;새벽배송이나 주간배송으로 산지직송 상품을 주문하시는경우
              산지에서 별도로 직송합니다.
            </span>
          </div>
          <div className="cart-contants">
            <span className="cart-count">1</span>
            <img
              alt="상품사진"
              src="https://www.oasis.co.kr:48581/product/4886/thumb/thumb_4886118eea07-daa4-4d3f-a176-633f5ea44097.jpg"
            />
            <span className="cart-product-name">
              [한정특가]무농약 송이향버섯(200g)
            </span>
            <span className="cart-product-count">수량 8개</span>
            <span className="cart-product-price">
              <b>45,600</b>원
            </span>
          </div>

          <div className="cart-total-price">
            <p>
              상품금액<span>130,400</span>원 + 배송비<span>3000</span>원 =
              주문금액 <span>133,400</span>원
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default CheckCart;
