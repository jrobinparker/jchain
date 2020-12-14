import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 50px;
  height: 75vh;
`;

export const Frame = styled.div.attrs(({ className }) => ({
  className: className
  }))`
  width: 100%;
  padding: 15px 0;
  opacity: 0;
  text-align: center;
  position: relative;
  top: 10%;
`;

export const Item = styled.div`
  width: 100%;
  text-align: center;
`;


export const Title = styled.h1`
  color: black;
  font-size: 50px;
`;

export const Subtitle = styled.p`
  color: black;
  font-size: 30px;
`;

export const Image = styled.img.attrs(({ className }) => ({
  className: className
  }))`
  height: auto;
  width: 50%;
  opacity: 0;
`;

export const Button = styled.button`
  width: 50%;
  padding: 20px;
  font-size: 30px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: transparent;
  font-family: 'Work Sans', sans-serif;

  &:hover {
    cursor: pointer;
    background-color: rgba(0,110,106,1);
    color: white;
    backdrop-filter: blur(40px);
    border-color: transparent;
  }
`;
