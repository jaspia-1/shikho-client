import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import SiteHeader from '../Components/Shared/SiteHEader/SiteHeader';

const Main = () => {
    return (
        <div>
            <SiteHeader></SiteHeader>
            <Outlet></Outlet>
            <ToastContainer />

        </div>
    );
};

export default Main;