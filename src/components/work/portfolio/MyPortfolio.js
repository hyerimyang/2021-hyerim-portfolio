import React from "react";
import Poster from "../Poster";
import imgUrl from '../../../images/port.jpg';

const children = [
  "React로 제작한 저를 소개하는 포트폴리오입니다. 기획/디자인/코딩/배포 까지 모두 혼자 제작한 프로젝트입니다.",
  "React, React Hooks, Router, styled-components, css, react-icons",
];

export default () => (
  <Poster
    title= "PORTFOLIO"
    subtitle = "REACT PORTFOLIO"
    description= {children[0]}
    imageUrl= {imgUrl}
    skill= {children[1]}
    webUrl= "https://hyerim-2021-portfolio.herokuapp.com/"
    GithubUrl= "https://github.com/hyerimyang/2021-hyerim-portfolio"
  >
  </Poster>
);
