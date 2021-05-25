import React from "react";
import Poster from "../Poster";
import imgUrl from '../../../images/continue2.jpg';

const children = [
  "더 많은 포트폴리오를 볼 수 있습니다. 앞으로 계속 공부하고 만들어 갑니다..",
  "Front End Developer",
];

export default () => (
  <Poster
    title= "MORE VIEW"
    subtitle = "GITHUB"
    description= {children[0]}
    imageUrl= {imgUrl}
    skill= {children[1]}
    webUrl= "https://github.com/hyerimyang"
    GithubUrl= "https://github.com/hyerimyang"
  >
  </Poster>
);
