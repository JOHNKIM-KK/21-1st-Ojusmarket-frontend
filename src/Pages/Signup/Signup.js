import React, { Component } from 'react';
import './Signup.scss';
import Header from '../../Component/HeaderComponent/Header';
import Footer from '../../Component/FooterComponent/Footer';
import DaumPostCode from 'react-daum-postcode';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identity: '',
      isAvailedId: '',
      idChecked: false,
      disabled: true,
      background: '#d2f7d2',
      password: '',
      isAvailedPassword: '',
      name: '',
      phone: '',
      email: '',
      address: '',
      zoneCode: '',
      fullAddress: '',
      isDaumPost: false,
    };
  }
  idCheck = e => {
    const idreg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])/;
    let userId = e.target.value;
    this.setState({ identity: e.target.value });

    if (false === idreg.test(userId)) {
      this.setState(
        { isAvailedId: '올바른 아이디 형식이 아닙니다.', idChecked: false },
        () => this.btnChangeColor()
      );
    } else {
      this.setState({ isAvailedId: '', idChecked: true }, () =>
        this.btnChangeColor()
      );
    }
  };
  btnChangeColor = () => {
    this.state.idChecked
      ? this.setState({ background: '#6ca437', disabled: false })
      : this.setState({ background: '#d2f7d2', disabled: true });
  };
  rightId = e => {
    e.preventDefault();

    fetch('http://10.58.0.179:8000/user/idCheck', {
      method: 'POST',
      body: JSON.stringify({
        identity: this.state.identity,
      }),
    })
      .then(response => response.json())

      .then(result => {
        console.log('결과: ', result);
        if (result.token) {
          this.props.history.push('/mainW');
        } else {
          this.setState({ isAvailedEmail: '이미 존재하는 아이디 입니다.' });
        }
      });
  };

  blur = e => {
    this.setState({ email: e.target.value });
    if (e.target.value.includes('@')) {
      this.setState({
        email: e.target.value,
      });
    } else {
      alert('잘못된 이메일 형식입니다.');
    }
  };

  clickSignup = e => {
    e.preventDefault();
    const { identity, password, name, birth_date, phone, email, usableId } =
      this.state;
  };
  clickSignup = e => {
    e.preventDefault();
    console.log(this.state.name);
    fetch('http://10.58.0.179:8000/user/signUp', {
      method: 'POST',
      body: JSON.stringify({
        identity: this.state.identity,
        password: this.state.password,
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        address: this.state.address,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.token) {
          this.props.history.push('/mainW');
        } else {
          this.setState({ isAvailedEmail: '이미 존재하는 아이디 입니다.' });
        }
      });
  };
  handleOpenPost = () => {
    this.setState({
      isDaumPost: true,
    });
  };

  // postcode
  handleAddress = data => {
    let AllAddress = data.address;
    let extraAddress = '';
    // let zoneCodes = data.zonecode;

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      AllAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    this.setState({
      fullAddress: AllAddress,
    });
  };
  render() {
    const { isModalShow, isModalClose } = this.props;
    const { name, phone, email, address, isDaumPost, fullAddress } = this.state;
    // DaumPostCode style
    const width = 505;
    const height = 420;
    // const position = 'absoulte';
    const modalStyle = {
      position: 'absolute',
      // top: 0,
      // left: '-178px',
      zIndex: '100',
      border: '1px solid #333333',
      // overflow: 'hidden',
    };
    return (
      <div>
        <nav className="navi">
          <Header />
        </nav>
        <div className="contents_All">
          <div className="img">
            <img src="/images/adlogo.png" alt="광고사진" className="a_Img" />
          </div>
          <article>
            <div className="head">
              <header>오아시스 회원 가입</header>
              <span className="descrip">
                세상을 바꾸겠다는 거창한 철학보다는 한 사람의 작은 바람을 담은
                소비가 가족을 행복하게 하고, 행복한 가족이 모여 행복한 사회를
                만들 수 있다는 단순하고 소박한 가치를 실천합니다.
              </span>
            </div>
            <form className="sing_up">
              <div className="inputBox_Id">
                <input
                  id="identity"
                  type="text"
                  name="identity"
                  onChange={this.idCheck}
                  placeholder="아이디 (7~12 자 , Only 영문 숫자 조합)"
                />
                <button
                  className="btnId"
                  style={{ backgroundColor: this.state.background }}
                  disabled={this.state.disabled}
                  onClick={this.rightId}
                >
                  중복체크
                </button>
              </div>
              <div className="errMsg">{this.state.isAvailedId}</div>
              <div className="inputBox_Pw">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="비밀번호 (8~18 자, 대소문자 숫자 특수문자 모두 포함)"
                />
                <div>{this.state.isAvailedPassword}</div>
                <input
                  id="rePassword"
                  type="password"
                  placeholder="비밀번호확인"
                />
              </div>
              <div className="member_Info">
                <input className="name" type="text" placeholder="이름" />
                <input
                  className="phone"
                  name="phone"
                  type="number"
                  placeholder="휴대폰번호 (-제외 숫자만입력)"
                />
                <input
                  className="email"
                  name="email"
                  onBlur={this.blur}
                  type="text"
                  placeholder="이메일"
                />
              </div>

              <div className="cellFirst">
                <input
                  placeholder="주소"
                  className="main_Address"
                  value={fullAddress}
                />
                <button
                  className="btn-serch"
                  type="button"
                  onClick={this.handleOpenPost}
                >
                  주소 찾기
                </button>
              </div>
              {isDaumPost && (
                <DaumPostCode
                  onComplete={this.handleAddress}
                  autoClose
                  width={width}
                  height={height}
                  style={modalStyle}
                  isDaumPost={isDaumPost}
                />
              )}

              <div className="addressBox">
                <input
                  type="text"
                  name="address"
                  placeholder="상세주소"
                  className="basic_Address"
                  onChange={this.handleInput}
                />
              </div>

              <div className="finish">
                <button className="summit" onClick={this.clickSignup}>
                  가입하기
                </button>
              </div>
              <div className="rule">
                본인은 만 14세 이상이며,
                <span className="look">
                  <u>오아시스 장보기 회원약관</u>
                  <u> 오아시스 개인정보보호 정책</u>
                  <u>오아시스 전자금융거래약관</u>
                </span>
                의 내용을 확인하였으며, 동의합니다.
              </div>
            </form>
          </article>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
export default Signup;
