// import React, { useEffect, useState } from 'react';
// import AvailableAppointment from './AvailableAppointment';
// import { format } from 'date-fns';
// import AppointmentModal from '../AppointmentModal/AppointmentModal';

// const AvailableAppointments = ({ selectedDate, setSelectedDate }) => {
//   // const appointmentsData = [
//   //   { _id: 1, serviceName: 'Teeth Cleaning', StartTime: '9:00 AM', endTime:'8:00 PM', availableSpace: 2 },
//   //   { _id: 2, serviceName: 'Teeth Cleaning', StartTime: '9:00 AM', endTime:'8:00 PM' ,availableSpace: 2 },
//   //   { _id: 3, serviceName: 'Teeth Cleaning', StartTime: '9:00 AM', endTime:'8:00 PM' ,availableSpace: 2 },
//   //   { _id: 4, serviceName: 'Dental Checkup', StartTime: '10:30 AM', endTime:'8:00 PM', availableSpace: 1 },
//   //   { _id: 5, serviceName: 'Tooth Extraction', StartTime: '1:00 PM', endTime:'8:00 PM', availableSpace: 3 },
//   //   { _id: 6, serviceName: 'Root Canal', StartTime: '3:30 PM', endTime:'8:00 PM', availableSpace: 2 },
//   //   { _id: 7, serviceName: 'Teeth Whitening', StartTime: '5:00 PM', endTime:'8:00 PM', availableSpace: 0 },
//   //   { _id: 8, serviceName: 'Orthodontics', StartTime: '6:30 PM', endTime:'8:00 PM' ,availableSpace: 2 },
//   // ];

//   const [appointmentsData, setAppointmentsData] = useState([])


//   useEffect(() => {

//     fetch('servicesData.json')
//       .then(res => res.json())
//       .then(data => setAppointmentsData(data))
//   }, []);

//   const [treatment, setTreatment] = useState(null);
//   return (
//     <>
//       <div className="pt-20">
//         <h1 className="font-bold text-center text-3xl text-accent">Available Appointments on {format(selectedDate, "PP")} </h1>
//       </div>
//       <div className="flex justify-center pt-10 pb-28">

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
//           {appointmentsData.map((appointment) => (
//             <AvailableAppointment key={appointment._id} appointment={appointment} setTreatment={setTreatment} />
//           ))}
//         </div>
//       </div>
//       {
//         treatment &&
//         <AppointmentModal
//           selectedDate={selectedDate}
//           treatment={treatment}
//           setTreatment={setTreatment}
//         />
//       }
//     </>
//   );
// };

// export default AvailableAppointments;


import React, { useEffect, useState } from 'react';
import AvailableAppointment from './AvailableAppointment';
import { format } from 'date-fns';
import AppointmentModal from '../AppointmentModal/AppointmentModal';

const AvailableAppointments = ({ selectedDate, setSelectedDate }) => {
  const [appointmentsData, setAppointmentsData] = useState([])

  useEffect(() => {
    fetch('servicesData.json')
      .then(res => res.json())
      .then(data => setAppointmentsData(data))
  }, []);

  const [treatment, setTreatment] = useState(null);

  const showModal = () => {
    if (window.my_modal_3) {
      window.my_modal_3.showModal();
    }
  };

  const closeModal = () => {
    if (window.my_modal_3) {
      window.my_modal_3.close();
    }
  };

  return (
    <>
      <div className="pt-20">
        <h1 className="font-bold text-center text-3xl text-accent">Available Appointments on {format(selectedDate, "PP")}</h1>
      </div>
      <div className="flex justify-center pt-10 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
          {appointmentsData.map((appointment) => (
            <AvailableAppointment key={appointment._id} appointment={appointment} setTreatment={setTreatment} showModal={showModal} />
          ))}
        </div>
      </div>
      {treatment && (
        <AppointmentModal selectedDate={selectedDate} treatment={treatment} setTreatment={setTreatment} closeModal={closeModal} />
      )}
    </>
  );
};

export default AvailableAppointments;
