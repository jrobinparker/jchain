import React from 'react';
import { Container, Frame, Header, Link, IconRow, Icon, Disclaimer } from './styles/footer';

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Footer.Frame = function FooterFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

Footer.Header = function FooterHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>
}

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}

Footer.IconRow = function FooterIconRow({ children, ...restProps }) {
  return <IconRow {...restProps}>{children}</IconRow>
}

Footer.Disclaimer = function FooterDisclaimer({ children, ...restProps }) {
  return <Disclaimer {...restProps}>{children}</Disclaimer>
}
