import React from 'react';
import styled from 'styled-components';
import { FiChevronsDown } from "react-icons/fi";
import { Link } from 'react-router-dom';

const MainBlock = styled.div`
  background: url('main02.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a1a1a;
  position: relative;

  .main-title>h1 {
    font-size: 180px;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    color: white;
  }

  @media all and (max-width: 1440px) {
    .main-title>h1 {
      font-size: 9rem;
    }
  }
  @media all and (max-width: 1024px) {
    .main-title>h1 {
      font-size: 6rem;
    }
  }
  @media all and (max-width: 768px) {
    .main-title>h1 {
      font-size: 4rem;
    }
  }
  @media all and (max-width: 425px) {
    .main-title>h1 {
      font-size: 2rem;
    }
  }
`;

const BottomIcon = styled.div`
  width: 100%;
  height: auto;
  color: white;
  position: absolute;
  bottom: 0; 
  right: 0;
  left: 0; 
  margin: 0 auto;
  font-size: 40px;
  display: block;
  align-items: center;
  justify-content: center; 
  text-align: center;

  animation: icon-move 1s linear infinite alternate;

  p {
    margin-bottom: 10px;
    font-size: 18px;
  }

  @keyframes icon-move {
  from{
    bottom: 10px;
  } 
  to {
    bottom: 18px;
  } 
}
`;

const Main = () => {
  return ( 
    <MainBlock>
      <div className="main-title">
        <h1>YANGHYERIM</h1>

        <BottomIcon>
        <p>Scroll Down</p>
          <FiChevronsDown />
        </BottomIcon>
      </div>
    </MainBlock>
  )
}

export default Main;