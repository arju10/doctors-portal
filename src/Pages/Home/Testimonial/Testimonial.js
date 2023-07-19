import React from 'react';

const Testimonial = ({ testimonial }) => {
    const { name, image, location, comment } = testimonial;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <p>{comment}</p>
            </div>
            <div className="flex items-center">
                <figure className="px-10 pb-5">
                    <img src={image} alt={image} className="rounded-xl" />
                </figure>

                <div>
                    <h3 className="text-xl font-bold text-accent">{name}</h3>
                    <p className="text-gray-500">{location}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
