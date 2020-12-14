import React, { Fragment } from 'react';
import SidebarContainer from '../containers/SidebarContainer';
import { Dashboard } from '../components';
import { Card } from '../components';

export default function DashboardPage() {
  return (
    <Dashboard>
      <SidebarContainer />
      <Dashboard.Content>
      <Dashboard.Title>user.username - jchain dashboard</Dashboard.Title>
        <Dashboard.Cards>
          <Card>
            <Card.Title>Recent activity</Card.Title>
            <Card.List>
              <Card.Item>12/14/2020: ITEM PURCHASED</Card.Item>
              <Card.Item>12/14/2020: ITEM PURCHASED</Card.Item>
              <Card.Item>12/14/2020: REFUND TO CUSTOMER</Card.Item>
              <Card.Item>12/13/2020: ITEM PURCHASED</Card.Item>
            </Card.List>
          </Card>
          <Card>
            <Card.Title>Current holdings</Card.Title>
          </Card>
          <Card>
            <Card.Title>Graph</Card.Title>
          </Card>
        </Dashboard.Cards>
      </Dashboard.Content>
    </Dashboard>
  )
}
