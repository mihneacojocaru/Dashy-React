import React from 'react'
import { ChartsHeader, Pie as PieChart } from '../../components';

const Pie = () => {

  const pieChartData = [
    { x: 'Labour', y: 18, text: '18%' },
    { x: 'Legal', y: 8, text: '8%' },
    { x: 'Production', y: 15, text: '15%' },
    { x: 'License', y: 11, text: '11%' },
    { x: 'Facilities', y: 18, text: '18%' },
    { x: 'Taxes', y: 14, text: '14%' },
    { x: 'Insurance', y: 16, text: '16%' },
  ];

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Pie" title="Project Cost Breakdown" />
    <div className="w-full">
      <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
    </div>
  </div>
  )
}

export default Pie;
