import React from "react";
import Poster from "../Poster";
import imgUrl from '../../../images/han.jpg';

const children = [
  "한솥도시락 홈페이지를 클론 코딩한 반응형 포트폴리오 사이트입니다. 바닐라 자바스크립트로 구현하였습니다.",
  "HTML, CSS, JavaScript"
];

export default () => (
  <Poster
    title= "HANSOT"
    subtitle = "CLONE CODING"
    description= {children[0]}
    imageUrl= {imgUrl}
    skill= {children[1]}
    webUrl= "http://did3296.dothome.co.kr/hansot/"
    GithubUrl= "https://github.com/hyerimyang/hansot"
  >
  </Poster>
);
