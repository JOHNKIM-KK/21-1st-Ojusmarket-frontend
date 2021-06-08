import React from 'react';
import './Food.scss';

class Food extends React.Component {
  render() {
    return (
      <div className="food-component">
        <div className="food-category">
          <ul>
            <li>
              <button>반찬/요리</button>
            </li>
            <li>
              <button>샐러드/간편식</button>
            </li>
            <li>
              <button>청과</button>
            </li>
            <li>
              <button>농산물</button>
            </li>
            <li>
              <button>수산물</button>
            </li>
            <li>
              <button>축산물</button>
            </li>
            <li>
              <button>간식/과자</button>
            </li>
            <li>
              <button>신선식품</button>
            </li>
            <li>
              <button>건강음료</button>
            </li>
            <li>
              <button>생활리빙</button>
            </li>
          </ul>
        </div>
        <div className="food-header">
          <p>시간은 없고 마트 가야할 때?</p>
          <span>원하는 시간에 우리집에 쏙~</span>
        </div>
        <div className="food-wrap">
          <div className="food">
            <img
              alt="제품사진"
              src="https://www.oasis.co.kr:48581/product/17616/detail/detail_17616_0_67c662fb-167d-4a55-8aa8-3cfdc6fa9837.jpg"
            />
            <div className="food-info">
              <h2>
                &#91;MD&#93;추천 &#40;특품&#41;저탄소인증 성주참외
                &#40;4~5입,1.2kg 내외&#41;
              </h2>
              <p>
                <span>43%</span>6800원
              </p>
            </div>
          </div>
          <div className="food">
            <img
              alt="제품사진"
              src="https://www.oasis.co.kr:48581/product/17616/detail/detail_17616_0_67c662fb-167d-4a55-8aa8-3cfdc6fa9837.jpg"
            />
            <div className="food-info">
              <h2>
                &#91;MD&#93;추천 &#40;특품&#41;저탄소인증 성주참외
                &#40;4~5입,1.2kg 내외&#41;
              </h2>
              <p>
                <span>43%</span>6800원
              </p>
            </div>
          </div>
          <div className="food">
            <img
              alt="제품사진"
              src="https://www.oasis.co.kr:48581/product/17616/detail/detail_17616_0_67c662fb-167d-4a55-8aa8-3cfdc6fa9837.jpg"
            />
            <div className="food-info">
              <h2>
                &#91;MD&#93;추천 &#40;특품&#41;저탄소인증 성주참외
                &#40;4~5입,1.2kg 내외&#41;
              </h2>
              <p>
                <span>43%</span>6800원
              </p>
            </div>
          </div>
          <div className="food">
            <img
              alt="제품사진"
              src="https://www.oasis.co.kr:48581/product/17616/detail/detail_17616_0_67c662fb-167d-4a55-8aa8-3cfdc6fa9837.jpg"
            />
            <div className="food-info">
              <h2>
                &#91;MD&#93;추천 &#40;특품&#41;저탄소인증 성주참외
                &#40;4~5입,1.2kg 내외&#41;
              </h2>
              <p>
                <span>43%</span>6800원
              </p>
            </div>
          </div>
          <div className="food">
            <img
              alt="제품사진"
              src="https://www.oasis.co.kr:48581/product/17616/detail/detail_17616_0_67c662fb-167d-4a55-8aa8-3cfdc6fa9837.jpg"
            />
            <div className="food-info">
              <h2>
                &#91;MD&#93;추천 &#40;특품&#41;저탄소인증 성주참외
                &#40;4~5입,1.2kg 내외&#41;
              </h2>
              <p>
                <span>43%</span>6800원
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Food;
