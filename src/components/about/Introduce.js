/* Section1 :: 자기소개 */
import React from 'react';
import styled from 'styled-components';

export const IntroduceBlock = styled.div`
  width: 1300px;
  height: auto;
  position: relative;
  top: 100px; right:0; left: 0;
  margin: 0 auto;

  @media all and (max-width: 1440px) {
    width: 100%;
    left: 0px;
  }
  @media all and (max-width: 1024px) {
    top: 0px;
  }
  @media all and (max-width: 768px) {
    width: 100%;
    left: 0;
  }
`;

export const TitleText = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
  font-weight: bold;
  color: #ff2817;

  @media all and (max-width: 1024px) {
    padding-left: 20px;
  }
`;

export const ImgBox = styled.div`
  width: 800px; 
  height: 550px;
  background: url('introduce.jpg');
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;

  @media all and (max-width: 1440px) {
    left: 80px;
  }
  @media all and (max-width: 1024px) {
    width: 100%;
    left: 80px;
  }
  @media all and (max-width: 768px) {
    width: 100%;
    left: 0;
  }
`;

export const Text = styled.div`
  position: absolute;
  top: 0; right: 0;
  width: 780px;
  height: auto;

  .intro-name {
    font-size: 7.5rem;
    font-weight: bold;
    color:#000;
    margin-top: -50px;
  }
  .intro-title {
    font-size: 5rem;
    font-weight: bold;
    color:#000;
    margin-bottom: 15px;
    margin-top: -10px;
  }
  .intro-text {
    font-size: 1rem;
    line-height: 25px;
    margin-top: 15px;
    background-color: rgba(255,255,255, 0.3);
    padding: 10px 0 20px 30px;
    font-weight: bold;

    li {
      line-height: 23px;
      margin-top: 30px;
      position: relative;

      &::after {
      content: '';
      position: absolute;
      top: -5px; left: -15px;
      width: 8px; 
      height: 8px;
      border-radius: 10px;
      background-color: #ff2817;
      }
    }
    .hello { margin-top: 10px; }
    a {
      color: #4ab0a6;
      text-decoration: underline;
    }
  }

  @media all and (max-width: 1024px) {
    position: relative;
    padding-left: 20px;

    .intro-name {
      font-size: 5rem;
      margin-top: 20px;
    }
    .intro-title { font-size: 3rem; }
    .intro-text {
      font-size: 1rem;
      padding: 10px 20px 20px 20px;
    }

  @media all and (max-width: 768px) {
    width: 100%;

    .intro-name { font-size: 3.7rem; }
    .intro-title { font-size: 2.5rem; }
  }

  @media all and (max-width: 425px) {
    .intro-name { font-size: 3rem; }
    .intro-title { font-size: 2rem; }
  }
}
`;

const Introduce = () => {
  return (
    <IntroduceBlock>
      <TitleText> About </TitleText>
      <ImgBox />
      <Text>
        <ul>
          <li className="intro-name">YANGHYERIM</li>
          <li className="intro-title">Introduce</li>
          <li className="intro-text">
            <ul>
              <li className="hello">
                안녕하세요! <br /> 웹디자이너와 웹퍼블리셔로 2년을 보낸 후, <br />
                그 자리에 머무르지 않고 프론트엔드 언어도 함께 공부하며 전문성을 갖추기 위해 발전해 온 양혜림입니다. 
              </li>
              <li>
                회사를 다니면서도 업무 능력을 높이기 위해 퇴근 후 학원을 다녔고, <br />
                또한 학점은행제를 병행하여 컴퓨터공학 학사학위를 취득하며 자기계발을 꾸준히 해왔습니다. 
              </li>
              <li>디자인과 개발 두 가지 모두 경험해봤기 때문에 디자이너와 개발자의 입장에서 생각할 줄 아는 사람입니다.</li>
              <li>
                평소 꾸준함을 중요시하는 사람으로서 일상, 여행, 개발공부 등을&nbsp;
                <a href="https://blog.naver.com/did3296" target="_blank">블로그</a>에 기록하고있습니다.
              </li>
            </ul>
          </li>
        </ul>
      </Text>
    </IntroduceBlock> 
  )
}

export default Introduce;