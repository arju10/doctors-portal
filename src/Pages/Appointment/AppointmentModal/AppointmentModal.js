import { format } from 'date-fns';
import React, { useState } from 'react';

const AppointmentModal = ({ treatment, setTreatment, selectedDate, closeModal }) => {
    const { serviceName, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const [successMessage, setSuccessMessage] = useState('');
    const [selectedSlot, setSelectedSlot] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false); // New state variable for submission status

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = {
            treatment: serviceName,
            date: selectedDate,
            slot: selectedSlot,
            doctor: selectedDoctor,
            name,
            mobile,
            email
        };

        // Simulating a successful submission
        setTimeout(() => {
            setIsSubmitted(true);
        }, 1000);

        // Reset form fields after submission
        setSelectedSlot('');
        setSelectedDoctor('');
        setName('');
        setMobile('');
        setEmail('');

        
        // Show success message
        setSuccessMessage('Appointment booked successfully!');
        
        // // Clear the selected treatment
        // setTreatment(null);

    };

    const doctors = ['Dr. Smith', 'Dr. Johnson', 'Dr. Williams'];

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <form onSubmit={handleFormSubmit} className="modal-box bg-white rounded-lg shadow-lg p-6 px-20">
                    <button
                        className="btn btn-circle btn-ghost absolute right-2 top-2 btn-sm"
                        onClick={closeModal}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <h3 className="font-bold text-lg mb-4 text-center text-accent pb-5">{serviceName}</h3>
                    <div className="mb-4">
                        <input
                            disabled
                            className="input input-bordered h-10 w-full"
                            placeholder="Date"
                            value={date}
                        />
                    </div>
                    <div className="mb-4">
                        <select
                            id="slots"
                            className="input input-bordered h-10 w-full"
                            value={selectedSlot}
                            onChange={(e) => setSelectedSlot(e.target.value)}
                            required
                        >
                            <option value="">Select Slot</option>
                            {slots.map((slot) => (
                                <option key={slot} value={slot}>
                                    {slot}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <select
                            id="doctor"
                            className="input input-bordered h-10 w-full"
                            value={selectedDoctor}
                            onChange={(e) => setSelectedDoctor(e.target.value)}
                            required
                        >
                            <option value="">Select Doctor</option>
                            {doctors.map((doctor) => (
                                <option key={doctor} value={doctor}>
                                    {doctor}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="name"
                            className="input input-bordered h-10 w-full"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="mobile"
                            className="input input-bordered h-10 w-full"
                            placeholder="Mobile"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            id="email"
                            className="input input-bordered h-10 w-full"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        {!isSubmitted ? (
                            <button type="submit" className="btn btn-accent btn-sm rounded-none px-16 text-white font-bold">
                                SUBMIT
                            </button>
                        ) : (
                            <div className="text-center text-green-500 font-bold">Form Submitted Successfully!</div>
                        )}
                         {/* {successMessage && <p className="text-green-500">{successMessage} </p>} */}
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default AppointmentModal;
