import React from 'react';
import { Container, Avatar, Group, Link } from './styles/sidebar';

export default function Sidebar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Sidebar.Avatar = function SidebarAvatar({ src, ...restProps }) {
  return <Avatar src={`./images/${src}.png`} {...restProps} />
}

Sidebar.Group = function SidebarGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

Sidebar.Link = function SidebarLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}
