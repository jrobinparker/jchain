import styled from 'styled-components';

export const Container = styled.div`
  height: 20%;
  width: 100%;
  border: none;
  padding: 0px;
  border-radius: 5px;
  margin-bottom: 20px;
  background: #272953;
`;

export const Large = styled(Container)`
  height: 45%;
`;

export const Title = styled.h1`
  color: white;
  font-size: 20px;
  margin-left: 10px;
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

export const Table = styled.table``;

export const TableRow = styled.tr``;

export const TableHeader = styled.th``;

export const TableText = styled.td``;
