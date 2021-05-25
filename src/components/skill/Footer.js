import React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  margin-top: 150px;

  ul {
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: -30px;
    left: 80px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }

  li {
    color: #ff2817;
    font-weight: bold;
    font-size: 7rem;
    margin-right: 50px;
  }

  @media all and (max-width: 1024px) {
    ul { height: 60px; }

    li { font-size: 5rem; }
  }
  @media all and (max-width: 700px) {
    ul { height: 50px; left: 40px; }

    li { font-size: 4rem; }
  }
  @media all and (max-width: 425px) {
    ul { height: 35px; }

    li { font-size: 2.5rem; }
  }
`;

const Footer = () => {
  return (
    <FooterBlock>
      <ul>
        <li>DESIGN</li>
        <li>FRONTEND</li>
        <li>COMMUNICATION</li>
      </ul>
    </FooterBlock>
  )
}

export default Footer;