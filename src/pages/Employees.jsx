import React from 'react'
import { GridComponent,ColumnDirective,Page,
  Search,Toolbar,Inject,ColumnsDirective} from
  "@syncfusion/ej2-react-grids"

import { employeesData,
  employeesGrid } from '../data/dummy'
import { Header } from '../components'
const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 
    bg-white rounded-3xl' >
      <Header catogory="Page" title="Employees" />
      <GridComponent
      dataSource={employeesData}
      allowPaging
      allowSorting
      toolbar={['Search']}
      width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item,index) => {
          return <ColumnDirective key={index} {...item} />
          })}
        </ColumnsDirective>
        <Inject services={[Page,Search,Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees