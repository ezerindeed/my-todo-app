import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Import CSS
import moment from 'moment'; // Import moment for date handling


const CalendarComponent = () => {
  return (
    <div className='calendar-container'>
      <Calendar
        localizer={momentLocalizer(moment)}
        defaultView="month"
        events={[]} // Pass an empty array for events
        startAccessor="start"
        endAccessor="end"
        selectable={false} // Disable selecting date ranges
        // Additional calendar configuration options can be set here
      />
    </div>
  );
};

export default CalendarComponent;
