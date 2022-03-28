import React from 'react';
import {CheckCircleIcon } from '@heroicons/react/solid'

const PricingOption = (props) => {
    const{id,name,price}=props.pricing
    return (
        <div className='bg-white p-4'>
            <h3 className='bg-indigo-300 rounded-lg py-4 text-fuchsia-900 text-lg'>{name}</h3>
            <p >
                <span className='text-3xl text-bold'>{price}</span> 
                <span>/mont</span>
            </p>
            <div>
                <h3 className='text-xl text-left'>Benefite:</h3>
                <p className='flex items-center gap-4'>
                    <CheckCircleIcon className='w-4 h-6 text-green-500'/>
                    awsome fetucher
                </p>
            </div>
        </div>
    );
};

export default PricingOption;