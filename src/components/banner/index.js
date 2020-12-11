import React from 'react';
import { Container, Frame, Title, Subtitle, Image, Button } from './styles/banner';

export default function Banner({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Banner.Frame = function BannerFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

Banner.Title = function BannerTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Banner.Subtitle = function BannerSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}

Banner.Image = function BannerImage({ src, ...restProps }) {
  return <Image src={`./images/${src}.png`} {...restProps} />
}

Banner.Button = function BannerButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>
}
