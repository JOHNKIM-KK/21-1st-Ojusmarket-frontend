import React from 'react';
import Food from './Food/Food';
import Recipe from './Recipe/Recipe';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      isChangeTap: true,
      isTransform: 0,
      isTransition: '1s ease-in-out',
    };
  }

  nextBtn = () => {
    if (this.state.isTransform > -500) {
      this.setState({
        isTransform: this.state.isTransform - 100,
        isTransition: '1s ease-in-out',
      });
    } else {
      this.setState({
        isTransform: 0,
        isTransition: '0s',
      });
    }
  };

  prevBtn = () => {
    if (this.state.isTransform < 0) {
      this.setState({
        isTransform: this.state.isTransform + 100,
        isTransition: '1s ease-in-out',
      });
    } else {
      this.setState({
        isTransform: -500,
        isTransition: '0s',
      });
    }
  };

  handleTap = () => {
    this.setState({
      isChangeTap: !this.state.isChangeTap,
    });
  };

  componentDidMount() {
    setInterval(() => {
      if (this.state.isTransform > -500) {
        this.setState({
          isTransform: this.state.isTransform - 100,
          isTransition: '1s ease-in-out',
        });
      } else if (this.state.isTransform === -500) {
        this.setState({
          isTransform: 0,
          isTransition: '0s',
        });
      }
    }, 3000);
  }

  render() {
    const count = this.state.isTransform;
    console.log(this.state.isTransition);
    return (
      <div className="main">
        <div className="image-slider">
          <ul
            className="image-box"
            style={{
              transform: `translateX(${count}vw)`,
              transition: `${this.state.isTransition}`,
            }}
          >
            <li>
              <img
                className="slide1"
                alt="슬라이드 이미지"
                src="https://www.oasis.co.kr:48581/display/mainBanner/main_banner_W_TOP_sIHL.jpg"
              />
            </li>
            <li>
              <img
                className="slide2"
                alt="슬라이드 이미지"
                src="https://www.oasis.co.kr:48581/display/mainBanner/main_banner_W_TOP_6EiX.jpg"
              />
            </li>
            <li>
              <img
                className="slide3"
                alt="슬라이드 이미지"
                src="https://www.oasis.co.kr:48581/display/mainBanner/main_banner_W_TOP_i3vL.jpg"
              />
            </li>
            <li>
              <img
                className="slide4"
                alt="슬라이드 이미지"
                src="https://www.oasis.co.kr:48581/display/mainBanner/main_banner_W_TOP_i3vL.jpg"
              />
            </li>
            <li>
              <img
                className="slide5"
                alt="슬라이드 이미지"
                src="https://www.oasis.co.kr:48581/display/mainBanner/main_banner_W_TOP_kgYf.jpg"
              />
            </li>
            <li>
              <img
                className="slide1"
                alt="슬라이드 이미지"
                src="https://www.oasis.co.kr:48581/display/mainBanner/main_banner_W_TOP_sIHL.jpg"
              />
            </li>
          </ul>
          <div className="image-side-btn">
            <button onClick={this.prevBtn}>
              <i class="fas fa-chevron-left"></i>
            </button>
            <button onClick={this.nextBtn}>
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
          <div className="nav-dot">
            <div>
              <button className="btn01"></button>
            </div>
            <div>
              <button className="btn02"></button>
            </div>
            <div>
              <button className="btn03"></button>
            </div>
            <div>
              <button className="btn04"></button>
            </div>
            <div>
              <button className="btn05"></button>
            </div>
          </div>
        </div>
        <div>
          <div className="product-container">
            <div className="product-selection">
              <div>
                <button onClick={this.handleTap}>식품</button>
              </div>
              <div>
                <button onClick={this.handleTap}>레시피</button>
              </div>
            </div>
          </div>
          {this.state.isChangeTap ? <Food /> : <Recipe />}
        </div>
      </div>
    );
  }
}

export default Main;
