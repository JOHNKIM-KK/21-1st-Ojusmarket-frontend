import React, { Component } from 'react';
import './Signup.scss';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identity: '',
      isAvailedId: '',
      password: '',
      isAvailedPassword: '',
      name: '',
      phone: '',
      email: '',
      address: '',
      idChecked: false,
      disabled: true,
      background: 'lightgray',
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
      : this.setState({ background: 'lightgray', disabled: true });
  };
  rightId = e => {
    e.preventDefault();
    console.log(this.state.identity);
    fetch('http://10.58.4.188:8000/user/idCheck', {
      method: 'POST',
      body: JSON.stringify({
        identity: this.state.identity,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
    // .then(response => response.json())
    // .then(result => {
    //   if (result.token) {
    //     this.props.history.push('/mainW');
    //   } else {
    //     this.setState({ isAvailedEmail: '이미 존재하는 아이디 입니다.' });
    //   }
    // });
  };

  // idCheck = e => {
  //   e.preventDefault();
  //   const { usableId } = this.state; // usableID state를 비구조화 할당!
  //   // ⬇︎은 백엔드로 fetch해서 입력된 값을 POST!
  //   fetch('http://10.58.6.197:8000/user/signUp  ', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ user_id: this.state.user_id }),
  //   }).then(response => {
  //     if (response.status === 200) {
  //       alert('사용 가능한 아이디 입니다.'); // 백엔드로 보낸 데이터 결과 200 일 경우
  //       this.setState({ usable_id: true }); //사용 가능한 아이디 일 경우 state상태에 true값으로 변경, 나중에 회원가입 버튼 클릭 이벤트핸들러에 필요!
  //     } else if (response.status === 409) {
  //       alert('이미 사용중인 아이디 입니다.'); // 이미 데이터베이스에 있는 아이디일 경우 409
  //     } else {
  //       // 그 외에는 사용 불가한 아이디
  //       alert('사용 불가한 아이디입니다.');
  //     }
  //   });
  // };

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

  // fetch('주소안줘?', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ identity: this.state.identity }),
  // }).then(response => {
  //   if (response.status === 200) {
  //     alert('사용 가능한 아이디 입니다.'); // 백엔드로 보낸 데이터 결과 200 일 경우
  //     this.setState({ usable_id: true }); //사용 가능한 아이디 일 경우 state상태에 true값으로 변경, 나중에 회원가입 버튼 클릭 이벤트핸들러에 필요!
  //   } else if (response.status === 409) {
  //     alert('이미 사용중인 아이디 입니다.'); // 이미 데이터베이스에 있는 아이디일 경우 409
  //   } else {
  //     // 그 외에는 사용 불가한 아이디
  //     alert('사용 불가한 아이디입니다.');
  //   }
  // });

  // inputId = e => {
  //   this.setState({
  //     identity: e.target.value,
  //   });
  // };
  // clickSignup = e => {
  //   e.preventDefault();
  //   const { identity, password, name, birth_date, phone, email, usableId } =
  //     this.state;
  // };
  // clickSignup = e => {
  //   e.preventDefault();
  //   console.log(this.state.name);
  //   fetch('http://10.58.62.248:8000/user/signUp', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       identity: this.state.identity,
  //       password: this.state.password,
  //       name: this.state.name,
  //       phone: this.state.phone,
  //       email: this.state.email,
  //       address: this.state.address,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       if (result.token) {
  //         this.props.history.push('/mainW');
  //       } else {
  //         this.setState({ isAvailedEmail: '이미 존재하는 아이디 입니다.' });
  //       }
  //     });
  // };

  render() {
    return (
      <div className="contents_All">
        <div className="img">
          <img src="/images/logo.png" alt="광고사진" className="a_Img" />
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
                // value={this.state.password}
                // onChange={inputId}
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
                // value={this.state.phone}
                // onChange={inputId}
                type="number"
                placeholder="휴대폰번호 (-제외 숫자만입력)"
              />
              <input
                className="email"
                name="email"
                // value={this.state.email}
                // onChange={inputId}
                onBlur={this.blur}
                type="text"
                placeholder="이메일"
              />
            </div>
            <div className="address">
              <div className="btn_Address">
                <input
                  className="basic_Address"
                  type="text"
                  placeholder="기본주소"
                />
                <button className="btn_Serch">검색</button>
              </div>
              <input
                className="detailed_Address"
                name="address"
                // value={this.state.address}
                // onChange={inputId}
                type="text"
                placeholder="상세주소"
              />
            </div>
            <div className="recommend">
              <input
                className="recom_Id"
                type="text"
                placeholder="추천인 아이디"
              />
              <img
                className="recom_Img"
                alt="추천인쿠폰"
                src="/images/recom.png"
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
    );
  }
}
export default Signup;
