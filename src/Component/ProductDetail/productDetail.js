import React from 'react';
import DetailInfo from './DetailInfo';
import Reviews from './Reviews';
import './productDetail.scss';

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      activeID: 0,
      isClicked: '',
    };
  }

  clickHandleTab = e => {
    const id = parseInt(e.target.id);
    this.setState({ activeID: id, isClicked: 'select-btn' });
  };

  render() {
    const tab = {
      0: <DetailInfo />,
      1: <Reviews />,
    };
    return (
      <div className="product-detail-conponent">
        <div className="detail-tab">
          <div>
            <button
              id="0"
              className={
                this.state.activeID === 0 ? `${this.state.isClicked}` : ''
              }
              onClick={this.clickHandleTab}
            >
              상품정보
            </button>
          </div>
          <div>
            <button
              id="1"
              className={
                this.state.activeID === 1 ? `${this.state.isClicked}` : ''
              }
              onClick={this.clickHandleTab}
            >
              구매후기
            </button>
          </div>
        </div>
        <div>{tab[this.state.activeID]}</div>
      </div>
    );
  }
}
export default ProductDetail;
