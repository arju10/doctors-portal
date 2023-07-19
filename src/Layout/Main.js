import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import CopyWrite from '../Pages/Shared/CopyWrite/CopyWrite';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
            <CopyWrite/>
        </div>
    );
};

export default Main;
