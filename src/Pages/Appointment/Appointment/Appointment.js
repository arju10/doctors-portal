import React,{useState} from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../AvailableAppointment/AvailableAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>

            <AppointmentBanner selectedDate = {selectedDate} setSelectedDate = {setSelectedDate}/>
            <AvailableAppointments selectedDate = {selectedDate} setSelectedDate = {setSelectedDate}/>

        </div>
    );
};

export default Appointment;
