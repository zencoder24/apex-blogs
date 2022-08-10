import React from 'react';
import { useGetCategoriesQuery } from '../graphql/generated/schema';
import { useState } from 'react';
import Link from 'next/link';

const Categories = () => {
    const [categories, setCategories] = useState<any>([])

    const {data} = useGetCategoriesQuery({
        onCompleted: (data) => {
            setCategories(data.categories?.data)
        }
    })


    return (
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-12'>
           <h3 className=' text-xl mb-8 font-semibold border-b pb-4 '>Categories</h3>
            {categories.map((category:any) => (
                <Link key={category.attributes.Slug} href={`/category/${category.attributes.Slug}`}>
                    <span className='cursor-pointer block pb-3 mb-3'>
                        {category.attributes.Name}
                    </span>
                </Link>
            ))}
        </div>

    );
};

export default Categories;