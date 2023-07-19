import React from 'react';
import appoinmentBg from '../../../images/appointmentBg.png';

const MakeAppointment = () => {
  return (
    <section className="bg-base-200">
      <div
        className="relative bg-cover bg-center bg-opacity-75"
        style={{
          backgroundImage: `url(${appoinmentBg})`,
          height: '300px',
        }}
      >
        <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center bg-neutral bg-opacity-90">
          <div className="lg:w-1/2 px-6 lg:px-12 py-8 lg:py-0">
            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Make an Appointment Today
            </h1>
            <p className="text-white text-lg mb-8 select-text">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-accent text-white">Appointment</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
