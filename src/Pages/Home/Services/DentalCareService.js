import React from 'react';
import featured from '../../../images/featured.png';

const DentalCareService = () => {
  return (
    <div className="py-10 flex justify-center mx-30 p-32">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={featured} alt={featured} className="object-cover w-full h-64 lg:h-auto " />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title text-xl lg:text-4xl font-bold">Exceptional Dental Care, On Your Terms!</h2>
          <p className="mt-4 lg:mt-6 text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aspernatur architecto ea numquam suscipit, totam asperiores itaque illum dignissimos reprehenderit voluptatem eos odit commodi ratione earum quaerat amet beatae incidunt!
          </p>
          <div className="card-actions justify-start mt-6">
            <button className="btn btn-accent text-white">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalCareService;
