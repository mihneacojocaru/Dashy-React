import React,{useEffect,useState} from 'react';

import { GridComponent,ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter} from '@syncfusion/ej2-react-grids';

import { Footer, Header } from '../components';
import ApiData from '../data/ApiData';

const Customers = () => {

  const customerGridImage = (props) => (
    <div className="image flex gap-4">
      <img
        className="rounded-full w-10 h-10"
        src={props.CustomerImage}
        alt="employee"
      />
      <div>
        <p>{props.CustomerName}</p>
        <p>{props.CustomerEmail}</p>
      </div>
    </div>
  );

  const customerGridStatus = (props) => (
    <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
      <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
      <p>{props.Status}</p>
    </div>
  );

  const customersGrid = [
    { type: 'checkbox', width: '50' },
    { headerText: 'Name',
      width: '150',
      template: customerGridImage,
      textAlign: 'Center' },
    { field: 'ProjectName',
      headerText: 'Project Name',
      width: '150',
      textAlign: 'Center' },
    { field: 'Status',
      headerText: 'Status',
      width: '130',
      format: 'yMd',
      textAlign: 'Center',
      template: customerGridStatus },
    {
      field: 'Weeks',
      headerText: 'Weeks',
      width: '100',
      format: 'C2',
      textAlign: 'Center' },
    { field: 'Budget',
      headerText: 'Budget',
      width: '100',
      format: 'yMd',
      textAlign: 'Center' },
  
    { field: 'Location',
      headerText: 'Location',
      width: '150',
      textAlign: 'Center' },
  
    { field: 'CustomerID',
      headerText: 'Customer ID',
      width: '120',
      textAlign: 'Center',
      isPrimaryKey: true,
    },
  
  ];

  const [customersDataApi, setCustomersDataApi] = useState({});

  const getCustomers = async () => {
    const customersApi = new ApiData();
    const customers = await customersApi.getCustomers();
    setCustomersDataApi(customers);
  }

  useEffect(()=>{
    getCustomers();
  },[]);

  return (
    <div className='mt-20 md:mt-0 lg:mt-0'> 
    <div className='m-2 md:m-10 p-3 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Customers"/>
      <GridComponent
        dataSource={customersDataApi}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        editSettings={{allowDeleting: true, allowEditing: true}}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item,index)=>(
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page,Toolbar,Selection,Edit,Sort,Filter]}/>
      </GridComponent>
    </div>
    <Footer/>
    </div>
  )
}

export default Customers