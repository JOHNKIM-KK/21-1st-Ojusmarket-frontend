import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../Component/HeaderComponent/Header';
import Footer from '../../Component/FooterComponent/Footer';

import './Login.scss';

class Login extends Component {
  goToSignUp = () => {
    this.props.history.push('/signup');
  };
  render() {
    return (
      <div>
        <nav className="navi">
          <Header />
        </nav>
        <div className="backgroundImg">
          <body>
            <div className="Login">
              <div className="container">
                <div className="inner">
                  <header className="header">
                    <h1>오아시스 로그인</h1>
                  </header>

                  <form className="form">
                    <div className="input_box">
                      <input id="id" type="text" placeholder="아이디" />
                    </div>
                    <div className="input_box">
                      <input
                        id="password"
                        type="password"
                        placeholder="비밀번호"
                      />
                    </div>
                    <div className="button_box">
                      <button type="button" className="btn">
                        <span>로그인</span>
                      </button>
                    </div>
                    <div className="sign_up">
                      <button
                        type="button"
                        className="btn_sign"
                        onClick={this.goToSignUp}
                      >
                        <span>가입하기</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </body>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
export default withRouter(Login);
