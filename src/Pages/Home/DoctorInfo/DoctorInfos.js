import React from 'react';
import DoctorInfo from './DoctorInfo';
import doctor from "../../../images/doctor.png";
import doctor_2 from "../../../images/doctor_2.png";
import doctor_3 from "../../../images/doctor_3.png";

const DoctorInfos = () => {
    const doctorData = [
        {
            id: 1,
            name: "Dr. Daud",
            image: doctor,
            mobile: "019235353",
            specialist: "Children Specialist"
        },
        {
            id: 2,
            name: "Dr. Kim",
            image: doctor_2,
            mobile: "019235353",
            specialist: "Ear Specialist"
        },
        {
            id: 3,
            name: "Dr. Michel",
            image: doctor_3,
            mobile: "019235353",
            specialist: "Heart Specialist"
        },
    ];

    return (
        <>
            <div className="text-center py-10">
                <h1 className="text-accent font-bold text-4xl">OUR DOCTORS</h1>
            </div>
            <div className="flex justify-center pt-4">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {doctorData.map((doctor) => (
                        <div key={doctor.id} className="flex justify-center">
                            <DoctorInfo doctor={doctor} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default DoctorInfos;
