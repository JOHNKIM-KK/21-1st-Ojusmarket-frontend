import React, { Component } from 'react';
import Header from '../../Component/HeaderComponent/Header';
import Footer from '../../Component/FooterComponent/Footer';
import DaumPostCode from 'react-daum-postcode';
import './Signup.scss';
import '../../Styles/Common.scss';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identity: '',
      // isAvailedId: '',
      // idChecked: false,
      // disabled: true,
      background: '#d2f7d2',
      password: '',
      rePassword: '',
      isAvailedPassword: '',
      name: '',
      phone: '',
      // isAvailedPhone: '',
      email: '',
      // isAvailedEmail: '',
      address: '',
      // zoneCode: '',
      firstAddress: '',
      secondAddress: '',
      isDaumPost: false,
    };
  }

  //id 요휴성검사
  idCheck = e => {
    this.setState({ identity: e.target.value });
  };

  //id 중복체크
  checkDuplicateId = e => {
    console.log('a');
    e.preventDefault();
    fetch('http://10.58.2.234:8000/user/id-check', {
      method: 'POST',
      body: JSON.stringify({
        identity: this.state.identity,
      }),
    })
      .then(response => response.json())

      .then(result => {
        console.log('결과: ', result);
        if (result.message === 'SUCCESS') {
          alert('사용 가능한 아이디 입니다.');
        } else if (result.message === 'IDENTITY_ALREADY_EXISTS') {
          alert('이미 존재하는 아이디 입니다.');
          this.setState({ identity: '' });
        }
      });
  };

  //pw 유효성검사 (알림창띄우기)
  pwCheck = e => {
    const pwreg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,18}/g;
    let userPw = e.target.value;
    this.setState({ password: e.target.value });

    if (false === pwreg.test(userPw)) {
      alert('다시 입력해주세요. (대소문자,숫자,특수문자 모두 포함 8~18자)');
    }
  };
  //pw 중복체크
  handleConfirmPassword = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        const { password, rePassword } = this.state;

        let isAvailedPassword = '';

        if (e.target.value) {
          isAvailedPassword =
            password === rePassword ? '' : '비밀번호가 일치하지 않습니다.';
        }

        this.setState({ isAvailedPassword });
      }
    );
  };

  //name ,address, phone value값 지정 ,  phone  검사
  handleInputChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        if (e.target.name === 'phone') {
          this.PhoneCheck();

          return;
        } else if (e.target.name === 'secondAddress') {
          this.setState({
            address: this.state.firstAddress + this.state.secondAddress,
          });
        }
      }
    );
  };

  PhoneCheck = () => {
    const phonereg = /^\d{3}\d{3,4}\d{4}$/;
    let userPhone = this.state.phone;
    this.setState({ phone: userPhone });

    if (false === phonereg.test(userPhone)) {
      this.setState({ isAvailedPhone: '휴대폰번호 10~11자리 입력해주세요' });
    } else {
      this.setState({ isAvailedPhone: '' });
    }
  };

  //email 형식 검사
  emailCheck = e => {
    const emailreg =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    let userEmail = e.target.value;
    this.setState({ email: e.target.value });

    if (false === emailreg.test(userEmail)) {
      this.setState({ isAvailedEmail: '올바른 이메일 형식이 아닙니다.' });
    } else {
      this.setState({ isAvailedEmail: '' });
    }
  };

  //주소
  handleOpenPost = () => {
    this.setState({
      isDaumPost: true,
    });
  };
  // daum api 불러오기
  handleAddress = data => {
    let allAddress = data.address;
    let extraAddress = '';
    // let zoneCodes = data.zonecode;
    if (data.addressType === 'R') {
      if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        //공동주택제한일 경우 if안에  && data.apartment === 'Y' 추가
        extraAddress +=
          extraAddress !== '' ? ', ' + data.buildingName : data.buildingName;
        // extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      allAddress += extraAddress !== '' ? `(${extraAddress})` : ''; //템플릿 리터럴 표현
    }
    this.setState({
      firstAddress: allAddress,
    });
  };

  //회원가입버튼
  signUpSummit = e => {
    e.preventDefault();
    if (this.state.identity === '') {
      alert('아이디를 입력해주세요');
    } else if (this.state.password === '') {
      alert('비밀번호를 입력해주세요');
    } else if (this.state.name === '') {
      alert('이름을 입력해주세요');
    } else if (this.state.phone === '') {
      alert('휴대폰 번호를 입력해주세요');
    } else if (this.state.email === '') {
      alert('이메일을 입력해주세요');
    } else if (this.state.address === '') {
      alert('주소를 입력해주세요');
    } else {
      this.clickSignup();
    }
  };

  //백엔드 통신
  clickSignup = e => {
    e.preventDefault();
    fetch('http://10.58.2.234:8000/user/sign-up', {
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
        console.log('결과: ', result);
        if (result.message === 'SUCCESS') {
          alert('가입을 축하드립니다.');
          this.props.history.push('/login');
        } else if (result.message === 'IDENTITY_ALREADY_EXISTS') {
          this.setState({ isAvailedId: '입력값을 확인해주세요' });
        }
      });
  };

  render() {
    // const { isModalOpen, isModalClose } = this.props;
    const { isDaumPost, firstAddress } = this.state; //identity, password, name, phone, email, address,
    // 주소창 style
    const width = 600;
    const height = 450;
    const modalStyle = {
      position: 'absolute',
      zIndex: '100',
      border: '1px solid #333333',
    };
    //id체크
    const idreg = /^[a-z0-9]{5,15}/g;
    const isIdValid = idreg.test(this.state.identity);
    // validateId(this.state.identity); // true / false 을 반환한다.

    return (
      <div>
        <nav className="navi">
          <Header />
        </nav>
        {/* <div className={isIdValid ? 'active' : 'inactive'} /> */}
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
                  style={{ backgroundColor: isIdValid ? '#6ca437' : '#d2f7d2' }}
                  disabled={!isIdValid}
                  onClick={this.checkDuplicateId}
                >
                  중복체크
                </button>
              </div>

              {!isIdValid ? (
                <p className="errMsg">아이디 형식이 올바르지 않습니다.</p>
              ) : (
                <p className="errMsg"></p>
              )}

              <div className="inputBox_Pw">
                <input
                  id="password"
                  name="password"
                  onBlur={this.pwCheck}
                  onChange={this.handleConfirmPassword}
                  type="password"
                  placeholder="비밀번호 (8~18 자, 대소문자 숫자 특수문자 모두 포함)"
                />

                <input
                  id="rePassword"
                  name="rePassword"
                  onChange={this.handleConfirmPassword}
                  type="password"
                  placeholder="비밀번호확인"
                />
                <p className="errMsg">{this.state.isAvailedPassword}</p>
              </div>
              <div className="member_Info">
                <input
                  className="name"
                  name="name"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="이름"
                />
                <input
                  className="phone"
                  name="phone"
                  onChange={this.handleInputChange}
                  type="number"
                  placeholder="휴대폰번호 (-제외 숫자만입력)"
                />
                <p className="errMsg">{this.state.isAvailedPhone}</p>
                <input
                  className="email"
                  name="email"
                  onChange={this.emailCheck}
                  type="text"
                  placeholder="이메일"
                />
                <p className="errMsg">{this.state.isAvailedEmail}</p>
              </div>
              <div className="addressBox">
                <div className="cellFirst">
                  <input
                    placeholder="주소"
                    className="main_Address"
                    value={firstAddress}
                  />
                  <button
                    className="btn-serch"
                    type="button"
                    onClick={this.handleOpenPost}
                  >
                    주소 찾기
                  </button>
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
                </div>

                <div className="spec_Address">
                  <input
                    type="text"
                    name="secondAddress"
                    placeholder="상세주소"
                    className="second_Address"
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>

              <div className="finish">
                <button className="summit" onClick={this.signUpSummit}>
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

        <Footer />
      </div>
    );
  }
}
export default Signup;
