import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const routes =[
        {id:1,name:'Home',link:'/Home'},
        {id:2,name:'About',link:'/About'},
        {id:3,name:'Contuct',link:'/Contuct'}
    ]
    const[open,setOpen]=useState(false)
    return (
        <nav className='bg-indigo-200'>
            <div onClick={()=>setOpen(!open)} className='w-6 h-6 md:hidden'>
            {open?<XIcon></XIcon>: <MenuIcon></MenuIcon> }  
            </div>
            <ul className={`md:flex justify-center absolute md:static duration-500 ease-in bg-indigo-200 w-full ${open?'top-6':'top-[-120px]'}`}>
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