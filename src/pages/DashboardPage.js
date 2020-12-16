import React from 'react';
import SidebarContainer from '../containers/SidebarContainer';
import { Dashboard, Card } from '../components';
import ChartContainer from '../containers/ChartContainer';

export default function DashboardPage() {
  return (
    <Dashboard>
      <SidebarContainer />
      <Dashboard.Content>
          <Card>
            <Card.Title>Recent activity</Card.Title>
            <Card.List>
              <Card.Item>deposit</Card.Item>
              <Card.Item>withdrawal</Card.Item>
              <Card.Item>convert to BTC</Card.Item>
              <Card.Item>convert to ETH</Card.Item>
              <Card.Item>item purchased</Card.Item>
              <Card.Item>item purchased</Card.Item>
              <Card.Item>deposit</Card.Item>

            </Card.List>
          </Card>
          <Card>
            <Card.Title>Messages</Card.Title>
            <Card.Table>
              <Card.TableRow>
                <Card.TableHeader>Subject</Card.TableHeader>
                <Card.TableHeader>Sender</Card.TableHeader>
                <Card.TableHeader>Date</Card.TableHeader>
              </Card.TableRow>
              <Card.TableRow>
                <Card.TableText>Help</Card.TableText>
              </Card.TableRow>
            </Card.Table>
          </Card>
      </Dashboard.Content>
      <Dashboard.Content>
        <Dashboard.Cards>
          <Card>
            <Card.Title>Current holdings</Card.Title>
            <ChartContainer data='holdings' type='doughnut'/>
          </Card>
          <Card>
            <Card.Title>Wallet overall activity</Card.Title>
            <ChartContainer data='wallet' type='doughnut' />
          </Card>
          <Card.Large>
            <Card.Title>Sales activity</Card.Title>
            <ChartContainer data='sales' type='line' />
          </Card.Large>
        </Dashboard.Cards>
      </Dashboard.Content>
    </Dashboard>
  )
}
