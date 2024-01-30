import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, Edit, Inject, Selection, Toolbar } from '@syncfusion/ej2-react-grids';
import { Header } from '../components';

import { customersData, customersGrid } from '../data/dummy';


const Customers = () => {
  return (
      
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Customers" />
    <GridComponent
      id="gridcomp"
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Delete']}
      width="auto"
      editSettings={{allowDeleting: true, allowEditing: true}}
    >
      <ColumnsDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
      </ColumnsDirective>
      <Inject services={[Filter, Page, Edit, Sort, Selection, Toolbar]} />
    </GridComponent>
  </div>
);
}

export default Customers