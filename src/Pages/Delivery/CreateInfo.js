import React from 'react';

class CreateInfo extends React.Component {
  render() {
    return (
      <div className="address-info">
        <div className="reciver-info">
          <input
            id="userName"
            name="userName"
            value={this.props.userName}
            onChange={this.props.handleChange}
          ></input>
          <input
            id="userPhone"
            name="userPhone"
            value={this.props.userPhone}
            onChange={this.props.handleChange}
          ></input>
        </div>
        <div className="address-input">
          <div className="detailed-address">
            <input
              id="reciverAddress"
              name="userAddress"
              value={this.props.userAddress}
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
