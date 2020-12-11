import React from 'react';
import { Container, Group, Brand, Link } from './styles/nav';

export default function Nav({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Nav.Brand = function NavBrand({ children, ...restProps }) {
  return <Brand {...restProps}>{children}</Brand>
}

Nav.Group = function NavGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

Nav.Link = function NavLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}
