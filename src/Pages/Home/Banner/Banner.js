import React from 'react';
import chair from '../../../images/chair.png';
import chairBg from '../../../images/chairBg.png';

const Banner = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${chairBg})`, backgroundSize: 'cover' }}>
      <div className="hero-content flex-col lg:flex-row-reverse items-center justify-center lg:justify-between">
        <div className="lg:w-1/2">
          <img src={chair} className="rounded-lg shadow-2xl" alt="chair" />
        </div>
        <div className="text-center lg:text-left lg:w-1/2 px-4 lg:px-0 mt-10 lg:mt-0">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-dark mb-8" style={{ fontSize: "2.5rem", lineHeight: "3rem", textTransform: "uppercase" }}>
            YOUR NEW SMILE STARTS HERE!
          </h1>
          <p className="text-dark text-lg leading-relaxed mb-8" style={{ marginTop: "1.5rem" }}>
            Discover the latest updates and trends in dental care. Stay informed about the best practices, latest treatments, and oral health tips.
          </p>
          <button className="btn btn-accent btn-lg text-white" style={{ marginTop: ".5rem" }}>Get Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
