import React from 'react'
import {ChartComponent,Inject, 
  SeriesDirective,SeriesCollectionDirective
  ,Legend,ColumnSeries}
   from "@syncfusion/ej2-react-charts"
import {barChartData2,barChartData1,barChartData3} from "../../data/dummy"
const Bar = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white
    dark:bg-secondary-dark-bg rounded-3xl' >
      <ChartComponent
      primaryXAxis={{valueType:"Double"}}
      title="Olympic Medal Counts - RIO"
      legendSettings={{ background: 'white' }}
      >
        
        <Inject services={[ColumnSeries,Legend]} />
       
          <SeriesCollectionDirective >
          <SeriesDirective
          type='Column' 
          xName='overs'
          yName='runs'
          name='USA'
          dataSource={barChartData1} >
          </SeriesDirective>
          <SeriesDirective
          type='Column' 
          xName='overs'
          yName='runs'
          name='GBR'
          dataSource={barChartData2} >
          </SeriesDirective>
          <SeriesDirective
          type='Column' 
          xName='overs'
          yName='runs'
          name='CHN'
          dataSource={barChartData3} >
          </SeriesDirective>
          </SeriesCollectionDirective>

      </ChartComponent>
    </div>
  )
}

export default Bar