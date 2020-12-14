import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from '../components';

import { defaults } from 'react-chartjs-2'

defaults.global.defaultFontFamily = 'Work Sans'

export default function Chart() {
  const [ chartData, setChartData ] = useState({})

  const chart = () => {
    setChartData({
      labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
      datasets: [
        {
          label: 'holdings',
          data: [32, 45, 12, 76, 69],
          backgroundColor: [
            'rgba(75, 192, 192, 0.6)'
          ]
        },
        {
          label: 'sales',
          data: [100, 10, 1000, 20, 900],
          backgroundColor: [
            'rgba(200, 200, 192, 0.6)'
          ],
        }
      ]
    })
  }
    useEffect(() => {
      chart()
    }, [])

    return (
      <div style={{ width: '90%', height: '60%', backgroundColor: 'aliceblue', padding: '10px', borderRadius:'5px' }}>
          <Line
            data={chartData}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
      </div>
    )
}
