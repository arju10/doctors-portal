import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import DentalCareService from '../Services/DentalCareService';
import MakeAppointment from '../MakeAppoinment/MakeAppointment';
import Testimonials from '../Testimonial/Testimonials';
import Blogs from '../Blog/Blogs';
import DoctorInfos from '../DoctorInfo/DoctorInfos';
import ContactUs from '../ContactUs/ContactUs';



const Home = () => {
    return (
        <>
            <Banner/>
            <InfoCards/>
            <Services/>
            <DentalCareService/>
            <MakeAppointment/>
            <Testimonials/>
            <Blogs/>
            <DoctorInfos/>
            <ContactUs/>
            
        </>
    );
};

export default Home;