import React from 'react';
import SidebarContainer from '../containers/SidebarContainer';
import { Dashboard, Card } from '../components';
import ChartContainer from '../containers/ChartContainer';

export default function DashboardPage() {
  return (
    <Dashboard>
      <SidebarContainer />
      <Dashboard.Content>
        <Dashboard.Cards>
          <Card>
            <Card.Title>Balance</Card.Title>
            <Card.Info>200,000 JCHN</Card.Info>
          </Card>
          <Card>
            <Card.Title>Transfers</Card.Title>
            <Card.Info>100 widthdrawals</Card.Info>
            <Card.Info>200 deposits</Card.Info>
          </Card>
          <Card>
            <Card.Title>Sales</Card.Title>
            <Card.Info>200 items sold</Card.Info>
          </Card>
        </Dashboard.Cards>
          <Card.Large>
            <Card.Title>Sales activity</Card.Title>
            <ChartContainer data='sales' type='line' />
          </Card.Large>
          <Dashboard.Cards>
          <Card>
            <Card.Title>All activity</Card.Title>
            <Card.Table>
              <Card.TableRow>
                <Card.TableHeader>Description</Card.TableHeader>
                <Card.TableHeader>Amount</Card.TableHeader>
                <Card.TableHeader>Date</Card.TableHeader>
              </Card.TableRow>
              <Card.TableRow>
                <Card.TableText>Item purchased</Card.TableText>
                <Card.TableText>250 JCHN</Card.TableText>
                <Card.TableText>12/15/2020</Card.TableText>
              </Card.TableRow>
              <Card.TableRow>
                <Card.TableText>Item purchased</Card.TableText>
                <Card.TableText>250 JCHN</Card.TableText>
                <Card.TableText>12/15/2020</Card.TableText>
              </Card.TableRow>
              <Card.TableRow>
                <Card.TableText>Item purchased</Card.TableText>
                <Card.TableText>250 JCHN</Card.TableText>
                <Card.TableText>12/15/2020</Card.TableText>
              </Card.TableRow>
              <Card.TableRow>
                <Card.TableText>Item purchased</Card.TableText>
                <Card.TableText>250 JCHN</Card.TableText>
                <Card.TableText>12/15/2020</Card.TableText>
              </Card.TableRow>
              <Card.TableRow>
                <Card.TableText>Item purchased</Card.TableText>
                <Card.TableText>250 JCHN</Card.TableText>
                <Card.TableText>12/15/2020</Card.TableText>
              </Card.TableRow>
              <Card.TableRow>
                <Card.TableText>Item purchased</Card.TableText>
                <Card.TableText>250 JCHN</Card.TableText>
                <Card.TableText>12/15/2020</Card.TableText>
              </Card.TableRow>
              <Card.TableRow>
                <Card.TableText>Item purchased</Card.TableText>
                <Card.TableText>250 JCHN</Card.TableText>
                <Card.TableText>12/15/2020</Card.TableText>
              </Card.TableRow>
              <Card.TableRow>
                <Card.TableText>Item purchased</Card.TableText>
                <Card.TableText>250 JCHN</Card.TableText>
                <Card.TableText>12/15/2020</Card.TableText>
              </Card.TableRow>
            </Card.Table>
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
                <Card.TableText>Customer</Card.TableText>
                <Card.TableText>12/15/2020</Card.TableText>
              </Card.TableRow>
              <Card.TableRow>
                <Card.TableText>Help</Card.TableText>
                <Card.TableText>Customer</Card.TableText>
                <Card.TableText>12/15/2020</Card.TableText>
              </Card.TableRow>
              <Card.TableRow>
                <Card.TableText>Help</Card.TableText>
                <Card.TableText>Customer</Card.TableText>
                <Card.TableText>12/15/2020</Card.TableText>
              </Card.TableRow>
              <Card.TableRow>
                <Card.TableText>Help</Card.TableText>
                <Card.TableText>Customer</Card.TableText>
                <Card.TableText>12/15/2020</Card.TableText>
              </Card.TableRow>
              <Card.TableRow>
                <Card.TableText>Help</Card.TableText>
                <Card.TableText>Customer</Card.TableText>
                <Card.TableText>12/15/2020</Card.TableText>
              </Card.TableRow>
              <Card.TableRow>
                <Card.TableText>Help</Card.TableText>
                <Card.TableText>Customer</Card.TableText>
                <Card.TableText>12/15/2020</Card.TableText>
              </Card.TableRow>
              <Card.TableRow>
                <Card.TableText>Help</Card.TableText>
                <Card.TableText>Customer</Card.TableText>
                <Card.TableText>12/15/2020</Card.TableText>
              </Card.TableRow>
              <Card.TableRow>
                <Card.TableText>Help</Card.TableText>
                <Card.TableText>Customer</Card.TableText>
                <Card.TableText>12/15/2020</Card.TableText>
              </Card.TableRow>
              <Card.TableRow>
                <Card.TableText>Help</Card.TableText>
                <Card.TableText>Customer</Card.TableText>
                <Card.TableText>12/15/2020</Card.TableText>
              </Card.TableRow>
            </Card.Table>
          </Card>
        </Dashboard.Cards>
      </Dashboard.Content>
      <Dashboard.Content>
        <Dashboard.Cards>
          <Card>
            <Card.Title>Current holdings</Card.Title>
            <ChartContainer data='holdings' type='doughnut'/>
            <Card.Info>32 JCHN</Card.Info>
            <Card.Info>45 BTC</Card.Info>
            <Card.Info>15 ETH</Card.Info>
            <Card.Info>76 VET</Card.Info>
          </Card>
          <Card>
            <Card.Title>Wallet overall activity</Card.Title>
            <ChartContainer data='wallet' type='doughnut' />
            <Card.Info>Deposits: 1000 JCHN</Card.Info>
            <Card.Info>Withdrawals: 2000 JCHN</Card.Info>
          </Card>
        </Dashboard.Cards>
      </Dashboard.Content>
    </Dashboard>
  )
}
