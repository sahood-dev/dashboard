import React from 'react'
import { finacialChartData } from '../../data/dummy'
import {
  Inject, ChartComponent, SeriesCollectionDirective, SeriesDirective,
   HiloSeries, DateTime, Tooltip
}
  from "@syncfusion/ej2-react-charts"

const Financial = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white
    dark:bg-secondary-dark-bg rounded-3xl' >
      <ChartComponent primaryXAxis={{
        valueType: "DateTime", labelFormat: "yMMM",
        title: 'Month'
      }} title="AAPL Historical"
        tooltip={{ enable: true }}
        primaryYAxis={{ title: "Price" }} >
        <Inject services={[HiloSeries, DateTime, Tooltip]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            type='Hilo'
            name='Apple Inc'
            dataSource={finacialChartData}
            xName='date'
            high='high'
            low='low'
          >

          </SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Financial