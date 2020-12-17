import React from 'react';
import { Container, Large, Title, Graph, List, Item, Info, Table, TableRow, TableHeader, TableText } from './styles/card';

export default function Card({ children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Card.Large = function CardLarge({ children, ...restProps }) {
  return <Large {...restProps}>{children}</Large>
}

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Card.Graph = function CardGraph({ children, ...restProps }) {
  return <Graph {...restProps}>{children}</Graph>
}

Card.List = function CardList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>
}

Card.Item = function CardItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}

Card.Info = function CardInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>
}

Card.Table = function CardTable({ children, ...restProps }) {
  return <Table {...restProps}>{children}</Table>
}

Card.TableRow = function CardRow({ children, ...restProps }) {
  return <TableRow {...restProps}>{children}</TableRow>
}

Card.TableHeader = function CardTableHeader({ children, ...restProps }) {
  return <TableHeader {...restProps}>{children}</TableHeader>
}

Card.TableText = function CardTableText({ children, ...restProps }) {
  return <TableText {...restProps}>{children}</TableText>
}
