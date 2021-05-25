/* 
Section2 :: About (좋아하는 것 & 습관)
Travel(여행) / Life Force(삶의 원동력) / Memo(메모하는 습관)  
*/
import React from 'react';
import styled from 'styled-components';

const FavoriteBlock = styled.div`
  width: 100%; 
  height: auto;
  padding: 0 80px;
  margin-top: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media all and (max-width: 1440px) {
    margin-top: 200px;
  }

  @media all and (max-width: 1024px) {
    margin-top: 90px;
    padding: 0 30px;
  }

  @media all and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Box = styled.div`
  width: 30%;
  height: 500px;
  text-align: center;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }

  @media all and (max-width: 1024px) {
    height: 400px;
  }

  @media all and (max-width: 768px) {
    height: auto;
    width: 100%;
  }

`;

const Inner = styled.div`
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  height: 100%;
  margin: auto;
  padding: 30% 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: rgba(0,0,0,0.5);

  h4 {
    height: auto;  
    font-size: 60px;
    color: #FFFFFF;
    margin: 0;
  }
  p {
    font-size: 17px;
    color: #FFFFFF;
    margin-top: 10px;
    line-height: 30px;
  }

  @media all and (max-width: 1024px) {
    h4 { font-size: 40px; }
    p { font-size: 15px; line-height: 25px; }
  }

  @media all and (max-width: 768px) {
    h4 { font-size: 40px; }
    p { font-size: 15px; line-height: 20px; }
  }

  @media all and (max-width: 320px) {
    p { display: none; }
  }
`;

const Favorite = () => {
  return (
    <FavoriteBlock>
      <Box>
        <img src="travel.jpg" />
        <Inner>
          <h4>TRAVEL</h4>
          <p >
            제일 좋아하는 것 "여행" <br /><br />
            여행으로 얻게되는 다양한 경험을 좋아하고,<br />
            그때의 추억으로 살아갑니다
          </p>
        </Inner>
      </Box>

      <Box>
        <img src="cafe.jpg" />
        <Inner>
          <h4>LIFE FORCE</h4>
          <p>
            나의 "삶의 원동력" <br /><br />
            해외여행, 산책, 음악, 계획, 드라마, <br />
            커피, 좋아하는 연예인,<br />
            청소, 좋은 사람과 좋은 대화
          </p>
        </Inner>
      </Box>
      
      <Box>
        <img src="memo.jpg" />
        <Inner>
          <h4>MEMO</h4>
          <p>
            "메모" 하는 습관 <br /><br />
            시간을 효율적으로 관리하기 위해<br />매일 체크리스트를 적고, <br />
            하루, 한달, 1년 목표를 기록하며 계획합니다
          </p>
        </Inner>
      </Box>
    </FavoriteBlock>
  )
}

export default Favorite;