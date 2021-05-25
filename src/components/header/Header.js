import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 60px 0 20px 0;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media all and (max-width: 425px) {
    justify-content: space-around;
    margin-bottom: 0px;
  }
`

const SLink = styled(Link)`
  font-size: 4.7rem;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  color: ${props => (props.current) ? "black" : "#2b2b2d"};

  &::after {
    content: '';
    position: absolute;
    top: 0px; right: -20px; 
    width: 20px; 
    height: 20px;
    border-radius: 20px;
    background-color: #ff2817;
    display: ${props => (props.current) ? "block" : "none"};
  }

  &:hover { color: #000; }
  &:hover:after { display: block; }

  @media all and (max-width: 1440px) {
    font-size: 4rem;
  }

  @media all and (max-width: 1024px) {
    font-size: 3rem;
  }

  @media all and (max-width: 768px) {
    font-size: 1.5rem;

    &::after {
      width: 10px; 
      height: 10px;
      right: -10px; 
    }
  }
  
  @media all and (max-width: 425px) {
    font-size: 1rem;
    &::after {
      width: 7px; 
      height: 7px;
      right: -7px; 
    }
  }

`;

export default withRouter(({ location: { pathname } }) => (
  <Container>
    <SLink to="/" current={pathname === "/"}>
      ABOUT
    </SLink>
    <SLink to="/work" current={pathname === "/work"}>
      WORK
    </SLink>
    <SLink to="/skill" current={pathname === "/skill"}>
      SKILL
    </SLink>
    <SLink to="/contact" current={pathname === "/contact"}>
      CONTACT
    </SLink>
  </Container>
));
