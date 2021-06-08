import React from 'react';
import Food from './Food';
import Recipe from './Recipe';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      isChangeTap: true,
      isTransForm: '',
    };
  }

  autoSlider = () => {
    this.setState({
      isTransForm: 'transform(-100vw)',
    });
  };

  handleTap = () => {
    this.setState({
      isChangeTap: !this.state.isChangeTap,
    });
  };

  render() {
    return (
      <div className="main">
        <div className="image-slider">
          <ul>
            <li>
              <img
                alt="슬라이드 이미지"
                src="https://www.oasis.co.kr:48581/display/mainBanner/main_banner_W_TOP_sIHL.jpg"
              />
            </li>
            <li>
              <img
                alt="슬라이드 이미지"
                src="https://www.oasis.co.kr:48581/display/mainBanner/main_banner_W_TOP_ctDd.jpg"
              />
            </li>
            <li>
              <img
                alt="슬라이드 이미지"
                src="https://www.oasis.co.kr:48581/display/mainBanner/main_banner_W_TOP_vKjp.jpgg"
              />
            </li>
            <li>
              <img
                alt="슬라이드 이미지"
                src="https://www.oasis.co.kr:48581/display/mainBanner/main_banner_W_TOP_i3vL.jpg"
              />
            </li>
            <li>
              <img
                alt="슬라이드 이미지"
                src="https://www.oasis.co.kr:48581/display/mainBanner/main_banner_W_TOP_6EiX.jpg"
              />
            </li>
          </ul>
          <div>
            <button>prev</button>
            <button>next</button>
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
