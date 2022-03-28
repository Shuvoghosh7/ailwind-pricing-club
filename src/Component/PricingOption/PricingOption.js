import React from 'react';
import {ArrowNarrowRightIcon, CheckCircleIcon } from '@heroicons/react/solid'
import Benifit from '../Benifite/Benifit';

const PricingOption = (props) => {
    const{id,name,price,benefits}=props.pricing
    return (
        <div className='bg-white p-4'>
            <h3 className='bg-indigo-300 rounded-lg py-4 text-fuchsia-900 text-lg'>{name}</h3>
            <p >
                <span className='text-3xl text-bold'>{price}</span> 
                <span>/mont</span>
            </p>
            <div>
                <h3 className='text-xl text-left'>Benefite:</h3>
                {
                    benefits.map(benefit =><Benifit
                    benefit={benefit}
                    />)
                }
                <button className='flex items-center justify-center w-full bg-green-500 hover:text-white py-2'>
                     By-Now<ArrowNarrowRightIcon className='w-4 h-4'/>
                </button>
            </div>
        </div>
    );
};

export default PricingOption;