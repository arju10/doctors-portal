import React, { useState } from 'react';
import chair from '../../../images/chair.png';
import chairBg from '../../../images/chairBg.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
 

  return (
    <div className="hero" style={{ backgroundImage: `url(${chairBg})`, backgroundSize: 'cover' }}>
      <div className="hero-content flex-col lg:flex-row-reverse items-center justify-center lg:justify-between">
        <div className="lg:w-1/2">
          <img src={chair} className="rounded-lg shadow-2xl" alt="chair" />
        </div>
        <div className="text-center lg:text-left lg:w-1/2 px-4 lg:px-0 mt-10 lg:mt-0">
          <h1 className="text-5xl lg:text-6xl font-bold text-dark mb-8" style={{ fontSize: "3rem", lineHeight: "3.5rem", textTransform: "uppercase" }}>
            APPOINTMENT
          </h1>
          <div className="px-4">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
