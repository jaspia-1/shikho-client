import React from 'react';
import { Outlet } from 'react-router-dom';
import SiteHeader from '../Components/Shared/SiteHEader/SiteHeader';

const Main = () => {
    return (
        <div>
            <SiteHeader></SiteHeader>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;