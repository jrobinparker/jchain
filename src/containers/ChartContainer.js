import React, { useContext, useEffect, useState } from 'react';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { FirebaseContext } from '../context/firebase';
import { defaults } from 'react-chartjs-2'

defaults.global.defaultFontFamily = 'Work Sans'
defaults.global.defaultFontColor = 'white'

export default function ChartContainer({ data, dataType, type }) {
  const [ firebaseData, setFirebaseData ] = useState({});
  const [ chartData, setChartData ] = useState({});
  const { firebase } = useContext(FirebaseContext);


  const holdingsActivityChart = () => {
    setChartData({
      datasets: [
        {
          data: [ ...data ],
          backgroundColor: [
            '#736CED',
            '#9F9FED',
            '#D4C1EC',
            '#2D898B'
          ]
        }
      ],
      labels: ['JCHN', 'BTC', 'ETH', 'VET']
    })
  }


  const walletActivityChart = () => {
    setChartData({
      datasets: [
        {
          data: [1000, 2000],
          backgroundColor: [
            '#56C6C8',
            '#993955'
          ]
        }
      ],
      labels: ['Deposits', 'Withdrawals']
    })
  }

  const salesActivityChart = () => {
    setChartData({
      labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
      datasets: [
        {
          label: 'sales',
          data: [32, 45, 12, 76, 69],
          borderColor: [
            'rgba(75, 192, 192, 0.6)'
          ]
        }
      ]
    })
  }

    useEffect(() => {
      if (dataType === 'holdings') {
        holdingsActivityChart()
      }

      if (dataType === 'wallet') {
        walletActivityChart()
      }

      if (dataType === 'sales') {
        salesActivityChart()
      }
    }, [dataType])

    switch (dataType) {
      case 'doughnut': return (
      <div style={{ width: '90%', height: '50%', backgroundColor: 'transparent', padding: '10px', borderRadius:'5px' }}>
          <Doughnut
            data={chartData}
            options={{ responsive: true, maintainAspectRatio: false, legend: false }}
          />
      </div>
      );
      case 'bar': return (
        <div style={{ width: '90%', height: '50%', backgroundColor: 'transparent', padding: '10px', borderRadius:'5px' }}>
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
