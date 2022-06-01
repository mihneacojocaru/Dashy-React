import React,{useState,useEffect} from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids';

import { Footer, Header } from '../components';
import ApiData from '../data/ApiData';

import { GrLocation } from 'react-icons/gr';


const Employees = () => {

  const gridEmployeeProfile = (props) => (
    <div className="flex items-center gap-2">
      <img
        className="rounded-full w-10 h-10"
        src={props.EmployeeImage}
        alt="employee"
      />
      <p>{props.Name}</p>
    </div>
  );
  
  const gridEmployeeCountry = (props) => (
    <div className="flex items-center justify-center gap-2">
      <GrLocation />
      <span>{props.Country}</span>
    </div>
  );

  const employeesGrid = [
    { headerText: 'Employee',
      width: '150',
      template: gridEmployeeProfile,
      textAlign: 'Center' },
    { field: 'Name',
      headerText: '',
      width: '0',
      textAlign: 'Center',
    },
    { field: 'Title',
      headerText: 'Designation',
      width: '170',
      textAlign: 'Center',
    },
    { headerText: 'Country',
      width: '120',
      textAlign: 'Center',
      template: gridEmployeeCountry },
  
    { field: 'HireDate',
      headerText: 'Hire Date',
      width: '135',
      format: 'yMd',
      textAlign: 'Center' },
  
    { field: 'ReportsTo',
      headerText: 'Reports To',
      width: '120',
      textAlign: 'Center' },
    { field: 'EmployeeID',
      headerText: 'Employee ID',
      width: '125',
      textAlign: 'Center' },
  ];

  const [employeesDataApi, setEmployeesDataApi] = useState({});

  const getEmployees = async () => {
    const employeeApi = new ApiData();
    const employees = await employeeApi.getEmployees();
    setEmployeesDataApi(employees);
  }

  useEffect(()=>{
    getEmployees();
  },[])

  return (
    <div className='mt-20 md:mt-0 lg:mt-0'> 
    <div className='m-2 md:m-10 p-3 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Employees"/>
      <GridComponent
        dataSource={employeesDataApi}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item,index)=>(
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page,Search,Toolbar]}/>
      </GridComponent>
    </div>
    <Footer/>
    </div>
  )
}

export default Employees