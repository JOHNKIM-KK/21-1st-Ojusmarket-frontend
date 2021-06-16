import React from 'react';
import './Payment.scss';

class Payment extends React.Component {
  render() {
    return (
      <div className="payment">
        <div className="payment-container">
          <div className="payment-header">
            <span className="payment-header__name">주문완료</span>
            <div>
              <span>01 장바구니</span>
              <span>&gt; 02 배송정보</span>
              <span>&gt; 03 주문결제</span>
              <span className="location">&gt; 04 주문완료</span>
            </div>
          </div>

          <div className="payment-service">
            <div className="payment-message">
              <p>구매해 주셔서 감사합니다!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Payment;
