import React from "react";
import Poster from "../Poster";
import imgUrl from '../../../images/glow.jpg';

const children = [
  "글로우오아시스 홈페이지를 클론 코딩한 반응형 포트폴리오 사이트입니다.",
  "HTML, CSS, jQuery"
];

export default () => (
  <Poster
    title= "GLOWOASIS"
    subtitle = "CLONE CODING"
    description= {children[0]}
    imageUrl= {imgUrl}
    skill= {children[1]}
    webUrl= "http://did3296.dothome.co.kr/glowoasis/"
    GithubUrl= "https://github.com/hyerimyang/glowoasis"
  >
  </Poster>
);
