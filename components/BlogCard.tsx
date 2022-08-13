import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const BlogCard = ({blog}:any) => {
    return (
        <div className='text-black bg-slate-200 shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
            <div className=" relative overflow-hidden shadow-md pb-80 mb-6">
                <Image
                    className=' object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg '
                    src={`${process.env.NEXT_PUBLIC_API_URL}${blog.attributes.featureImage.data.attributes.url}`}
                    layout= 'fill'
                    objectFit='cover'
                    alt = {blog.title}/>
            </div>
            <h1 className=' transition duration-500 text-center mb-8 cursor-pointer hover:text-teal-600 text-3xl font-bold'>
                <Link href={`/blog/${blog.attributes.slug}`}>
                    {blog.attributes.title}
                </Link>
            </h1>
            <div className='block lg:flex flex-col text-center items-center justify-center mb-8 w-full'>
                <div className='flex items-center justify-center mb-4 w-auto '>
                    <Image
                        src={ `${process.env.NEXT_PUBLIC_API_URL}${blog.attributes.author.data.attributes.Photo.data.attributes.url}`} 
                        className=' align-middle rounded-full'
                        alt={blog.attributes.author.data.attributes.Name}
                        height={30}
                        width ={30}
                    />
                    <p className='inline align-middle ml-2 text-lg'>Written By: {blog.attributes.author.data.attributes.Name}</p>

                </div>
                <div className='font-medium'>
                    <FontAwesomeIcon icon={faCalendarAlt} className='text-red-600 mx-2' />
                    <span>{moment(blog.attributes.createdAt).format('MMM DD, YYYY')}</span>
                </div>
            </div>
            <p className=' text-center text-lg font-m px-4 lg:px-20 mb-8  '>{blog.attributes.description}</p>
            <div className='text-center'>
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