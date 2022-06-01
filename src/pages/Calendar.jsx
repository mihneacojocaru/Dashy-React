import React from 'react';

import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';

import { Footer, Header } from '../components';

const Calendar = () => {

  const scheduleData = [
    {
      Id: 1,
      Subject: 'Explosion of Betelgeuse Star',
      Location: 'Space Center USA',
      StartTime: '2022-06-10T04:00:00.000Z',
      EndTime: '2022-06-10T05:30:00.000Z',
      CategoryColor: '#1aaa55',
    },
    {
      Id: 2,
      Subject: 'Thule Air Crash Report',
      Location: 'Newyork City',
      StartTime: '2022-06-11T06:30:00.000Z',
      EndTime: '2022-06-11T08:30:00.000Z',
      CategoryColor: '#357cd2',
    },
    {
      Id: 3,
      Subject: 'Blue Moon Eclipse',
      Location: 'Space Center USA',
      StartTime: '2022-06-12T04:00:00.000Z',
      EndTime: '2022-06-12T05:30:00.000Z',
      CategoryColor: '#7fa900',
    },
    {
      Id: 4,
      Subject: 'Meteor Showers in 2021',
      Location: 'Space Center USA',
      StartTime: '2022-06-13T07:30:00.000Z',
      EndTime: '2022-06-13T09:00:00.000Z',
      CategoryColor: '#ea7a57',
    },
    {
      Id: 5,
      Subject: 'Milky Way as Melting pot',
      Location: 'Space Center USA',
      StartTime: '2022-06-14T06:30:00.000Z',
      EndTime: '2022-06-14T08:30:00.000Z',
      CategoryColor: '#00bdae',
    },
    {
      Id: 6,
      Subject: 'Mysteries of Bermuda Triangle',
      Location: 'Bermuda',
      StartTime: '2022-06-14T04:00:00.000Z',
      EndTime: '2022-06-14T05:30:00.000Z',
      CategoryColor: '#f57f17',
    },
    {
      Id: 7,
      Subject: 'Glaciers and Snowflakes',
      Location: 'Himalayas',
      StartTime: '2022-06-15T05:30:00.000Z',
      EndTime: '2022-06-15T07:00:00.000Z',
      CategoryColor: '#1aaa55',
    },
    {
      Id: 8,
      Subject: 'Life on Mars',
      Location: 'Space Center USA',
      StartTime: '2022-06-16T03:30:00.000Z',
      EndTime: '2022-06-16T04:30:00.000Z',
      CategoryColor: '#357cd2',
    },
    {
      Id: 9,
      Subject: 'Alien Civilization',
      Location: 'Space Center USA',
      StartTime: '2022-06-18T05:30:00.000Z',
      EndTime: '2022-06-18T07:30:00.000Z',
      CategoryColor: '#7fa900',
    },
    {
      Id: 10,
      Subject: 'Wildlife Galleries',
      Location: 'Africa',
      StartTime: '2022-06-20T05:30:00.000Z',
      EndTime: '2022-06-20T07:30:00.000Z',
      CategoryColor: '#ea7a57',
    },
    {
      Id: 11,
      Subject: 'Best Photography 2021',
      Location: 'London',
      StartTime: '2022-06-21T04:00:00.000Z',
      EndTime: '2022-06-21T05:30:00.000Z',
      CategoryColor: '#00bdae',
    },
    {
      Id: 12,
      Subject: 'Smarter Puppies',
      Location: 'Sweden',
      StartTime: '2022-06-08T04:30:00.000Z',
      EndTime: '2022-06-08T06:00:00.000Z',
      CategoryColor: '#f57f17',
    },
    {
      Id: 13,
      Subject: 'Myths of Andromeda Galaxy',
      Location: 'Space Center USA',
      StartTime: '2022-06-06T05:00:00.000Z',
      EndTime: '2022-06-06T07:00:00.000Z',
      CategoryColor: '#1aaa55',
    },
    {
      Id: 14,
      Subject: 'Aliens vs Humans',
      Location: 'Research Center of USA',
      StartTime: '2022-06-05T04:30:00.000Z',
      EndTime: '2022-06-05T06:00:00.000Z',
      CategoryColor: '#357cd2',
    },
    {
      Id: 15,
      Subject: 'Facts of Humming Birds',
      Location: 'California',
      StartTime: '2022-06-19T04:00:00.000Z',
      EndTime: '2022-06-19T05:30:00.000Z',
      CategoryColor: '#7fa900',
    },
    {
      Id: 16,
      Subject: 'Sky Gazers',
      Location: 'Alaska',
      StartTime: '2022-06-22T05:30:00.000Z',
      EndTime: '2022-06-22T07:30:00.000Z',
      CategoryColor: '#ea7a57',
    },
    {
      Id: 17,
      Subject: 'The Cycle of Seasons',
      Location: 'Research Center of USA',
      StartTime: '2022-06-11T00:00:00.000Z',
      EndTime: '2022-06-11T02:00:00.000Z',
      CategoryColor: '#00bdae',
    },
    {
      Id: 18,
      Subject: 'Space Galaxies and Planets',
      Location: 'Space Center USA',
      StartTime: '2022-06-11T11:30:00.000Z',
      EndTime: '2022-06-11T13:00:00.000Z',
      CategoryColor: '#f57f17',
    },
    {
      Id: 19,
      Subject: 'Lifecycle of Bumblebee',
      Location: 'San Fransisco',
      StartTime: '2022-06-14T00:30:00.000Z',
      EndTime: '2022-06-14T02:00:00.000Z',
      CategoryColor: '#7fa900',
    },
    {
      Id: 20,
      Subject: 'Alien Civilization',
      Location: 'Space Center USA',
      StartTime: '2022-06-14T10:30:00.000Z',
      EndTime: '2022-06-14T12:30:00.000Z',
      CategoryColor: '#ea7a57',
    },
    {
      Id: 21,
      Subject: 'Alien Civilization',
      Location: 'Space Center USA',
      StartTime: '2022-06-10T08:30:00.000Z',
      EndTime: '2022-06-10T10:30:00.000Z',
      CategoryColor: '#ea7a57',
    },
    {
      Id: 22,
      Subject: 'The Cycle of Seasons',
      Location: 'Research Center of USA',
      StartTime: '2022-06-12T09:00:00.000Z',
      EndTime: '2022-06-12T10:30:00.000Z',
      CategoryColor: '#00bdae',
    },
    {
      Id: 23,
      Subject: 'Sky Gazers',
      Location: 'Greenland',
      StartTime: '2022-06-15T09:00:00.000Z',
      EndTime: '2022-06-15T10:30:00.000Z',
      CategoryColor: '#ea7a57',
    },
    {
      Id: 24,
      Subject: 'Facts of Humming Birds',
      Location: 'California',
      StartTime: '2022-06-16T07:00:00.000Z',
      EndTime: '2022-06-16T09:00:00.000Z',
      CategoryColor: '#7fa900',
    },
  ];

  return (
    <div>
      <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
        <Header title="Calendar" category="App"/>
        <ScheduleComponent
          height="650px"
          eventSettings={{dataSource: scheduleData}}
          selectedDate={new Date(2022,5,10)}
        >
          <Inject services={[Day,Week,WorkWeek,Month,Agenda,Resize,DragAndDrop]} />
        </ScheduleComponent>
      </div>
      <Footer/>
    </div>
  )
}

export default Calendar