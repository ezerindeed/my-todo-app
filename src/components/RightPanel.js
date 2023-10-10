import React from 'react';
import CalendarComponent from './Calendar';
import Quotes from './Quotes'; // Import the Quotes component

import '../styles/Calendar.css'

const RightPanel = () => {
  return (
    <div className='right-panel'>
      <CalendarComponent />
      <Quotes />
    </div>
  );
};

export default RightPanel;