import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOption=[
        {id:1,name:'free', price:0,benefits:[
            'Online Presence 24/7',
            'Information Exchange',
            'Credibility',
            'It Cuts Costs'
        ]},
        {id:2,name:'Regular', price:500,benefits:[
            'Online Presence 24/7',
            'Information Exchange',
            'Credibility',
            'It Cuts Costs']},
        {id:3,name:'primeam', price:1000,benefits:[
            'Online Presence 24/7',
            'Information Exchange',
            'Credibility',
            'It Cuts Costs']},
    ]
    return (
        <div className='bg-indigo-200 p-4 mt-8'>
            <h1 className='text-3xl font-mono text-emerald-700'>Best Deals of the town</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut tempora, aperiam quod cum porro beatae iusto dicta? Reiciendis, culpa?</p>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    pricingOption.map(pricing => <PricingOption
                    pricing={pricing}
                    />)
                }
            </div>
        </div>
    );
};

export default Pricing;