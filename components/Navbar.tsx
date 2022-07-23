import React, { useState } from 'react';

import {faNewspaper, faPencil, faSun, faMoon, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  ApexLogo  from '../assets/logo_the_web_apex.svg';


const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className="flex py-4 px-4 justify-between items-center bg-base-100">


            <div className='flex-row flex space-x-4 items-center'>
                <div className=" cursor-pointer flex md:flex-col items-center gap-2">
                    <FontAwesomeIcon icon={faNewspaper} className="h-5 w-5"/>
                    <p className='hidden md:block font-bold'>Latest</p> 
                </div>
                <div className="dropdown">
                    <label tabIndex={0} className="cursor-pointer flex md:flex-col items-center gap-2">
                        <FontAwesomeIcon icon={faList} className="h-5 w-5"/>
                        <p  className='hidden md:block font-bold'>Categories</p>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Life and Code</a></li>
                        <li><a>React</a></li>
                        <li><a>Git</a></li>
                    </ul>
                </div>
            </div>


        <div className="navbar-center">
            <ApexLogo className="h-12 w-36 md:h-16"/>
          {/* <a className="btn btn-ghost normal-case text-xl"> The Apex Blog</a> */}
        </div>


        <div className="flex flex-row space-x-4 items-center">
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <button 
                    className={`${darkMode ? 'block' : 'hidden'} `}
                    data-set-theme="apexAlpha" 
                    data-act-class="ACTIVECLASS"
                    onClick={() => setDarkMode(false)}>
                    <FontAwesomeIcon 
                        className='h-5 w-5'
                        icon={faSun} 
                    />
                </button>
                <button 
                    data-set-theme="apexBeta" 
                    data-act-class="ACTIVECLASS"
                    className={`${darkMode ? 'hidden' : 'block'} `}
                    onClick={() => setDarkMode(true)}>
                    <FontAwesomeIcon 
                        className='h-5 w-5'
                        icon={faMoon}
                    />
                </button>
                <p className='hidden md:block font-bold' >Theme</p>
            </div>
             

           <div className='flex flex-col gap-2 items-center cursor-pointer'>
            <button className="">
                <div className="">
                    <FontAwesomeIcon icon={faPencil} className="h-5 w-5"/>
                </div>
            </button>
            <p className='hidden md:block font-bold'>Sign-up</p>
          </div> 
        </div>
      </div>
    );
};

export default Navbar;