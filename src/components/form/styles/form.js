import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  width: 100vw;
  position: relative;
  top: -10%;
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
  overflow-y: hidden;
`;

export const Base = styled.form`
  background: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  height: 60%;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  padding: 0px 10px 0px 10px;
`;

export const Title = styled.h1`

  color: black;
  font-size: 30px;
`;

export const Text = styled.p``;

export const TextSmall = styled.p`
  font-family: 'Work Sans', sans-serif;
  color: black;
  text-align: center;
`;

export const Input = styled.input`
  width: 90%;
  padding: 10px;
  font-family: 'Inconsolata', sans-serif;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 20px;

  &::placeholder {
    color: black;
  }
`;

export const Submit = styled.button`
  width: 50%;
  padding: 10px;
  font-size: 20px;
  border-radius: 5px;
  background: rgb(0,100,147);
  border-color: transparent;
  color: white;
  font-family: 'Inconsolata', sans-serif;

  &:hover {
    cursor: pointer;
    background: rgb(0,100,147);
    color: white;
    border: 2px solid white;
  }
`;

export const Error = styled.p``;

export const Link = styled.a``;
