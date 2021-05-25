import React from "react";
import styled from "styled-components";
import { VscPreview, VscGithubInverted } from "react-icons/vsc";

const BgImg = styled.div`
  background-image: url(${probs => probs.imageUrl});
  background-position: center top;
  background-size: cover;
  width: 100%;
  height: 400px;
  z-index:99;

  @media all and (max-width: 1440px) {
    width: 100%;  
  } 
  @media all and (max-width: 425px) {
    height: 300px;
  } 
`;

const Container = styled.div`
  width: 48%;
  height: 350px;
  position: relative;

  .title:hover {
    color: #ff2817;
    transition: 0.3s;
  }

  @media all and (max-width: 1024px) {
    width: 100%;
    height: auto;
    margin-bottom: 100px;
  } 
`;

const Title = styled.span`
  font-size: 5rem;
  font-family: 'Montserrat', sans-serif;
  position: absolute;
  left: 20px;
  top: -40px;
  line-height: 60px;
  letter-spacing: 0px;

  span { font-size: 3rem; }

  @media all and (max-width: 1260px) {
    font-size: 4rem;
    line-height: 45px;

    span { font-size: 2rem; }
  } 

  @media all and (max-width: 1024px) {
    font-size: 5rem;
  } 

  @media all and (max-width: 768px) {
    font-size: 4rem;
  } 

  @media all and (max-width: 530px) {
    font-size: 3rem;
    line-height: 35px;
    top: -25px;

    span { font-size: 1.5rem; }
  } 

  @media all and (max-width: 425px) {
    font-size: 2rem;
  } 
`;

const Content = styled.div`
  width: 95%;
  height: auto;
  padding: 20px 20px;
`;

const Description = styled.span`
  font-size: 17px;
  position: relative;
  line-height: 27px;
  color: #000;

  &::after {
    content: '';
    position: absolute;
    top: 0px; left: -15px; 
    width: 8px; 
    height: 8px;
    border-radius: 10px;
    background-color: #ff2817;
  }

  @media all and (max-width:425px) {
    font-size: 15px;
  }
`;

const Skills = styled.span`
  font-size: 18px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0px; left: -15px; 
    width: 8px; 
    height: 8px;
    border-radius: 10px;
    background-color: #ff2817;
  }
  
  @media all and (max-width:425px) {
    font-size: 15px;
  }
`;

const LinkContaier = styled.span`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  font-size: 18px;
  
  @media all and (max-width:425px) {
    font-size: 15px;
  }
`;

const WebLink = styled.span`
  color: #ff2817;
  margin-right: 100px;
`;

const GitLink = styled.span`
  color: #ff2817;
`;

const Poster = ({ title, imageUrl, description, skill, webUrl, GithubUrl, subtitle }) => (
  <Container>
    <a href={webUrl} target="_blank" rel="oopener noreferrer" className="title">
      <Title>{title} <br/> <span>{subtitle}</span></Title>    
      <BgImg imageUrl={imageUrl} />
    </a>
    
    <Content>
      <Description>{description}</Description>  <br /><br />
      <Skills>{skill}</Skills> <br /><br />
      <LinkContaier>
        <a href={webUrl} target="_blank" rel="oopener noreferrer">
          <WebLink><VscPreview /> View</WebLink>
        </a>
        <a href={GithubUrl} target="_blank" rel="oopener noreferrer">
          <GitLink><VscGithubInverted /> Github</GitLink>
        </a>
      </LinkContaier>
    </Content>

  </Container>
);

export default Poster;
