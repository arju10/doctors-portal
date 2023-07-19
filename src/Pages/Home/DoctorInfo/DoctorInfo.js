import React from 'react';

const DoctorInfo = ({ doctor }) => {
    const { name, image, mobile, specialist } = doctor;
    return (
        <div className="card w-full sm:w-80 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt={name} className="rounded-full w-40 h-40 object-contain" />
            </figure>
            <div className="card-body items-center text-center">
                <h3 className="card-title font-bold"><span className="text-accent mr-2" role="img" aria-label="Name Icon">
                    👤
                </span>{name}</h3>
                <h4 className="text-gray-500"> <span className="text-accent mr-2" role="img" aria-label="Specialist Icon">
                    ⭐️
                </span>{specialist}</h4>
                <h4 className="text-gray-500"><span role="img" aria-label="Mobile Icon" className="text-accent">📞</span> {mobile}</h4>
            </div>
        </div>
    );
};

export default DoctorInfo;
