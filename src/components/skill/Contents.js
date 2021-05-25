import React from 'react';
import styled from 'styled-components';

const ContentsBlock = styled.div`
  width: 100%;
  height: auto;
  padding: 100px 80px 0;

  li {
    margin: 0;
    text-align: center;
    font-size: 17px;
    color: #000;
    line-height: 27px;
    margin-top: 5px;

    span {
      color: #ff2817;
      font-weight: bold;
    }
  }

  @media all and (max-width: 700px) {
    padding: 50px 40px 0;

    li {
      font-size: 16px;
      line-height: 27px;
      margin-top: 10px;
    }
  }

  @media all and (max-width: 550px) { 
    padding: 50px 40px 0;

    li {
      font-size: 16px;
      line-height: 25px;
      margin-top: 20px;
    }
    span {
      display: block;
    }
  }
  @media all and (max-width: 425px) { 
    padding: 30px 20px 0;

    li {
      font-size: 15px;
      line-height: 25px;
      margin-top: 20px;
    }
  }
`;

const Contents = () => {
  return (
    <ContentsBlock>
      <ul>
        <li><span>Design</span> &nbsp; UX/UI 그리고 재미있는 효과들을 흥미롭게 생각하고 고민합니다.</li>
        <li><span>FrontEnd</span> &nbsp; 새로운 기술을 공부하고, 자기개발 하는 것을 좋아합니다.</li>
        <li><span>Communication</span> &nbsp; 사람들과의 대화를 좋아합니다. 디자이너와 서버개발자 사이에서의 소통이 원활합니다.</li>
      </ul>
    </ContentsBlock>
  )
}

export default Contents;