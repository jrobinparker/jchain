import React from 'react';
import { Container, Brand, Link } from './styles/nav';

export default function Nav({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Nav.Brand = function NavBrand({ children, ...restProps }) {
  return <Brand {...restProps}>{children}</Brand>
}

Nav.Link = function NavLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}
