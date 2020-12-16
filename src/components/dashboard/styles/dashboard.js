import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  background: #16113A;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const Title = styled.h1`
  color: black;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  padding: 10px;
  position: relative;
  left: -5%;

  &:last-of-type {
    width: 30%;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
