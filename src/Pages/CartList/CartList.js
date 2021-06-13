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
    };
  }

  componentDidMount() {
    fetch('/Data/CartData.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ cartData: data });
      });
  }

  handleQuantity = event => {
    const { cartData } = this.state;
    const { id, className } = event.target;
    if (className === 'quantity-plus') {
      const newQuantity = cartData.map((cartItem, index) => {
        return parseInt(id) !== index + 1
          ? cartItem
          : {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
      });
      this.setState({ cartData: newQuantity });
    } else if (className === 'quantity-minus') {
      const newQuantity = cartData.map((cartItem, index) => {
        if (parseInt(id) !== index + 1) {
          return cartItem;
        } else {
          return {
            ...cartItem,
            quantity:
              cartItem.quantity > 1 ? cartItem.quantity - 1 : cartItem.quantity,
          };
        }
        // return parseInt(id) !== index + 1
        //   ? cartItem
        //   : {
        //       ...cartItem,
        //       quantity:
        //         cartItem.quantity > 1
        //           ? cartItem.quantity - 1
        //           : cartItem.quantity,
        //     };
      });
      this.setState({ cartData: newQuantity });
    }
  };

  removeCartItem = event => {
    const { cartData } = this.state;
    const { id } = event.target;
    const newCartData = cartData.filter(cartItem => {
      return parseInt(id) !== cartItem.id;
    });
    console.log(newCartData);
    this.setState({ cartData: newCartData });
  };

  handleIsChecked = event => {
    // const { cartData, selectedArr } = this.state;
    // const { id } = event.target;
    // const selectedItem = selectedArr;
    // if (selectedArr.includes(parseInt(id))) {
    //   const removedArr = selectedItem.filter(el => {
    //     return el !== parseInt(id);
    //   });
    //   this.setState({ selectedArr: removedArr });
    // } else {
    //   selectedItem.push(parseInt(id));
    //   this.setState({ selectedArr: selectedItem });
    // }
    // const newCheck = cartData.map((cartItem, index) => {
    //   return parseInt(id) !== index + 1
    //     ? cartItem
    //     : { ...cartItem, isChecked: !cartItem.isChecked };
    // });
    // this.setState({ cartData: newCheck });
  };

  selectAll = () => {
    // const { cartData, selectedArr } = this.state;
    // const selectAllArr = [];
    // cartData.map((cartItem, index) => {
    //   if (!selectedArr.includes(cartItem.id)) {
    //     return selectAllArr.push(cartItem.id);
    //   } else {
    //     console.log(selectedArr);
    //   }
    // });
    // this.setState({ selectedArr: selectAllArr });
  };

  render() {
    const { cartData, selectedArr } = this.state;
    let totalPrice = 0;
    cartData.map(cartItem => {
      totalPrice += cartItem.quantity * cartItem.price;
    });
    return (
      <>
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
                <i className="fas fa-check-circle fa-lg" />
                전체선택
              </button>
              <button className="select-delete">선택삭제</button>
            </div>
            <div className="cart-item__container">
              <ul className="cart-item__list">
                {cartData.map(data => (
                  <CartItem
                    id={data.id}
                    key={data.id}
                    name={data.name}
                    image={data.image}
                    quantity={data.quantity}
                    price={data.price}
                    isChecked={data.isChecked}
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
                <span>{totalPrice.toLocaleString()}</span>
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
                  {(totalPrice + 3000).toLocaleString()}
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
    );
  }
}

export default CartList;
