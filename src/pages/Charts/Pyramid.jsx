import React from 'react'
import { PieData } from '../../data/dummy'
import {Inject,PyramidSeries ,AccumulationDataLabel,
  AccumulationLegend,AccumulationTooltip,
  AccumulationChartComponent,AccumulationSeriesCollectionDirective,AccumulationSeriesDirective}
   from "@syncfusion/ej2-react-charts"

const Pyramid = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white
    dark:bg-secondary-dark-bg rounded-3xl' >
      <AccumulationChartComponent title='Mobile Browser Statistics' 
     legendSettings={{position:"Bottom"}}
     tooltip={{enable:true}}>
      <Inject services={[PyramidSeries, AccumulationDataLabel,AccumulationLegend,AccumulationTooltip]}  />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective 
        type='Pyramid' 
        dataSource={PieData}
        xName="name"
        yName='value'
        dataLabel={{visible:true,name:"text",position:"Inside"}}
         >

        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
     </AccumulationChartComponent>
    </div>
  )
}

export default Pyramid