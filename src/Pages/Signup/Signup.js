import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return (
      <body>
        <div className="contentsAll">
          <div className="img"></div>
          <article>
            <div className="head">
              <header>오아시스 회원가입</header>
              <span className="descrip">설명란</span>
            </div>
            <form>
              <div className="inputBoxId">
                <input id="id" type="text" placeholder="아이디" />
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
                <input className="name" placeholder="이름" />
              </div>
            </form>
          </article>
        </div>
      </body>
    );
  }
}
export default Signup;
