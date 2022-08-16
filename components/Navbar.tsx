import React, { useState } from 'react';
import  ApexLogo  from '../assets/logo_the_web_apex.svg';
import Link from 'next/link';
import { useGetCategoriesQuery } from '../graphql/generated/schema';



const Navbar = () => {
    const [categories, setCategories] = useState<any>([]);

    const {data} = useGetCategoriesQuery({
        onCompleted: (data) => {
            setCategories(data.categories?.data)
        }
    })

    return (
        <div className="flex py-4 mx-auto my-0 rounded-lg px-4 items-center ">

        <div className=" flex-1">
            <Link href='/'>
                <ApexLogo className="h-16 w-32  bg-[#89d8d3] bg-gradient-to-br from-[#89d8d3]/0 to-[#03c8a8]/75 rounded-full py-2 cursor-pointer md:h-16"/>
            </Link>
        </div>       

        <div className="flex-none">
            <div className="menu menu-horizontal space-x-6">
               {/* {categories.map((category:any) => (
                    <Link key={category.attributes.Slug} href={`/category/${category.attributes.Slug}`}>
                        <span className=' cursor-pointer font-bold text-lg text-white  hover:border-b-2 border-spacing-2 hover:border-[#03c8a8]'>
                            {category.attributes.Name}
                        </span>
                    </Link>
               ))} */}
            </div>
        </div>

      </div>
    );
};

export default Navbar;