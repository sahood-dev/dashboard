import React from 'react'
import {SparklineComponent,Inject,
  SparklineTooltip,ChartComponent} from 
  '@syncfusion/ej2-react-charts'

const SparkLine = ({id,height,color,width,
  data,type,currnertColor}) => {
  return (
    <SparklineComponent 
    id={id}
    height={height}
    width={width}
    lineWidth={1}
    valueType='Numeric'
    fill={color}
    border={{ color:currnertColor,width:2 }}
    dataSource={data}
    xName='x'
    yName='yval'
    type={type}
    tooltipSettings={{
      visible:true,
      format: '${x} : data ${y}',
      trackLineSettings: {
        visible:true
      }
    }}

    >
      <Inject services={[SparklineTooltip]} /> 
    </SparklineComponent>



  )
}

export default SparkLine