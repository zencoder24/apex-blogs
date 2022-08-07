import React, { useState } from 'react';
import  ApexLogo  from '../assets/logo_the_web_apex.svg';
import Link from 'next/link';


const categories = [{name: 'React', slug: 'react'}, {name: "Git", slug:'git'}, {name:'Life and Code', slug:'life-and-code'}]

const Navbar = () => {
    return (
        <div className="flex py-4 px-4 navbar bg-teal-800/50 shadow-lg">

        <div className=" flex-1">
            <Link href='/'>
                <ApexLogo className="h-12 w-36 cursor-pointer md:h-16"/>
            </Link>
        </div>       

        <div className="flex-none">
            <div className="menu menu-horizontal space-x-6">
               {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className=' cursor-pointer font-bold text-lg text-white'>
                            {category.name}
                        </span>
                    </Link>
               ))}
            </div>
        </div>

      </div>
    );
};

export default Navbar;