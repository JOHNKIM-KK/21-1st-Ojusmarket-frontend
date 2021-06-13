import React from 'react';
import './Slider.scss';

class Slider extends React.Component {
  constructor() {
    super();
    this.state = {
      TransformImg: -100,
      TransitionImg: '',
      //indexcount를 state값에 넣은 이유는 추후 dot-nav를 구현할 때 필요한 로직이여서 우선 넣어두었습니다.
      indexCount: 0,
    };
  }

  nextBtn = () => {
    if (this.state.TransformImg > -600) {
      this.setState({
        TransformImg: this.state.TransformImg - 100,
        TransitionImg: '1s ease-in-out',
        indexCount: this.state.indexCount - 1,
      });
    }
  };

  prevBtn = () => {
    if (this.state.TransformImg < 0) {
      this.setState({
        TransformImg: this.state.TransformImg + 100,
        TransitionImg: '1s ease-in-out',
        indexCount: this.state.indexCount + 1,
      });
    }
  };

  componentDidMount() {
    this.autoSlide = setInterval(() => {
      if (this.state.TransformImg > -600) {
        this.setState({
          TransformImg: this.state.TransformImg - 100,
          TransitionImg: '1s ease-in-out',
          indexCount: this.state.indexCount - 1,
        });
      }
    }, 8000);
  }

  componentWillMount() {
    clearInterval(this.autoSlide);
  }

  render() {
    console.log(this.state.indexCount);
    //딜레이 오류를 막기위해 렌더로 내렸음
    if (this.state.TransformImg === -600) {
      console.log(this.state.TransformImg);
      setTimeout(() => {
        this.setState({
          TransformImg: -100,
          TransitionImg: '0s',
          indexCount: 0,
        });
      }, 1000);
    }

    if (this.state.TransformImg === 0) {
      setTimeout(() => {
        this.setState({
          TransformImg: -500,
          TransitionImg: '0s',
          indexCount: -4,
        });
      }, 1000);
    }
    const count = this.state.TransformImg;

    return (
      <div className="image-slider">
        <ul
          className="image-box"
          style={{
            transform: `translateX(${count}vw)`,
            transition: `${this.state.TransitionImg}`,
          }}
        >
          {this.props.slideImgList.map((data, idx) => {
            return (
              <li>
                <img key={idx} alt="슬라이드 이미지" src={data} />
              </li>
            );
          })}
        </ul>
        <div className="image-side-btn">
          <button onClick={this.prevBtn}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button onClick={this.nextBtn}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <div>
          <input
            type="radio"
            name="slider-nav-bar"
            onClick={() => this.handleRadio('0')}
          ></input>
        </div>
      </div>
    );
  }
}
export default Slider;
