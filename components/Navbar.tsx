import React, { useState } from 'react';
import  ApexLogo  from '../assets/logo_the_web_apex.svg';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faAngleDown, faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { useGetCategoriesQuery } from '../graphql/generated/schema';



const Navbar = () => {


    return (
        <nav className="flex justify-between py-4 mx-auto my-0  px-4 items-center  ">
            <div className=' flex items-center center cursor-pointer space-x-2'>
                <FontAwesomeIcon icon={faBarsStaggered}/>
                <p className=' font-semibold '>Categories</p>
                <FontAwesomeIcon icon={faAngleDown}/>
            </div>
            <div className="">
                <Link href='/'>
                    <ApexLogo className=" h-16 w-32   bg-[#89d8d3] bg-gradient-to-br from-[#89d8d3]/0 to-[#03c8a8]/75 rounded-full py-2 cursor-pointer"/>
                </Link>
            </div>       

            <div className="">
                <div className="menu menu-horizontal space-x-6">
                    <FontAwesomeIcon icon={faToggleOff} className=' text-5xl'/>
                    {/* <FontAwesomeIcon icon={faToggleOn} className=' text-5xl'/> */}
                </div>
            </div>
      </nav>
    );
};

export default Navbar;