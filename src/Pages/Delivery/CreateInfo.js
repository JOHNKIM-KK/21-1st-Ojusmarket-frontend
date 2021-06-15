import React from 'react';

class CreateInfo extends React.Component {
  render() {
    return (
      <div className="address-info">
        <div className="reciver-info">
          <input
            id="userName"
            name="userName"
            value={this.props.reciverName}
            onChange={this.props.handleChange}
          ></input>
          <input
            id="userPhone"
            name="userPhone"
            value={this.props.reciverPhone}
            onChange={this.props.handleChange}
          ></input>
        </div>
        <div className="address-input">
          <div className="detailed-address">
            <input
              id="reciverAddress"
              name="userAddress"
              value={this.props.reciverAddress}
              onChange={this.props.handleChange}
            ></input>
            <span>
              배송을 위해 고객님의 주소가 맞는지 다시한번 확인해주세요
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateInfo;
