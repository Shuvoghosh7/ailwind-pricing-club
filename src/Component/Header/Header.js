import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <p className='text-3xl text-red-700'>Save your maney</p>
        </div>
    );
};

export default Header;