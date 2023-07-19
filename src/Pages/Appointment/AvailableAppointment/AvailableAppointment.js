// import React from 'react';

// const AvailableAppointment = ({ appointment, setTreatment}) => {
//   const { serviceName,slots, availableSpace } = appointment;
//   return (
//     <div className="bg-white rounded-lg p-4 shadow flex flex-col items-center">
//       <h3 className="text-xl font-bold mb-2 text-accent">{serviceName}</h3>
//       <p className="text-gray-500 font-bold mb-2"> {slots.length > 0 ? slots[0] : "Try another day"}</p>
//       <p className="text-gray-500 mb-4 text-sm">Available Space:{slots.length}
//        {/* {slots.length > 1 ?"Spaces":"Space"} */}
//         {/* {availableSpace} */}
       
//        </p>
//       {/* <button className="btn btn-accent text-white btn-xs">Book Appointment</button> */}
//       <button className="btn btn-accent text-white btn-xs" onClick={() => window.my_modal_3.showModal() && setTreatment(appointment)}>Book Appointment</button>
//     </div>
//   );
// };

// export default AvailableAppointment;


import React from 'react';

const AvailableAppointment = ({ appointment, setTreatment, showModal }) => {
  const { serviceName, slots } = appointment;

  const handleBookAppointment = () => {
    showModal();
    setTreatment(appointment);
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow flex flex-col items-center">
      <h3 className="text-xl font-bold mb-2 text-accent">{serviceName}</h3>
      <p className="text-gray-500 font-bold mb-2">{slots.length > 0 ? slots[0] : "Try another day"}</p>
      <p className="text-gray-500 mb-4 text-sm">Available Space: {slots.length}</p>
      <button className="btn btn-accent text-white btn-xs" onClick={handleBookAppointment} disabled = {slots.length === 0}>Book Appointment</button>
    </div>
  );
};

export default AvailableAppointment;

