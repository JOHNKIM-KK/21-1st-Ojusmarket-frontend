import React from 'react';
import './RelatedList.scss';

class RelatedList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { image, name } = this.props;
    return (
      <div className="dummy-image">
        <img className="dum-img" src={image} alt="" />
        <span className="imageName">{name.slice(0, 5)}...</span>
      </div>
    );
  }
}

export default RelatedList;
