import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';

import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Bar = () => {
  const { currentMode } = useStateContext();

  const barPrimaryXAxis = {
    valueType: 'Category',
    interval: 1,
    majorGridLines: { width: 0 },
  };

  const barPrimaryYAxis = {
    majorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    lineStyle: { width: 0 },
    labelStyle: { color: 'transparent' },
  };

  const barChartData = [
    [
      { x: 'USA', y: 46 },
      { x: 'GBR', y: 27 },
      { x: 'CHN', y: 26 },
    ],
    [
      { x: 'USA', y: 37 },
      { x: 'GBR', y: 23 },
      { x: 'CHN', y: 18 },
    ],
    [
      { x: 'USA', y: 38 },
      { x: 'GBR', y: 17 },
      { x: 'CHN', y: 26 },
    ],
  ];

  const barCustomSeries = [
    {
      dataSource: barChartData[0],
      xName: 'x',
      yName: 'y',
      name: 'Gold',
      type: 'Column',
      marker: {
        dataLabel: {
          visible: true,
          position: 'Top',
          font: { fontWeight: '600', color: '#ffffff' },
        },
      },
    },
    {
      dataSource: barChartData[1],
      xName: 'x',
      yName: 'y',
      name: 'Silver',
      type: 'Column',
      marker: {
        dataLabel: {
          visible: true,
          position: 'Top',
          font: { fontWeight: '600', color: '#ffffff' },
        },
      },
    },
    {
      dataSource: barChartData[2],
      xName: 'x',
      yName: 'y',
      name: 'Bronze',
      type: 'Column',
      marker: {
        dataLabel: {
          visible: true,
          position: 'Top',
          font: { fontWeight: '600', color: '#ffffff' },
        },
      },
    },
  ];

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />
      <div className=" w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
          <SeriesCollectionDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;
