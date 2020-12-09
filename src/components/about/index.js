import React from 'react';
import { Item, Inner, Container, Frame, Header, Subtitle, Image, FrameHeader, FrameSubtitle } from './styles/about';

export default function About({ direction, children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

About.Frame = function AboutFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}


About.Item = function AboutItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}

About.Header = function AboutHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>
}

About.Subtitle = function AboutSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}

About.Image = function AboutImage({ src, ...restProps }) {
  return <Image src={`./images/${src}.svg`} {...restProps} />
}

About.FrameHeader = function AboutFrameHeader({ children, ...restProps }) {
  return <FrameHeader {...restProps}>{children}</FrameHeader>
}

About.FrameSubtitle = function AboutFrameSubtitle({ children, ...restProps }) {
  return <FrameSubtitle {...restProps}>{children}</FrameSubtitle>
}
