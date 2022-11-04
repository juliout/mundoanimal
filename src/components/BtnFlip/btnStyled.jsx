import styled from "styled-components";


export const BtnDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
div {
  
  text-decoration: none;
  transition: color 0.2s;
  width: 100%;
  outline: none;
  font-family: 'Poppins', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  a {
    color: ${p=>p.color || 'black'};
  }
}

div:hover,
div:focus {
  color: black;
}

  div.flip-animate {
    text-align: center;
  a {
    position: relative;
    display: inline-block;
    padding: 0;    
    transition: transform 0.2s;
    transform-origin: 50% 0;
    transform-style: preserve-3d;
  }

  a:before {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    content: attr(data-back);
    transition: color 0.2s;
    transform: rotateX(-90deg);
    transform-origin: 50% 0;
    text-align: center;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover a,
  &:focus a {
    transform: rotateX(90deg) translateY(-22px);
  }

  &:hover a:before,
  &:focus a:before {
    color: ${p=>p.secondColor || 'black'};
  }
  }


`
