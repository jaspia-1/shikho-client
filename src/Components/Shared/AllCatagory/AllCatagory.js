import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CatagoryName from '../CatagoryName/CatagoryName';


const AllCatagory = () => {
    const [allCatagory, setAllCatagory] = useState([]);
    useEffect(() => {
        fetch('https://shiko-server-jaspia-1.vercel.app/catagory')
            .then(res => res.json())
            .then(data => setAllCatagory(data));
    }, []);

    return (
        <div className=' p-1 rounded '>
            <h4 style={{ color: "#4699cf" }} className=' py-3 mx-auto' > Catagory</h4>
            <hr />
            {/* <ul> */}

            {
                allCatagory.map((catagory, idx) => <CatagoryName key={idx} catagory={catagory}></CatagoryName>)
            }
            {/* </ul> */}

        </div>
    );
};

export default AllCatagory;