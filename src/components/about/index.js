import React from 'react';
import { Container, Header, Subtitle, Image } from './styles/about';

export default function About({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

About.Header = function AboutHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>
}

About.Subtitle = function AboutSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}

About.Image = function AboutImage({ src, ...restProps }) {
  return <Image src={`./assets/${src}.svg`} {...restProps} />
}
