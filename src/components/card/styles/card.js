import styled from 'styled-components';

export const Container = styled.div`
  height: 30%;
  width: 40%;
  border: .25px solid lightgray;
  padding: 0px;
  border-radius: 5px;
  margin-bottom: 20px;
  background: aliceblue;

  &:last-of-type {
    width: 90%;
    height: 50%;
  }
`;

export const Title = styled.h1`
  color: #E6EBE0;
  font-size: 20px;
  background: #22817F;
  margin: 0;
  width: 100%;
  padding: 10px 0px 10px 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const Graph = styled.div`
  display: flex;
  background: black;
`

export const List = styled.ul`
  list-style: none;
  color: black;
  margin-left: -30px;
`;

export const Item = styled.li`
  text-align: left;
`;
