import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id:1,
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quae tempora fugit animi a mollitia assumenda, quaerat quam nisi. Rerum?',
            icon: fluoride,
        
        },
        {
            id:2,
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quae tempora fugit animi a mollitia assumenda, quaerat quam nisi. Rerum?',
            icon: cavity,
         
        },
        {
            id:3,
            name: 'Whitening Teeth',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quae tempora fugit animi a mollitia assumenda, quaerat quam nisi. Rerum?',
            icon: whitening,
   
        },
    ]
    return (
        <>
         <div className="text-center py-8">
         <h3 className = "text-accent font-bold ">OUR SERVICES</h3>
            <h1 className = "text-base-content font-bold text-3xl">SERVICES WE PROVIDE</h1>
         </div>
        <div className="flex justify-center pt-4">
          
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {servicesData.map((service) => (
          <div key={service.id} className="flex justify-center">
            <Service service={service} />
          </div>
        ))}
      </div>
    </div>
        </>
    );
};

export default Services;