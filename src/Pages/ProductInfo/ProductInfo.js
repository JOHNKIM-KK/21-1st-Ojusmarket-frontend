import React from 'react';
import Header from '../../Component/HeaderComponent/Header';
import Footer from '../../Component/FooterComponent/Footer';
import ProductDetail from './ProductDetail';
import './ProductInfo.scss';
import RelatedList from './RelatedList';
import { withRouter } from 'react-router-dom';

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
    if (className === 'plus') {
      this.setState({ count: count + 1 });
    } else if (className === 'minus' && count > 1) {
      this.setState({ count: count - 1 });
    }
  };

  componentDidMount() {
    fetch(`http://10.58.2.123:8000/${this.props.match.params.id}`)
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
              <img className="image" src={infoData.ingredients.image_url} />
              <div className="slide-container">
                <span className="related">연관요리</span>
                <div className="related-list">
                  {infoData.ingredients &&
                    infoData.ingredients.related_recipe.map(list => (
                      <RelatedList
                        key={list.id}
                        name={list.name}
                        image={list.image_url}
                      />
                    ))}
                </div>
              </div>
            </div>
            <div className="info-container">
              <div className="text-title">
                <h1>{infoData.ingredients.name}</h1>
              </div>
              <div className="text-contents">
                <div className="price">
                  <span className="price-text">일반가</span>
                  <span className="price-number">
                    {Math.floor(infoData.ingredients.price).toLocaleString()}원
                  </span>
                </div>
                <div className="info-box">
                  <div className="delivery">
                    <span>배송비</span>
                    <span>3,000원</span>
                  </div>
                  <div className="storage">
                    <span>보관방법</span>
                    <span>{infoData.ingredients.storage}</span>
                  </div>
                </div>
              </div>
              <div className="product-feature__box">
                <span>상품특징</span>
                <span>{infoData.ingredients.info}</span>
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
                      Math.floor(infoData.ingredients.price) * count
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

export default withRouter(ProductInfo);
