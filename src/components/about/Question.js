/* Section3 :: Self Q&A "왜 프론트엔드 개발자인가?" */
import React from 'react';
import styled from 'styled-components';

const QuestionBlock = styled.div`
  width: 100%;
  height: 630px;
  padding-left: 100px;
  margin-top: 100px;
  background: url('qna01.jpg');
  background-size: cover;
  background-position: center top ;
  background-repeat: no-repeat;
  position: relative;

  @media all and (max-width: 1024px) {
    padding: 0;
  }
`;

const AnswerBlock = styled.div`
  width: 100%;
  position: absolute;
  top: 30%; 

  h3 {
    width: 500px;  
    padding-bottom: 10px;
    border-bottom: 1px solid #FFFFFF;
    font-weight: bold;
    font-size: 1.6rem;
    color: #FFF;
  }
  p{
    font-size: 1.1rem;
    color: #FFF;
    line-height: 28px;
  }

  @media all and (max-width: 1024px) {
    padding: 0 40px;

    h3 {
      width: 100%;  
      text-align: center;
      border: none;
      font-size: 1.6rem;
    }
    p{
      font-size: 1.1rem;
      text-align: center;
    }
  }
  @media all and (max-width: 425px) {
    top: 10%;

    h3 { font-size: 1.3rem; }
    p{ font-size: 1rem; }
  }
`;

const Question = () => {
  return (
    <QuestionBlock>
      <AnswerBlock>
        <h3>왜 프론트엔드 개발자인가?</h3>
        <p>
          디자이너와 퍼블리셔 직군을 거쳐오면서 기본적으로 마크업 작업과 디자인 작업을 좋아하고, <br />
          사용자와 직접적으로 접촉하는 영역인 것에 흥미로움을 느꼈습니다.<br />
          앞으로 스마트폰이 더 발전하면서 뷰(View)를 만드는 일로<br />
          프론트엔드 개발 직군이 더 많이 필요하게 될 것이라고 생각합니다.<br />
          미래에 더욱 매력적인 직업이 될 것이라고 생각해서 진로를 결정하였습니다. <br />
        </p>
      </AnswerBlock>
    </QuestionBlock>
  )
}

export default Question;