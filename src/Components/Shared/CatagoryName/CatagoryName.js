import React from 'react';

import { Link } from 'react-router-dom';

const CatagoryName = ({ catagory }) => {
    const { id, name } = catagory;
    return (
        <div>
            <div className='w-100 p-2 m-1 '   >
                <Link to={`/catagorycourses/${id}`} className='nav-link catagory-link p-1 rounded'> <small>{name}</small> </Link>
            </div>
        </div >
    );
};

export default CatagoryName;