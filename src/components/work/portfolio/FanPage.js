import React from "react";
import Poster from "../Poster";
import imgUrl from '../../../images/fanpage.jpg';

const children = [
  "평소 좋아하는 아이유의 영상들을 모아둔 사이트입니다. 평소 연예계에 관심이 많아 관련 사이트를 꼭 만들어보고 싶었는데, React를 공부하고 웹페이지를 만들어보았습니다.",
  "React, Router, styled-components, mobX, Formik, Yup, JavaScript(ES6)",
];

export default () => (
  <Poster
    title= "FANPAGE"
    subtitle = "IU BEST VIDEO"
    description= {children[0]}
    imageUrl= {imgUrl}
    skill= {children[1]}
    webUrl= "https://hyerimyang.github.io/iu-fanpage/"
    GithubUrl= "https://github.com/hyerimyang/iu-fanpage"
  >
  </Poster>
);
