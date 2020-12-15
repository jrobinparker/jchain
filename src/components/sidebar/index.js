import React from 'react';
import { Container, Icon, Avatar, Group, Link } from './styles/sidebar';

export default function Sidebar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}


Sidebar.Icon = function SidebarIcon({ children, ...restProps }) {

  return (
    <Icon {...restProps}>
      <div />
      <div />
      <div />
    </Icon>
  )
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
