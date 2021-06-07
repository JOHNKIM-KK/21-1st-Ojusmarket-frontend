import React from 'react';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className="header-container">
        <div className="header__menu">
          <div className="header-sub__menu">
            <ul>
              <li>
                <a href="#">마이페이지</a>
              </li>
              <li>
                <a href="#">고객센터</a>
              </li>
            </ul>
          </div>
          <div className="header-main__menu">
            <ul>
              <li>
                <a href="#">로그인</a>
              </li>
              <li>
                <a href="#">회원가입</a>
              </li>
              <li>
                <a href="#">베스트후기</a>
              </li>
              <li>
                <a href="#">주문/배송조회</a>
              </li>
              <li>
                <a href="#">장바구니</a>
              </li>
            </ul>
          </div>
        </div>
        <h1 className="logo">로고 주세요</h1>
        <div className="search-container">
          <form action="#" className="search-box">
            <input type="text" placeholder="바른 먹거리를 찾으세요?" />
            <button className="search-button">
              <i className="fas fa-search fa-lg"></i>
            </button>
          </form>
        </div>
      </header>
    );
  }
}

export default Header;
