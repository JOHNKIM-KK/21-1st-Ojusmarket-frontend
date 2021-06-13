import React from 'react';
import './CartItem.scss';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      id,
      name,
      image,
      quantity,
      price,
      isChecked,
      selectedArr,
      handleQuantity,
      removeCartItem,
      handleIsChecked,
    } = this.props;
    return (
      <li className="cart-item">
        <div>
          <div className="cart-item__info">
            <button onClick={handleIsChecked}>
              <i
                id={id}
                style={
                  selectedArr.includes(id)
                    ? { color: `#6ca437` }
                    : { color: `#dbdbdb` }
                }
                className="fas fa-check-circle fa-lg"
              />
            </button>
            <img className="item-image" src={image} alt="상품이미지" />
            <div className="item-name">
              <span>{name}</span>
            </div>
          </div>
          <div className="cart-button__container">
            <div className="item-button__box">
              <button
                id={id}
                className="quantity-minus"
                onClick={handleQuantity}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                id={id}
                className="quantity-plus"
                onClick={handleQuantity}
              >
                +
              </button>
            </div>
            <div className="item-total__price">
              <span>{(price * quantity).toLocaleString()}</span>
              <span>원</span>
            </div>
            <button className="item-delete" onClick={removeCartItem}>
              <i id={id} className="fas fa-times fa-lg" />
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default CartItem;
