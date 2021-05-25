import React from "react";
import Poster from "../Poster";
import imgUrl from '../../../images/typing.jpg';

const children = [
  "JavaScript와 jQuery를 공부할 때부터 언젠간 미니게임을 만들어보고 싶었습니다. 공부한 내용들을 토대로 영단어 타이핑 게임을 만들게 되었습니다.",
  "HTML, CSS, JavaScript, jQuery",
];

export default () => (
  <Poster
    title= "TYPING GAME"
    subtitle = "Mini GAME"
    description= {children[0]}
    imageUrl= {imgUrl}
    skill= {children[1]}
    webUrl= "http://did3296.dothome.co.kr/typing-game/"
    GithubUrl= "https://github.com/hyerimyang/typing-game"
  >
  </Poster>
);
