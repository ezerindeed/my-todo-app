import React, { useEffect, useRef } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

const YourCalendarComponent = () => {
  const calendarRef = useRef(null);

  useEffect(() => {
    const calendarEl = calendarRef.current;

    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
      // Add more calendar configuration options here
    });

    calendar.render();

    return () => {
      // Clean up when the component unmounts
      calendar.destroy();
    };
  }, []);

  return (
    <div>
      <div ref={calendarRef}></div>
    </div>
  );
};

export default YourCalendarComponent;