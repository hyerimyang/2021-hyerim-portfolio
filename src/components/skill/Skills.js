import React from 'react';
import styled from 'styled-components';

const SkillsBlock = styled.div`
  width: 100%;
  height: auto;
  padding: 0 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative; 

  @media all and (max-width:1200px) {
    padding: 0 20px;
  }
  @media all and (max-width:1024px) {
    display: block;
  }
`;

const LanguageBox = styled.div`
  padding-top: 100px; 
  width: 37%;

  ul {
    width: 100%;
    line-height: 50px;
  }

  li {
    font-size: 40px;
  }

  .etc {
    font-size: 25px;
    line-height: 25px;
    padding-top: 20px;
    color: gray;
  }

  @media all and (max-width:1024px) {
    width: 100%;
    margin-bottom: 80px;
    padding-top: 50px; 
    li {
      text-align: center;
      font-size: 35px;
    }
  }
`;

const ImgBox = styled.div`
  width: 700px;
  height: 500px;
  position: absolute; 
  bottom: 0; 
  right: 80px;
  background: url('skill_img.gif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media all and (max-width:1200px) {
    right: 20px;
    width: 600px;
    height: 450px;
  }
  @media all and (max-width:1024px) {
    width: 500px;
    height: 350px;
    position: relative;
    right: 0; left: 0; margin: 0 auto;
    margin-bottom: 20px;
  }
  @media all and (max-width: 550px) {
    width: 100%;
  }
`;

const Skills = () => {
  return (
    <SkillsBlock>
      <LanguageBox>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>SASS/SCSS</li>
          <li>jQuery</li>
          <li>JavaScript(ES6)</li>
          <li>ReactJS</li>
          <li>NodeJS</li>
          <li>Redux</li>
          <li>Git/Github</li>
          <li>Sourcetree</li>
          <li className="etc">React-hooks, styled-components, Axios, Redux-saga, mobX, heroku</li>
        </ul>
      </LanguageBox>

      <ImgBox />
    </SkillsBlock>
  )
}

export default Skills;