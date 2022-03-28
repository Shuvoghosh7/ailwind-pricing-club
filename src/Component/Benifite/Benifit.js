import React from 'react';
import {CheckCircleIcon } from '@heroicons/react/solid'
const Benifit = ({benefit}) => {
    return (
        <div>
            <p className='flex items-center gap-4'>
                    <CheckCircleIcon className='w-4 h-6 text-green-500'/>
                    {benefit}
            </p>
        </div>
    );
};

export default Benifit;