import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../Component/HeaderComponent/Header';
import Footer from '../../Component/FooterComponent/Footer';

import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identity: '',
      password: '',
      background: '#d2f7d2',
      disabled: true,
      idChecked: false,
      pwChecked: false,
      isAvailedInfo: '',
    };
  }
  //로그인 버튼활성화
  // handleInputId = e => {
  //   this.setState({ identity: e.target.value });
  //   e.target.value.length > 4
  //     ? this.setState({ idChecked: true }, () => this.btnChangeColor())
  //     : this.setState({ idChecked: false }, () => this.btnChangeColor());
  // };

  // handleInputPw = e => {
  //   this.setState({ password: e.target.value });
  //   e.target.value.length > 7
  //     ? this.setState({ password: e.target.value, pwChecked: true }, () =>
  //         this.btnChangeColor()
  //       )
  //     : this.setState({ pwChecked: false }, () => this.btnChangeColor());
  // };
  handleInput = e => {
    // input에 작성한 값
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  colorChange = () => {
    if (this.state.identity.length > 4 && this.state.password.length > 4) {
      this.setState({
        background: '#6ca437',
        disabled: false,
      });
    } else {
      this.setState({
        background: '#d2f7d2',
        disabled: true,
      });
    }
  };
  // if(validation = 'true')

  // btnChangeColor = () => {
  //   this.state.idChecked && this.state.pwChecked
  //     ? this.setState({ background: '#6ca437', disabled: false })
  //     : this.setState({ background: '#d2f7d2', disabled: true });
  // };
  //버튼 이벤트 (백엔드 통신)
  goToMain = () => {
    fetch('http://10.58.7.179:8000/user/sign-in', {
      method: 'POST',
      body: JSON.stringify({
        identity: this.state.identity,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log('결과: ', result);
        //객체속 acess_token 값이 주어지면 로그인성공으로 페이지 이동
        if (result.acess_token) {
          alert('로그인 성공');
          this.props.history.push('/main');
        }
      });
  };
  //회원가입 버튼 링크
  goToSignUp = () => {
    this.props.history.push('/signup');
  };
  render() {
    let validation =
      this.state.identity.length > 4 && this.state.password.length > 4;
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
                      <input
                        id="id"
                        onChange={this.handleInput}
                        onKeyUp={this.colorChange}
                        name="identity"
                        type="text"
                        placeholder="아이디"
                      />
                    </div>
                    <div className="input_box">
                      <input
                        id="password"
                        onChange={this.handleInput}
                        onKeyUp={this.colorChange}
                        name="password"
                        type="password"
                        placeholder="비밀번호"
                      />
                    </div>
                    <div className="button_box">
                      <button
                        style={{ backgroundColor: this.state.background }}
                        disabled={this.state.disabled}
                        onClick={this.goToMain}
                        type="button"
                        className="btn"
                      >
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
