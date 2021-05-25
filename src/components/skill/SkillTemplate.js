import React from 'react'
import { Wrapper } from '../common/CommonStyles'
import Contents from './Contents'
import Skills from './Skills'
import Footer from './Footer'

const SkillTemplate = () => {
  return (
    <Wrapper>
      <Skills />
      <Contents />
      <Footer />
    </Wrapper>
  )
}

export default SkillTemplate;