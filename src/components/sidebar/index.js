import React from 'react';
import { Container, Group, Link } from './styles/sidebar';

export default function Sidebar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Sidebar.Group = function SidebarGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

Sidebar.Link = function SidebarLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}
