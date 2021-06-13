import React from 'react';
import './Delivery.scss';

class Delivery extends React.Component {
  constructor() {
    super();
    this.state = {
      UserName: '',
      UserPhone: '',
    };
  }
  render() {
    return (
      <div className="delivery">
        <div className="delivery-container">
          <div className="delivery-header">
            <span className="delivery-header__name">배송정보</span>
            <div>
              <span>01 장바구니</span>
              <span>&gt; 02 배송정보</span>
              <span>&gt; 03 주문결제</span>
              <span>&gt; 04 주문완료</span>
            </div>
          </div>

          <div className="head-line">
            <span>&#42;주문자 정보</span>
          </div>
          <div className="user-info-container">
            <div>
              <label htmlFor="orderUserName">보내시는 분</label>
              <input id="orderUserName" name="orderUserName"></input>
            </div>
            <div>
              <label htmlFor="orderUserPhone">연락처</label>
              <input id="orderUserPhone" name="orderUserPhone"></input>
            </div>
          </div>

          <div className="head-line">
            <span>&#42;배송지 주소</span>
          </div>
          <div className="address">
            <div className="address-selection">
              <div>
                <label for="basic">
                  <input type="radio" id="basic" name="address" checked></input>
                  <span className="checkmark"></span>
                </label>
              </div>
              <div>
                <input type="radio" id="new" name="address"></input>
                <label for="new">직접입력</label>
              </div>
            </div>
            <div className="address-info">
              <div className="user-info">
                <input></input>
                <input></input>
              </div>
              <div className="address-input">
                <div className="address-zip">
                  <input></input>
                  <button>주소찾기</button>
                </div>
                <div className="detailed-address">
                  <input></input>
                  <input></input>
                  <span>
                    배송을 위해 고객님의 주소가 맞는지 다시한번 확인해주세요
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Delivery;
