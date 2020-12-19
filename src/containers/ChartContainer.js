import React, { useContext, useEffect, useState } from 'react';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
import moment from 'moment';

defaults.global.defaultFontFamily = 'Work Sans'
defaults.global.defaultFontColor = 'white'

export default function ChartContainer({ dataType, chartType, firebaseData }) {
  const [ chartData, setChartData ] = useState({});

  const holdingsActivityChart = firebaseData => {
    let amounts = [], labels = []

    firebaseData.map(dataObj => {
      amounts.push(dataObj.amount)
      labels.push(dataObj.currency)
    })

    setChartData({
      datasets: [
        {
          data: amounts,
          backgroundColor: [
            '#736CED',
            '#9F9FED',
            '#D4C1EC',
            '#2D898B'
          ]
        }
      ],
      labels: labels
    })
  }


  const walletActivityChart = firebaseData => {
    const purchases = firebaseData.filter(data => data.type === 'purchase')
    const withdrawals = firebaseData.filter(data => data.type === 'withdrawal')
    const transfers = firebaseData.filter(data => data.type === 'transfer')
    const refunds = firebaseData.filter(data => data.type === 'refund')

    setChartData({
      datasets: [
        {
          data: [purchases.length, withdrawals.length, transfers.length, refunds.length],
          backgroundColor: [
            '#3e95cd',
            '#56C6C8',
            '#993955',
            '#2D898B'
          ]
        }
      ],
      labels: ['Purchases', 'Withdrawals', 'Transfers', 'Refunds']
    })
  }

  const salesActivityChart = (firebaseData) => {
    let purchases = [], withdrawals = [], transfers = [], refunds = []

    firebaseData.map(data => {
      switch(data.type) {
        case 'purchase': purchases.push(data.cost);
        case 'withdrawal': withdrawals.push(data.cost);
        case 'transfer': transfers.push(data.cost);
        case 'refund': refunds.push(data.cost);
      }
    })

    while (purchases.length < 7) purchases.push(0)
    while (withdrawals.length < 7) withdrawals.push(0)
    while (transfers.length < 7) transfers.push(0)
    while (refunds.length < 7) refunds.push(0)

    setChartData({
      datasets: [
        {
          data: purchases,
          borderColor: '#3e95cd',
          label: 'purchase'
        },
        {
          data: withdrawals,
          borderColor: '#56C6C8',
          label: 'withdrawal'
        },
        {
          data: transfers,
          borderColor: '#993955',
          label: 'transfer'
        },
        {
          data: refunds,
          borderColor: '#2D898B',
          label: 'refund'
        },
      ],
      labels: ['12/12', '12/13', '12/14', '12/15', '12/16', '12/17', '12/18']
    })
  }

    useEffect(() => {
      if (dataType === 'holdings') {
        holdingsActivityChart(firebaseData)
      }

      if (dataType === 'wallet') {
        walletActivityChart(firebaseData)
      }

      if (dataType === 'sales') {
        salesActivityChart(firebaseData)
      }
    }, [dataType, firebaseData])

    switch (chartType) {
      case 'doughnut': return (
      <div style={{ width: '90%', height: '50%', backgroundColor: 'transparent', padding: '10px', borderRadius:'5px' }}>
          <Doughnut
            data={chartData}
            options={{ responsive: true, maintainAspectRatio: false, legend: false }}
          />
      </div>
      );
      case 'bar': return (
        <div style={{ width: '97%', height: '80%', backgroundColor: 'transparent', padding: '10px', borderRadius:'5px' }}>
            <Bar
              data={chartData}
              options={{ responsive: true, maintainAspectRatio: false, legend: false }}
            />
        </div>
      );
      case 'line': return (
        <div style={{ width: '97%', height: '80%', backgroundColor: 'transparent', padding: '10px', borderRadius:'5px' }}>
                <Line
                  data={chartData}
                  options={{ responsive: true, maintainAspectRatio: false, legend: false }}
                />
            </div>
        );
      default: return null;
    }
  }
