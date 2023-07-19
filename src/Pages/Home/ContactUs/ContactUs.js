import React from 'react';
// import contactBackground from '../../../images/contactUs.jpg';
import contactBackground from '../../../images/dental.jpg';


const ContactUs = () => {
  return (
    <section className="py-10">
      <div className="relative flex justify-center items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactBackground})`, opacity: '.4' }}
        ></div>
        <div className="mx-auto z-10">
          <div className="bg-white bg-opacity-0 px-6 md:py-16 md:px-10 lg:py-20 lg:px-12 xl:py-24 xl:px-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-accent">
              Contact Us
            </h2>
            <p className="text-center text-base md:text-lg lg:text-4xl mt-4 font-bold">
              Always Connected with Us
            </p>
            <form className="mt-8 md:mt-12 lg:mt-16 xl:mt-20">
              <div className="mb-6">
                <label className="block font-bold text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address"
                />
              </div>
              <div className="mb-6">
                <label className="block font-bold text-gray-700 mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-6">
                <label className="block font-bold text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="text-center">
                <button className="btn btn-accent text-white">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;


