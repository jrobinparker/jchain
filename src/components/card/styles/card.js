import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border: none;
  padding: 0px 0px 10px 0px;
  border-radius: 5px;
  margin-bottom: 20px;
  background: #272953;
  display: flex;
  flex-direction: column;
`;

export const Large = styled(Container)`
  height: 50%;
`;

export const Title = styled.h1`
  color: white;
  font-size: 20px;
  margin-left: 10px;

  @media (max-width: 1440px) {
    font-size: 15px;
  }
`;

export const Info = styled.p`
  color: white;
  font-size: 20px;
  margin-left: 10px;

  @media (max-width: 1440px) {
    font-size: 15px;
    line-height: 1px;
  }
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
  color: white;
`;

export const Table = styled.table`
  width: 97%;
  margin-left: 10px;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`

  &:first-of-type {
    background: #736CED;
  }

  &:nth-child(even) {
  }
`;

export const TableHeader = styled.th`
  font-size: 20px;
  text-align: left;

  @media (max-width: 1440px) {
    font-size: 15px;
  }
`;

export const TableText = styled.td`
  width: 25%;

  @media (max-width: 1440px) {
    font-size: 15px;
  }
`;
