import React, { useState } from 'react';
import  ApexLogo  from '../assets/logo_the_web_apex.svg';
import Link from 'next/link';
import { useGetCategoriesQuery } from '../graphql/generated/schema';


const categories = [{name: 'React', slug: 'react'}, {name: "Git", slug:'git'}, {name:'Life and Code', slug:'life-and-code'}]

const Navbar = () => {
    const [categories, setCategories] = useState<any>([]);

    const {data} = useGetCategoriesQuery({
        onCompleted: (data) => {
            setCategories(data.categories?.data)
        }
    })

    return (
        <div className="flex py-4 px-4 navbar bg-teal-800/50 shadow-lg">

        <div className=" flex-1">
            <Link href='/'>
                <ApexLogo className="h-12 w-36 cursor-pointer md:h-16"/>
            </Link>
        </div>       

        <div className="flex-none">
            <div className="menu menu-horizontal space-x-6">
               {categories.map((category:any) => (
                    <Link key={category.attributes.Slug} href={`/category/${category.attributes.Slug}`}>
                        <span className=' cursor-pointer font-bold text-lg text-white'>
                            {category.attributes.Name}
                        </span>
                    </Link>
               ))}
            </div>
        </div>

      </div>
    );
};

export default Navbar;