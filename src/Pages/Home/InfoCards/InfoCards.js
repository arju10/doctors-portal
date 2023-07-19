import React from 'react';
import clock from '../../../images/clock.svg';
import location from '../../../images/location-sign.svg';
import phone from '../../../images/phone-call.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id:1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00 pm everyday',
            icon: clock,
            bgClass: 'bg-orange-600'
        },
        {
            id:2,
            name: 'Visit our Location',
            description: 'Bashundhara R/A, Dhaka, Bangladesh',
            icon: location,
            bgClass: 'bg-secondary'
        },
        {
            id:3,
            name: 'Contact us now',
            description: '+9992220094',
            icon: phone,
            bgClass: 'bg-accent'
        },
    ]
    return (
        <div className="flex justify-center ">
        <div className="grid gap-6 my-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card) => (
            <InfoCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    );
};

export default InfoCards;