import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <body>
        <div className="login">
          <article>
            <form className="loginBox">
              <header>오아이스 로그인</header>
              <div className="inputBox">
                <input id="id" type="text" placeholder="아이디" />
              </div>
              <div className="inputBox">
                <input id="password" type="password" placeholder="비밀번호" />
              </div>
              <div className="buttonBox">
                <button className="btnLogin" type="button">
                  <span>로그인</span>
                </button>
              </div>

              <button>가입하기 </button>
            </form>
          </article>
        </div>
      </body>
    );
  }
}
export default Login;
