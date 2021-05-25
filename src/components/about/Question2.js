/* Section5 :: 셀프 인터뷰 "앞으로 어떤 커리어를 꿈꾸는가?" */
import React from 'react';
import styled from 'styled-components';

const QuestionBlock = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 80px;
  background: url('qna02.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

const AnswerBlock = styled.div`
  width: 43%;
  height: 100vh;
  position: absolute;
  top: 0; right: 0;
  background-color: rgba(255,255,255,0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 0 20px;

  h3 {
    font-weight: bold;
    font-size: 1.6rem;
    color: #000;
  }
  p{
    font-weight: 500;
    font-size: 1.1rem;
    color: #000;
    line-height: 32px;
  }

  @media all and (max-width: 1024px) {
    width: 100%;
  }

  @media all and (max-width: 560px) {
    h3 { font-size: 1.3rem; }
    p{
      font-size: 1rem;
      line-height: 25px;
    }
  }
  
  @media all and (max-width: 375px) {
    h3 { font-size: 1.1rem; }
    p{
      font-size: 0.9rem;
      line-height: 23px;
    }
  }
`;

const Question2 = () => {
  return (
    <QuestionBlock>
      <AnswerBlock>
        <h3>앞으로 어떤 커리어를 꿈꾸는가?</h3>
        <p>
          여태까지는 일을 할 때 혼자서 책임지고 해야 할 일들이 많았습니다. <br />
          그래서 저는 프론트엔드 분야를 깊게 알고 더욱 전문성이 있는 개발자가 되어 <br /><br />
          약 5년 후, 다른 사람들을 가르칠 수 있는 정도의 지식과 실력을 갖춰 <br />
          개발을 시작하는 사람들에게 도움을 줄 수 있는 사람이 되어있을 것이고, <br /><br />
          약 10년 후, 제가 가지고 있는 리더쉽으로 팀에서 인정받는 리더가 되어 <br />
          팀에서 없으면 안 될 필요한 존재가 될 것입니다.
        </p>
      </AnswerBlock>
    </QuestionBlock>
  )
}

export default Question2;