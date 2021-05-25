import React from 'react';
import { Wrapper } from '../common/CommonStyles'
import Footer from './Footer';
import Project from './Project';
import Title from './Title';

const WorkTemplate = () => {
  return (
    <Wrapper>
      <Title />
      <Project />
      <Footer />
    </Wrapper>
  )
}

export default WorkTemplate;