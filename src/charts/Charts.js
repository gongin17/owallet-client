import React from 'react';
import {Chart} from 'react-google-charts'

export  const data = [
  ['Date', 'Deposits', 'Withdrawals'],
  [new Date('2023-10-01'), 1000, -500],
  [new Date('2023-10-02'), 800, -200],
  [new Date('2023-10-03'), 1200, -300],
  
];
 
  export const options = {
    title: 'Deposit and Withdrawal Transactions',
    curveType: 'function',
    legend: { position: 'bottom' },
    hAxis: {
      format: 'MMM d, yyyy', 
    },
  };

const Charts = () => {
  return (
    <Chart
    chartType="LineChart"
    data={data}
    options={options}
    width={"100%"}
    height={"400px"}
  />
  )
}

export default Charts