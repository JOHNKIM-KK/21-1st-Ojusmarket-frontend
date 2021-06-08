import React, { Component } from 'react';
import './Signup.scss';

class Signup extends Component {
  render() {
    return (
      <div className="contentsAll">
        <div className="img">
          <img className="adImg" alt="광고사진" src="/images/logo512.png" />
        </div>
        <article>
          <div className="head">
            <header>오아시스 회원 가입</header>
            <span className="descrip">
              세상을 바꾸겠다는 거창한 철학보다는 한 사람의 작은 바람을 담은
              소비가 가족을 행복하게 하고, 행복한 가족이 모여 행복한 사회를 만들
              수 있다는 단순하고 소박한 가치를 실천합니다.
            </span>
          </div>
          <form className="singup">
            <div className="inputBoxId">
              <input
                id="identity"
                type="text"
                placeholder="아이디(7~12 자 , 영문 숫자 조합)"
              />
              <button className="btnId">중복체크</button>
            </div>
            <div className="inputBoxPw">
              <input
                id="password"
                type="password"
                placeholder="비밀번호 (영문 또는 숫자조합)"
              />
              <input
                id="rePassword"
                type="password"
                placeholder="비밀번호확인"
              />
            </div>
            <div className="memberInfo">
              <input className="name" type="text" placeholder="이름" />
              <input className="phone" type="text" placeholder="휴대폰번호" />
              <input className="email" type="text" placeholder="이메일" />
            </div>
            <div className="address">
              <div className="btnAddress">
                <input
                  className="basicAddress"
                  type="text"
                  placeholder="기본주소"
                />
                <button className="btnSerch">검색</button>
              </div>
              <input
                className="detailedAddress"
                type="text"
                placeholder="상세주소"
              />
            </div>
            <div className="finish">
              <button className="summit">가입하기</button>
            </div>
            <div className="rule">
              본인은 만 14세 이상이며{' '}
              <span class="look">
                오아시스 장보기 회원약관 오아시스 개인정보보호 정책 오아시스
                전자금융거래약관
              </span>
              의 내용을 확인하였으며, 동의합니다.
            </div>
          </form>
        </article>
      </div>
    );
  }
}
export default Signup;
