import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const BlogCard = ({blog}:any) => {
    return (
        <div className='text-[#e4e9f8] mb-24  rounded-lg p-0 '>
            {/* <div className=" relative overflow-hidden shadow-md pb-80 mb-6"> */}
                {/* <Image
                    className=' object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg '
                    src={`${process.env.NEXT_PUBLIC_API_URL}${blog.attributes.featureImage.data.attributes.url}`}
                    layout= 'fill'
                    objectFit='cover'
                    alt = {blog.title}/> */}
            {/* </div> */}
            <h1 className=' transition duration-500 text-left cursor-pointer hover:text-teal-600 text-3xl font-bold'>
                <Link href={`/blog/${blog.attributes.slug}`}>
                    {blog.attributes.title}
                </Link>
            </h1>
            <div className=' flex space-x-2 my-2 '>
                <div className="font-medium after:content-['•'] after:pl-2">
                    <FontAwesomeIcon icon={faCalendarAlt} className='text-red-600 ' />
                    <span className='ml-2'>{moment(blog.attributes.createdAt).format('MMM DD, YYYY')}</span>
                </div>
                <div>
                    <span>4 Min Read</span>
                </div>
            </div>
            
            <p className=' text-left text-lg   mb-4  '>{blog.attributes.description}</p>
            <div className=''>
                <Link href={`/blog/${blog.attributes.slug}`}>
            <button 
                    className=' w-1/3 h-10 text-white rounded-md  font-medium bg-transparent cursor-pointer transition-all duration-300 ease-linear relative inline-block shadow-md outline-none
                                 bg-[#4dccc6] bg-gradient-to-br from-[#4dccc6]/0 to-[#96e4df]/75 leading-10 p-0 border-none hover:bg-[#89d8d3] hover:bg-gradient-to-br hover:from-[#89d8d3]/0 hover:to-[#03c8a8]/75
                                 before:absolute before:content-none'>
                        <span className=' text-center'>Read More</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;