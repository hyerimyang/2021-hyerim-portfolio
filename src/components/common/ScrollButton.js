import React, {useState} from 'react';
import { VscArrowUp } from "react-icons/vsc";
import styled from 'styled-components';
  
const Button = styled.div`
  position: fixed; 
  width: 55px; height: 55px;
  text-align: center;
  border-radius: 100%;
  right: 60px;
  bottom: 50px;
  font-size: 2rem;
  padding-top: 12px;
  z-index: 1;
  cursor: pointer;
  color: rgb(43,43,45);
  background-color: rgba(255,255,255,0.7);

`

const ScrollButton = () =>{
  const [visible, setVisible] = useState(false);
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 900){
      setVisible(true)
    } 
    else if (scrolled <= 900){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button style={{display: visible ? 'inline' : 'none'}} >
     <VscArrowUp onClick={scrollToTop} 
      />
    </Button>
  );
}
  
export default ScrollButton;

