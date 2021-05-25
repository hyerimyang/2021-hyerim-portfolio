import React from 'react';
import styled from 'styled-components';
import Cubeme from './portfolio/Cubeme';
import Glowoasis from './portfolio/Glowoasis';
import Hansot from './portfolio/Hansot';
import TypingGame from './portfolio/TypingGame';
import FanPage from './portfolio/FanPage';
import DogBreeds from './portfolio/DogBreeds';
import MyPortfolio from './portfolio/MyPortfolio';
import Ready from './portfolio/Ready';

const ProjectBlock = styled.div`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0 80px;
  
  @media all and (max-width: 1440px) {
    padding: 0 40px;
  }
  @media all and (max-width: 1024px) {
    padding: 0 40px;
  }
`;

const PosterBlock = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 400px;

  @media all and (max-width: 1024px) {
    display: block;
    margin-bottom: 0;
  }
`;

const Project = () => {
  return (
    <ProjectBlock>
      <PosterBlock>
        <Cubeme></Cubeme>
        <Hansot></Hansot>
      </PosterBlock>
      
      <PosterBlock>
        <Glowoasis></Glowoasis>
        <TypingGame></TypingGame>
      </PosterBlock>

      <PosterBlock>
        <DogBreeds></DogBreeds>
        <FanPage></FanPage>
      </PosterBlock>

      <PosterBlock>
        <MyPortfolio></MyPortfolio>
        <Ready></Ready>
      </PosterBlock>
    </ProjectBlock>
  )
}

export default Project;