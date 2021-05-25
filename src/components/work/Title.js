import React from 'react';
import styled from 'styled-components';

const TitleBlock = styled.div`
  width: 100%;
  height: auto;

  h1 {
    width: 100%;
    height: auto;
    text-align: center;
    font-size: 9rem;
    font-family: 'Montserrat', sans-serif;
    color: #ff2817;
    letter-spacing: 2rem;
    margin-bottom: 150px;
  }

  @media all and (max-width: 1200px) {
    h1 { font-size: 7rem; }
  }
  
  @media all and (max-width: 1024px) {
    h1 { font-size: 5rem; }
  }

  @media all and (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
      letter-spacing: 1rem;
    }
  }

  @media all and (max-width: 410px) {
    h1 {
      font-size: 2rem;
      letter-spacing: 0.5rem;
    }
  }
`;


const Title = () => {
  return (
    <TitleBlock>
      <h1>PORTFOLIO</h1>
    </TitleBlock>
  )
}

export default Title;