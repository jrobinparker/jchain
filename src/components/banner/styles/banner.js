import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  width: 100vw;
  background: rgb(0,100,147);
  background: -moz-linear-gradient(342deg, rgba(0,100,147,1) 0%, rgba(0,0,0,1) 100%);
  background: -webkit-linear-gradient(342deg, rgba(0,100,147,1) 0%, rgba(0,0,0,1) 100%);
  background: linear-gradient(342deg, rgba(0,100,147,1) 0%, rgba(0,0,0,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#006493",endColorstr="#000000",GradientType=1);
  clip-path: ellipse(100% 55% at 48% 44%);
  margin-bottom: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Frame = styled.div`
  position: absolute;
  left: 4%;
  animation: fadeIn 1s linear;
  width: 50%;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h1``;

export const Subtitle = styled.p``;

export const Image = styled.img`
  width: 60%;
  height: auto;
  position: relative;
  right: -20%;
  top: 5%;
  animation: fadeIn 1s linear;
`;

export const Button = styled.button`
  width: 50%;
  padding: 20px;
  font-size: 30px;
  border: 2px solid white;
  border-radius: 5px;
  background-color: transparent;
  color: white;
  font-family: 'Inconsolata', sans-serif;

  &:hover {
    cursor: pointer;
    background-color: rgba(0,110,106,1);
    color: white;
    backdrop-filter: blur(40px);
    border-color: transparent;
  }
`;
