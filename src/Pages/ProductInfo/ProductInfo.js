import React from 'react';
import Header from '../../Component/HeaderComponent/Header';
import Footer from '../../Component/FooterComponent/Footer';
import ProductDetail from './ProductDetail';
import './ProductInfo.scss';

class ProductInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      infoData: {},
      isLoading: false,
    };
  }

  handleCount = event => {
    const { count } = this.state;
    const { className } = event.target;
    className === 'plus'
      ? this.setState({ count: count + 1 })
      : this.setState({ count: count - 1 });
  };

  componentDidMount() {
    fetch('http://localhost:3000/Data/infoData.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ infoData: data, isLoading: true });
      });
  }

  render() {
    const { count, infoData, isLoading } = this.state;
    return (
      isLoading && (
        <>
          <Header />
          <div className="contents-container">
            <div className="img-container">
              <span>
                <a href="#">홈</a>
                {'>'}
                <a href="#">오감동</a>
                {'>'}
                <a href="#">청과</a>
              </span>
              <img className="image" src={infoData.image_url} />
              <div className="slide-container">
                <span className="related">연관요리</span>
                <div className="slide-box">
                  <div className="dummy-image">
                    <div className="dum-img"></div>
                    <span className="imageName">상품정보</span>
                  </div>
                  <div className="dummy-image">
                    <div className="dum-img"></div>
                    <span className="imageName">상품정보</span>
                  </div>
                  <div className="dummy-image">
                    <div className="dum-img"></div>
                    <span className="imageName">상품정보</span>
                  </div>
                  <div className="dummy-image">
                    <div className="dum-img"></div>
                    <span className="imageName">상품정보</span>
                  </div>
                  <div className="dummy-image">
                    <div className="dum-img"></div>
                    <span className="imageName">상품정보</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-container">
              <div className="text-title">
                <h1>{infoData.name}</h1>
              </div>
              <div className="text-contents">
                <div className="price">
                  <span className="price-text">일반가</span>
                  <span className="price-number">
                    {infoData.price.toLocaleString()}원
                  </span>
                </div>
                <div className="info-box">
                  <div className="delivery">
                    <span>배송비</span>
                    <span>3,000원</span>
                  </div>
                  <div className="storage">
                    <span>보관방법</span>
                    <span>{infoData.storage}</span>
                  </div>
                </div>
              </div>
              <div className="product-feature__box">
                <span>상품특징</span>
                <span>{infoData.info}</span>
              </div>
              <div className="product-counter">
                <span className="buy-counter">구매수량</span>
                <div className="count-button">
                  <div className="button-container">
                    <button className="minus" onClick={this.handleCount}>
                      -
                    </button>
                    <span className="counter">{count}</span>
                    <button className="plus" onClick={this.handleCount}>
                      +
                    </button>
                  </div>
                  <div className="total-price">
                    <span>{`${(
                      infoData.price * count
                    ).toLocaleString()}`}</span>
                    <span>원</span>
                  </div>
                </div>
              </div>
              <div className="btn-area">
                <button>장바구니</button>
                <button>바로구매</button>
                <button>
                  <i className="far fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
          <ProductDetail />
          <Footer />
        </>
      )
    );
  }
}

export default ProductInfo;
