import React from 'react';
import { Container, Title, Subtitle, Frame, Button, Image } from './styles/gettingstarted';

export default function GettingStarted({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

GettingStarted.Title = function GettingStartedTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

GettingStarted.Frame = function GettingStartedFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

GettingStarted.Subtitle = function GettingStartedSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}

GettingStarted.Button = function GettingStartedButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>
}

GettingStarted.Image = function GettingStartedImage({ src, ...restProps }) {
  return <Image src={`./images/${src}.png`} {...restProps} />
}
