import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  margin: 0 50px;
  height: 70vh;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;

  }
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 15px 0;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;


export const Title = styled.h1`
  color: black;
  font-size: 50px;
`;

export const Subtitle = styled.p`
  color: black;
  font-size: 30px;
`;

export const Image = styled.img`
  height: auto;
  width: 50%;
`;

export const Button = styled.button`
  width: 50%;
  padding: 20px;
  font-size: 30px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: transparent;
  font-family: 'Montserrat', sans-serif;

  &:hover {
    cursor: pointer;
    background-color: rgba(0,110,106,1);
    color: white;
    backdrop-filter: blur(40px);
    border-color: transparent;
  }
`;
