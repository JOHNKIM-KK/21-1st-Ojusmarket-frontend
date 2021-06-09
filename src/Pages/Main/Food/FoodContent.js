import React from 'react';

class FoodContent extends React.Component {
  render() {
    return (
      <div className="food">
        <img
          alt="제품사진"
          src="https://www.oasis.co.kr:48581/product/17616/detail/detail_17616_0_67c662fb-167d-4a55-8aa8-3cfdc6fa9837.jpg"
        />

        <div className="food-info">
          <h2>
            &#91;MD&#93;추천 &#40;특품&#41;저탄소인증 성주참외 &#40;4~5입,1.2kg
            내외&#41;
          </h2>
          <p>
            <span>43%</span>6800원
          </p>
        </div>
      </div>
    );
  }
}
export default FoodContent;
