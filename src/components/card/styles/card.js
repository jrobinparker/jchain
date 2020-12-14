import styled from 'styled-components';

export const Container = styled.div`
  height: 30%;
  width: 40%;
  border: .25px solid lightgray;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  background: aliceblue;

  &:last-of-type {
    width: 90%;
    height: 50%;
  }
`;

export const Title = styled.h1`
  color: black;
  font-size: 20px;
`;

export const Graph = styled.div`
  display: flex;
  background: black;
`

export const List = styled.ul`
  list-style: none;
  color: black;
  margin-left: -40px;
`;

export const Item = styled.li`
  text-align: left;
`;
