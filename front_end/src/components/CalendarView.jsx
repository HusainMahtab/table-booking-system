import React from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarView = ({ onDateSelect }) => {
  return (
    <div className="p-4">
      <Calendar onChange={onDateSelect} />
    </div>
  );
};

export default CalendarView;
