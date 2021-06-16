import React from 'react';
import Header from '../../Component/HeaderComponent/Header';
import Footer from '../../Component/FooterComponent/Footer';
import CartItem from '../CartList/CartItem';
import './CartList.scss';

class CartList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartData: [],
      selectedArr: [],
      deletedArr: [],
    };
  }

  componentDidMount() {
    fetch('/Data/CartData.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          cartData: data,
          selectedArr: Array(data.length).fill(false),
        });
      });
  }

  handleQuantity = event => {
    const { cartData } = this.state;
    const { value, className } = event.target;
    if (className === 'quantity-minus' && cartData[parseInt(value)].count === 1)
      return;

    const newQuantity = cartData.map((cartItem, index) => {
      return parseInt(value) !== index
        ? cartItem
        : {
            ...cartItem,
            count:
              className === 'quantity-plus'
                ? cartItem.count + 1
                : cartItem.count - 1,
          };
    });
    this.setState({ cartData: newQuantity });
  };

  isCheckArr = () => {
    const { selectedArr } = this.state;
    for (let isChecked of selectedArr) {
      if (!isChecked) {
        return true;
      }
    }
    return false;
  };

  removeCartItem = id => {
    const { cartData } = this.state;
    const newCartData = cartData.filter(cartItem => {
      return parseInt(id) !== parseInt(cartItem.id);
    });
    const deletedData = cartData.filter(cartItem => {
      return parseInt(id) === parseInt(cartItem.id);
    });
    this.setState({ cartData: newCartData, deletedArr: deletedData });
  };

  getTotalPrice = numArr => {
    let totalPrice = 0;
    numArr.forEach(el => {
      totalPrice += el.count * el.price;
    });
    return totalPrice;
  };

  handleIsChecked = id => {
    const { selectedArr } = this.state;
    const newCheck = [...selectedArr];
    newCheck[id] = !newCheck[id];
    this.setState({ selectedArr: newCheck });
  };

  selectAll = () => {
    const { selectedArr } = this.state;
    const newCheckArr = Array(selectedArr.length).fill(this.isCheckArr());
    this.setState({ selectedArr: newCheckArr });
  };

  selectDelete = () => {
    const { cartData, selectedArr } = this.state;
    const checkedArr = [];
    let idx = selectedArr.indexOf(true);
    while (idx !== -1) {
      checkedArr.push(idx);
      idx = selectedArr.indexOf(true, idx + 1);
    }
    const newCheckedArr = cartData.filter(cartItem => {
      return !checkedArr.includes(parseInt(cartItem.id));
    });
    const newDeletedArr = cartData.filter(cartItem => {
      return checkedArr.includes(parseInt(cartItem.id));
    });
    this.setState({
      cartData: newCheckedArr,
      deletedArr: newDeletedArr,
      selectedArr: Array(newCheckedArr.length).fill(false),
    });
  };

  render() {
    const { cartData, selectedArr, deletedArr } = this.state;
    return (
      cartData && (
        <>
          <Header />
          <section className="cart-list">
            <div className="cart-list__container">
              <div className="cart-list__box">
                <h1>장바구니</h1>
                <span>
                  <a href="#">장바구니</a>
                  {'>'}
                  <a href="#">주문배송</a>
                  {'>'}
                  <a href="#">주문결제</a>
                  {'>'}
                  <a href="#">주문완료</a>
                </span>
              </div>
              <div className="cart-message__container">
                <h2>
                  장바구니 상품 <span>{cartData.length}</span>건
                </h2>
                <span className="cart-notice__message">
                  장바구니 상품은 14일간 보관 되며, 이후 찜목록으로 이동됩니다.
                </span>
              </div>
              <div className="select-item__container">
                <button className="select-all" onClick={this.selectAll}>
                  <i
                    className={`fas fa-check-circle fa-lg ${
                      this.isCheckArr() ? `` : 'select-all__btn'
                    }`}
                  />
                  전체선택
                </button>
                <button className="select-delete" onClick={this.selectDelete}>
                  선택삭제
                </button>
              </div>
              <div className="cart-item__container">
                <ul className="cart-item__list">
                  {cartData.map((data, index) => (
                    <CartItem
                      id={data.id}
                      key={index}
                      name={data.name}
                      image={data.image}
                      count={data.count}
                      price={data.price}
                      selectedArr={selectedArr}
                      handleQuantity={this.handleQuantity}
                      removeCartItem={this.removeCartItem}
                      handleIsChecked={this.handleIsChecked}
                    />
                  ))}
                </ul>
              </div>
              <div className="total-price__box">
                <div className="sum-price">
                  <span>총 상품금액</span>
                  <span>{this.getTotalPrice(cartData).toLocaleString()}원</span>
                </div>
                <span className="plus">+</span>
                <div className="delivery-price">
                  <span>배송비</span>
                  <span>
                    {(3000).toLocaleString()}
                    <span>원</span>
                  </span>
                </div>
                <span className="equal">=</span>
                <div className="total-price">
                  <span>총 결제금액</span>
                  <span>
                    {this.getTotalPrice(cartData)
                      ? (this.getTotalPrice(cartData) + 3000).toLocaleString()
                      : 0}
                    <span>원</span>
                  </span>
                </div>
              </div>
              <div className="buy-button__container">
                <button>계속 쇼핑하기</button>
                <button>선택상품만 주문하기</button>
                <button>전체상품 주문하기</button>
              </div>
            </div>
          </section>
          <Footer />
        </>
      )
    );
  }
}

export default CartList;
