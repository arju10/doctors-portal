import React from 'react';
import Testimonial from './Testimonial';
import wilson from "../../../images/wilson.png";
import ema from "../../../images/ema.png";
import aliza from "../../../images/aliza.png";

const Testimonials = () => {
    const testimonialData = [
        {
            id: 1,
            name: "Wilson Harry",
            image: wilson,
            location: "New York",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus amet omnis illo odit temporibus esse quidem maiores aliquam at inventore.",
        },
        {
            id: 2,
            name: "Ema",
            image: ema,
            location: "Canada",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus amet omnis illo odit temporibus esse quidem maiores aliquam at inventore.",
        },
        {
            id: 3,
            name: "Aliza",
            image: aliza,
            location: "Japan",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus amet omnis illo odit temporibus esse quidem maiores aliquam at inventore.",
        },
    ];

    return (
        <>
            <div className="text-center py-20">
                <h3 className="text-accent font-bold ">TESTIMONIAL</h3>
                <h1 className="text-base-content font-bold text-3xl">What's Our Patient Says</h1>
            </div>
            <div className="flex justify-center pt-4">

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {testimonialData.map((testimonial) => (
                        <div key={testimonial.id} className="flex justify-center">
                            <Testimonial testimonial={testimonial} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Testimonials;
