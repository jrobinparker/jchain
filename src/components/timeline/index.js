import React from 'react'
import { Container, Header, Subtitle, Frame, Line, Group, Item, Point, Text } from './styles/timeline';

export default function Timeline({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Timeline.Header = function TimelineHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>
}

Timeline.Subtitle = function TimelineSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}

Timeline.Frame = function TimelineFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

Timeline.Line = function TimelineLine({ children, ...restProps }) {
  return <Line {...restProps}>{children}</Line>
}

Timeline.Group = function TimelineGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

Timeline.Item = function TimelineItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}

Timeline.Point = function TimelinePoint({ ...restProps }) {
  return <Point {...restProps} />
}

Timeline.Text = function TimelineText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}
