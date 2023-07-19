import React from 'react';

const InfoCard = ({card}) => {
    const {name, description, icon, bgClass} = card;
    return (
        <div className={`card py-2 card-side shadow-xl ${bgClass} flex items-center`}>
      <figure className="p-2">
        <img src={icon} alt={icon} style={{ width: '60px', height: '60px', filter: 'brightness(0) invert(1)'}}  />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title text-white font-bold ">{name}</h2>
        <p className="text-left text-white">{description}</p>
      </div>
    </div>
    );
};

export default InfoCard;