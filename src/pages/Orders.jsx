import React, { useEffect, useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { Header, Footer } from '../components';
import ApiData from '../data/ApiData';

const Orders = () => {

  const gridOrderImage = (props) => (
    <div>
      <img
        className="rounded-xl h-20 md:ml-3"
        src={props.ProductImage}
        alt="order-item"
      />
    </div>
  );

  const gridOrderStatus = (props) => (
    <button
      type="button"
      style={{ background: props.StatusBg }}
      className="text-white py-1 px-2 capitalize rounded-2xl text-md"
    >
      {props.Status}
    </button>
  );
  
  const ordersGrid = [
    {
      headerText: 'Image',
      template: gridOrderImage,
      textAlign: 'Center',
      width: '120',
    },
    {
      field: 'OrderItems',
      headerText: 'Item',
      width: '150',
      editType: 'dropdownedit',
      textAlign: 'Center',
    },
    { field: 'CustomerName',
      headerText: 'Customer Name',
      width: '150',
      textAlign: 'Center',
    },
    {
      field: 'TotalAmount',
      headerText: 'Total Amount',
      format: '###.## €' ,
      textAlign: 'Center',
      editType: 'numericedit',
      width: '150',
    },
    {
      headerText: 'Status',
      template: gridOrderStatus,
      field: 'OrderItems',
      textAlign: 'Center',
      width: '120',
    },
    {
      field: 'OrderID',
      headerText: 'Order ID',
      width: '120',
      textAlign: 'Center',
    },
  
    {
      field: 'Location',
      headerText: 'Location',
      width: '150',
      textAlign: 'Center',
    },
  ];

  const [ordersDataApi, setOrdersDataApi] = useState({});

  const getOrders = async () => {
    const orderApi = new ApiData();
    const orders = await orderApi.getOrders();
    setOrdersDataApi(orders);
  }

  useEffect(()=>{
    getOrders();
  },[])

  

  return (
    <div className='mt-20 md:mt-0 lg:mt-0'> 
    <div className='m-2 md:m-10 p-3 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Orders"/>
      <GridComponent
        id="gridcomp"
        dataSource={ordersDataApi}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item,index)=>(
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]}/>
      </GridComponent>
    </div>
    <Footer/>
    </div>
  )
}

export default Orders