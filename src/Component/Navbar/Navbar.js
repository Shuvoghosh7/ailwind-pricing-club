import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const routes =[
        {id:1,name:'Home',link:'/Home'},
        {id:2,name:'About',link:'/About'},
        {id:3,name:'Contuct',link:'/Contuct'}
    ]
    return (
        <nav>
            <ul className='md:flax'>
               {
                   routes.map(route => <Link 
                   key={route.id}
                   route={route}
                   >
                   </Link>)
               }
            </ul>
        </nav>
    );
};

export default Navbar;