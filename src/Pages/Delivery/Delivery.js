import React from 'react';
import BasicInfo from './BasicInfo';
import CreateInfo from './CreateInfo';
import './Delivery.scss';

class Delivery extends React.Component {
  constructor() {
    super();
    this.state = {
      changeInfo: 0,
      userName: '',
      userPhone: '',
      userAddress: '',
      reciverName: '',
      reciverPhone: '',
      reciverAddress: '',
    };
  }

  handleTap = id => {
    this.setState({
      changeInfo: id,
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    fetch('/data/userData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          userName: data.userName,
          userPhone: data.userPhone,
          userAddress: data.userAddress,
        });
      });
  }

  render() {
    const tab = {
      0: (
        <BasicInfo
          userName={this.state.userName}
          userPhone={this.state.userPhone}
          userAddress={this.state.userAddress}
        />
      ),
      1: <CreateInfo />,
    };
    return (
      <div className="delivery">
        <div className="delivery-container">
          <div className="delivery-header">
            <span className="delivery-header__name">배송정보</span>
            <div>
              <span>01 장바구니</span>
              <span className="location">&gt; 02 배송정보</span>
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
              <input
                id="userName"
                name="userName"
                value={this.state.userName}
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label htmlFor="orderUserPhone">연락처</label>
              <input
                id="userPhone"
                name="userPhone"
                value={this.state.userPhone}
                onChange={this.handleChange}
              ></input>
            </div>
          </div>

          <div className="head-line">
            <span>&#42;배송지 주소</span>
          </div>
          <div className="address">
            <div className="address-selection">
              <div onClick={() => this.handleTap(0)}>
                <span>기본 배송지</span>
              </div>
              <div onClick={() => this.handleTap(1)}>
                <span>직접입력</span>
              </div>
            </div>
            <div>{tab[this.state.changeInfo]}</div>
            <div className="head-line">
              <span>&#42;배송방법 선택</span>
            </div>
            <div className="delivery-type">
              <label>
                <input type="radio" checked></input>
                <span>오져스배송 주문하기</span>
              </label>
            </div>
            <div className="head-line">
              <span>&#42;포장방법 선택</span>
            </div>
            <div className="choose-package">
              <div className="package-header">
                <span>
                  포장 하나도 자연에 가깝게! 풀무원생수를 얼려 아이스팩으로
                  사용합니다.
                </span>
              </div>
              <div className="package-option">
                <label>
                  <input type="radio" name="package"></input>
                  <span>최소포장 ( 생수와 포장재를 최소한으로 사용 )</span>
                </label>
                <label>
                  <input type="radio" name="package"></input>
                  <span>친환경 포장 (생수와 드라이아이스를 조금 사용)</span>
                </label>
                <label>
                  <input type="radio" name="package"></input>
                  <span>보냉재 더 추가 포장 (보냉재를 넉넉히 사용)</span>
                </label>
              </div>
            </div>
            <div className="package-recall">
              <h4>
                포장재 회수 요청
                <span>
                  &nbsp;(택배의 경우 택배사 사정으로 인하여 포장재를 회수하지
                  않습니다.)
                </span>
              </h4>
              <p>
                택배의 경우 택배사 사정으로 인하여 포장재를 회수하지 않습니다.
              </p>
              <div className="corona-notice">
                <div className="notice-header">
                  <div className="notice-image">
                    <i class="fas fa-bullhorn"></i>
                  </div>
                  <h5>알려드립니다.</h5>
                </div>
                <div className="notice-contents">
                  <p>
                    코로나 19 상황이 장기화됨에 따라 고객 여러분의 안전과 예방을
                    위해 재활용 박스 회수 서비스를 잠정 중단하게 되었으니
                    <br></br>
                    <br></br> 많은 양해 바랍니다.
                  </p>
                  <p>박스는 재활용이 가능하니 종이류로 배출하시면 됩니다.</p>
                </div>
              </div>
            </div>
            <div className="submit">
              <button>주문서 작성 완료</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Delivery;
