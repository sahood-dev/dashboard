import React from 'react'
import { ChartComponent, SeriesCollectionDirective,
  SeriesDirective,Inject,Legend
  , ColumnSeries } from
   '@syncfusion/ej2-react-charts'

import {stackedChartData1,stackedChartData2} from '../../data/dummy'

const Stacked = ({width,height}) => {
  return (
    <ChartComponent 
    width={width}
    height={height}
    primaryXAxis={{valueType:"Double"}}
    chartArea={{border:{width:0}}}
    title="Budget"
    legendSettings={{visible:true}}
    >
      <Inject services={[Legend,ColumnSeries]} />
        <SeriesCollectionDirective>
          {/* {stackedCustomSeries.map((item,index) => {
          return <SeriesDirective key={index} {...item} />
})} */}
          <SeriesDirective
          type='Column' 
          xName='overs'
          yName='runs'
          name='Expenses'
          dataSource={stackedChartData1} >
          </SeriesDirective>
          <SeriesDirective
          type='Column' 
          xName='overs'
          yName='runs'
          name='Income'
          dataSource={stackedChartData2} >
          </SeriesDirective>
        </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked