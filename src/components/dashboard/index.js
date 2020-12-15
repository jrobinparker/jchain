import React, { useState } from 'react';
import { Container, Title, Cards, Content } from './styles/dashboard';

export default function Dashboard({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Dashboard.Title = function DashboardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Dashboard.Content = function DashboardContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>
}

Dashboard.Cards = function DashboardCards({ children, ...restProps }) {
  return <Cards {...restProps}>{children}</Cards>
}
