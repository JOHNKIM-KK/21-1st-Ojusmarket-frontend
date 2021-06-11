import React from 'react';
import './Slider.scss';

class Slider extends React.Component {
  constructor() {
    super();
    this.state = {
      TransformImg: 0,
      TransitionImg: '1s ease-in-out',
    };
  }

  nextBtn = () => {
    if (this.state.TransformImg > -500) {
      this.setState({
        TransformImg: this.state.TransformImg - 100,
        TransitionImg: '1s ease-in-out',
      });
    } else {
      this.setState({
        TransformImg: 0,
        TransitionImg: '0s',
      });
    }
  };

  prevBtn = () => {
    if (this.state.TransformImg < 0) {
      this.setState({
        TransformImg: this.state.Transform + 100,
        TransitionImg: '1s ease-in-out',
      });
    } else {
      this.setState({
        TransformImg: -500,
        TransitionImg: '0s',
      });
    }
  };

  componentDidMount() {
    const autoSlide = setInterval(() => {
      if (this.state.TransformImg > -500) {
        this.setState({
          TransformImg: this.state.TransformImg - 100,
          TransitionImg: '1s ease-in-out',
        });
      } else {
        this.setState({
          TransformImg: 0,
          TransitionImg: '0s',
        });
      }
    }, 4000);
    return autoSlide;
  }

  componentWillMount() {
    clearInterval(this.autoSlide);
  }

  render() {
    const count = this.state.TransformImg;
    console.log(this.props);
    return (
      <>
        <div className="image-slider">
          <ul
            className="image-box"
            style={{
              transformImg: `translateX(${count}vw)`,
              transitionImg: `${this.state.TransitionImg}`,
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
        </div>
      </>
    );
  }
}
export default Slider;
