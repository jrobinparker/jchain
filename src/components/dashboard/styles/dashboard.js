import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background: lightgray;
  overflow-x: hidden;
  overflow-y: hidden
`;

export const Title = styled.h1`
  color: black;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-top: 10px;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  padding: 30px 20px;
`;
