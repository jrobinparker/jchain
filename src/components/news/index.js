import React from 'react';
import { Container, Header, Subheader, Frame, Item, Image, Title, Date } from './styles/news';

export default function News({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

News.Header = function NewsHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>
}

News.Subheader = function NewsSubheader({ children, ...restProps }) {
  return <Subheader {...restProps}>{children}</Subheader>
}

News.Frame = function NewsFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

News.Item = function NewsItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}

News.Image = function NewsImage({ src, ...restProps }) {
  return <Image src={`./images/${src}.jpg`} />
}

News.Title = function NewsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

News.Date = function NewsDate({ children, ...restProps }) {
  return <Date {...restProps}>{children}</Date>
}
