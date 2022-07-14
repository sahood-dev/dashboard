import React from 'react'
import { PieData } from '../../data/dummy'
import {Inject,PieSeries,AccumulationDataLabel,AccumulationLegend,AccumulationTooltip,
  AccumulationChartComponent,AccumulationSeriesCollectionDirective,AccumulationSeriesDirective}
   from "@syncfusion/ej2-react-charts"
const Pie = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white
    dark:bg-secondary-dark-bg rounded-3xl' >
      <AccumulationChartComponent title='Mobile Browser Statistics' 
     legendSettings={{position:"Bottom"}}
     tooltip={{enable:true}}>
      <Inject services={[PieSeries, AccumulationDataLabel,AccumulationLegend,AccumulationTooltip]}  />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective type='Pie' 
        dataSource={PieData}
        xName="name"
        yName='value'
        innerRadius='30%'
        dataLabel={{visible:true,name:"text",position:"Inside"}}
         >
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
     </AccumulationChartComponent>
    </div>
  )
}

export default Pie