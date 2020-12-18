import React from 'react';
import moment from 'moment';
import SidebarContainer from '../containers/SidebarContainer';
import useContent from '../hooks/useContent';
import { Dashboard, Card } from '../components';
import ChartContainer from '../containers/ChartContainer';


export default function DashboardPage() {
  const { holdings } = useContent('holdings');
  const { activity } = useContent('activity');

  return (
    <Dashboard>
      <SidebarContainer />
      <Dashboard.Content>
        <Dashboard.Cards>
          <Card>
            <Card.Title>JCHN Balance</Card.Title>
            {holdings.filter(data => data.currency === 'JCHN').map(data => <Card.Info>{data.amount} {data.currency}</Card.Info>)}
          </Card>
          <Card>
            <Card.Title>Pending items</Card.Title>
            <Card.Info>Purchases: 0</Card.Info>
            <Card.Info>Withdrawals: {activity.filter(data => data.type === 'withdrawal').length}</Card.Info>
            <Card.Info>Transfers: {activity.filter(data => data.type === 'transfer').length}</Card.Info>
          </Card>
          <Card>
            <Card.Title>Sales</Card.Title>
            <Card.Info>200 items sold</Card.Info>
          </Card>
        </Dashboard.Cards>
          <Card.Large>
            <Card.Title>Sales activity</Card.Title>
            <ChartContainer dataType='sales' chartType='line' />
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
              {activity.sort((a, b) => b.date - a.date).map(data => {
                return (
                <Card.TableRow>
                  <Card.TableText>{data.type}</Card.TableText>
                  <Card.TableText>{data.cost} {data.currency}</Card.TableText>
                  <Card.TableText>
                      {moment(data.date.toDate()).format("MM/DD/YYYY")}
                  </Card.TableText>
                </Card.TableRow>
                )
              })}
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
            <ChartContainer firebaseData={holdings} dataType='holdings' chartType='doughnut'/>
            {holdings.sort((a, b) => b.amount - a.amount).map(data => {
              return (
                <Card.Info>{data.amount} {data.currency}</Card.Info>
              )
            })}
          </Card>
          <Card>
            <Card.Title>Wallet overall activity</Card.Title>
            <ChartContainer firebaseData={activity} dataType='wallet' chartType='doughnut' />
            <Card.Info>Purchases: {activity.filter(data => data.type === 'purchase').length}</Card.Info>
            <Card.Info>Withdrawals: {activity.filter(data => data.type === 'withdrawal').length}</Card.Info>
            <Card.Info>Transfers: {activity.filter(data => data.type === 'transfer').length}</Card.Info>
          </Card>
        </Dashboard.Cards>
      </Dashboard.Content>
    </Dashboard>
  )
}
