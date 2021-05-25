/* Section4 :: KBS 경력 */
import React from 'react';
import styled from 'styled-components';

const IntroduceBlock = styled.div`
  width: 100%;
  height: auto;
  padding: 0 80px 30px 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 100px;
  margin-bottom: 80px;

  @media all and (max-width: 1440px) {
    padding: 0 40px 30px 40px;
  }
  @media all and (max-width: 1024px) {
    padding: 0 80px 30px 80px;
  }
  @media all and (max-width: 768px) {
    padding: 0 40px 30px 40px;
  }

`;

const IntroText = styled.div`
  width: 50%;

  .title {
    font-weight: bold;
    font-size: 2rem;
    color: #ff2817;
  }
  .company-name {
    font-weight: bold;
    font-size: 4.5rem;
    color: #000;
  }
  .career {
    font-size: 1.6rem;
    margin: 15px 0 8px;
    color: #000;
  }
  .career-date {
    font-size: 1.1rem;
    color: gray;
  }
  .career-list {
    font-size: 1.1rem;
    margin-top: 40px;
    line-height: 35px;
    color: #000;
    
    li {
      line-height: 28px;
      margin-bottom: 15px;
    }
  }

  @media all and (max-width: 1440px) {
    .title { font-size: 1.8rem; }
    .company-name {
      font-size: 3rem;
      line-height: 90px;
    }
    .career {
      font-size: 1.4rem;
      margin-top: 0;
    }
    .career-list { font-size: 1rem; }
  }

  @media all and (max-width: 1024px) {
    width: 100%;
  }

  @media all and (max-width: 490px) {
    .title { font-size: 1.3rem; }
    .company-name { font-size: 2rem; }
    .career { font-size: 1rem; }
    .career-date { font-size: 1rem; }
    .career-list { font-size: 0.9rem; }
  }

  @media all and (max-width: 360px) {
    .title { font-size: 1.2rem; }
    .company-name { font-size: 1.1rem; }
    .career { font-size: 0.9rem; }
    .career-date { font-size: 0.9rem; }
  }
`;

const MyPhoto = styled.div`
  width: 500px;
  height: 500px;
  background: url('career.GIF');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media all and (max-width: 1024px) {
    display: none;
  }
`;

const Career = () => {
  return (
    <div>
    <IntroduceBlock>
      <IntroText>
        <ul>
          <li className="title">Career</li>
          <li className="company-name">KBS 한국방송공사</li>
          <li className="career">기술지원부 웹디자이너 / 웹퍼블리셔</li>
          <li className="career-date">2018. 04 ~ 2020. 04 (2년)</li>
          <li className="career-list"> 
            <ul>
              <li>
                - 웹디자이너와 웹퍼블리셔를 두고 진로를 고민하던 중 
                <br />&nbsp;&nbsp;두 가지를 모두 할 수 있는 업무인 것을 보고 지원하여 입사하였습니다 
              </li>
              <li>- 부서에 필요한 전반적인 디자인 업무 ex) 현수막, 배너, 포스터, 명패, 책자, 웹진 등... </li>
              <li>- 방송기술웹진 사내 사이트 리뉴얼 작업 (디자인, 코딩, 외주: 백엔드) </li>
              <li>- 미디어창의기술전, KOBA 등의 행사 참여 </li> 
              <li>- 퇴사 후에도 일했던 부서에서 제가 해왔던 업무를 부탁받아 외주작업을 해왔습니다 </li>
            </ul>
          </li>
        </ul>
      </IntroText>

      <MyPhoto />
    </IntroduceBlock> 
  </div>
  )
}

export default Career;