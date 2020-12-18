import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  background: #16113A;
  overflow-x: hidden;
  overflow-y: hidden;

  @media (orientation: portrait) {
    flex-direction: column;
    height: 100vh;
    justify-content: flex-start;
    overflow-y: scroll;
  }
`;

export const Title = styled.h1`
  color: black;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 6px;
  margin-right: 10px;
  position: relative;
  left: -5%;

  &:last-of-type {
    padding: 10px;
    width: 30%;
  }

  @media (orientation: portrait) {
    width: 90%;
    align-content: flex-start;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    left: 5%;

    &:last-of-type {
      width: 89%;
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  div {
    width: 32.5%;
    height: 80%;
  }

  &:last-of-type {
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    div {
      width: 100%;

      p {
        text-align: center;
      }
    }
  }

  @media (max-width: 1440px) {
    &:nth-of-type(3) {
      display: flex;
      flex-direction: row;

      div {
        width: 49%;
      }
    }
  }

  @media (orientation: portrait) {
    &:nth-of-type(3) {

      div {
        height: 95%;
      }

      table {
        margin-left: 1px;
      }
    }

    &:last-of-type {
      flex-direction: row;
      justify-content: space-around;
      width: 100%;
      margin-left: 0;
      &:last-of-type {

        p {
          display: none;
        }

        div {
          width: 45%;
        }
      }
    }
  }
`;
