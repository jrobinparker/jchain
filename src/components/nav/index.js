import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
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

Nav.Link = function NavLink({ to, children, ...restProps }) {
  return (
    <ReactRouterLink to={to} {...restProps}>
      {children}
    </ReactRouterLink>
  )
}
