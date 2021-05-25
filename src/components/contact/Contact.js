import React from 'react';
import styled from 'styled-components';

const ContactBlock = styled.div`
  width: 100%;
  height: auto;
`;

const Title = styled.div`
  width: 70%;
  height: auto;
  margin: 0 auto;
  background-color: #ff2817;
  text-align: center;

  h1 {
    width: 100%;
    margin: 80px 0 0 0;
    font-size: 5.5rem;
    font-weight: bold;
    transition: 0.3s;
    color: #FFF;
    padding: 10px 0;
    letter-spacing: 2px;
  }

  @media all and (max-width: 1024px) {
    text-align: center;

    h1 { font-size: 4.2rem; }
  }
  @media all and (max-width: 750px) { 
    h1 { font-size: 3rem; }
  }  
  @media all and (max-width: 580px) {
    h1 { font-size: 2rem; }
  }
  @media all and (max-width: 320px) {
    h1 { font-size: 1rem; }
  }
`;

const ContactList = styled.div`
  width: 70%; 
  height: auto;
  margin: 0 auto;
  padding-bottom: 100px;

  ul {
    width: 100%;
    height: auto;
    padding-left: 10px;
    margin-top: 20px;
    text-align: center;

    li {
      font-size: 40px;
      line-height: 100px;
      font-weight: bold;
      letter-spacing: 2px;
      border-bottom: 1px solid rgba(0,0,0,0.2);

      &:hover {
        background-color: rgba(183,183,183,0.1);
        color: #ff2817;
        transition: 0.4s;
      }
      a {
        display: block;
      }
    }
  }

  
    @media all and (max-width: 1024px) {
      text-align: center;
      ul {
        width: 100%;
      }
      li a {
        font-size: 35px;
      }
    }
    @media all and (max-width: 750px) { 
      li a {
        font-size: 30px;
        line-height: 80px;
      }
    }  
    @media all and (max-width: 580px) {
      li a {
        font-size: 20px;
        line-height: 70px;
      }
    }
`;

const Contact = () => {
  return (
    <ContactBlock>
      <Title>
        <h1>CONTACT ME</h1>
      </Title>

      <ContactList>
        <ul>
          <li>
            <a href="mailto: did3296@naver.com" target="_blank">did3296@naver.com</a>
          </li>
          <li>
            <a href="tel: 010-2997-4696" target="_blank">010-2997-4696</a>
          </li>
          <li>
            <a href="https://github.com/hyerimyang" target="_blank">Github</a>
          </li>
          <li>
            <a href="https://blog.naver.com/did3296" target="_blank">Blog</a>
          </li>
          <li>
            <a href="https://www.instagram.com/hyerimiya._/" target="_blank">Instagram</a>
          </li>
        </ul>
      </ContactList>
    </ContactBlock>
  )
}

export default Contact;

