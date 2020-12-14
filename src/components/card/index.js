import React from 'react';
import { Container, Title, List, Item } from './styles/card';

export default function Card({ children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Card.List = function CardList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>
}

Card.Item = function CardItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}