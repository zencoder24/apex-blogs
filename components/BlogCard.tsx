import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const BlogCard = ({blog}:any) => {
    return (
        <article className='text-[#e4e9f8] mb-24 p-0 hover:border-l-4 hover:border-teal-500 hover:pl-4'>
                <h1 className=' transition duration-500 text-left cursor-pointer hover:text-teal-600 text-3xl font-bold '>
                    <Link href={`/blog/${blog.attributes.slug}`}>
                        {blog.attributes.title}
                    </Link>
                </h1>
                <div className=' flex space-x-2 my-2 text-gray-300 '>
                    <div className="font-medium text-sm after:content-['•'] after:pl-2">
                        <FontAwesomeIcon icon={faCalendarAlt} className='text-red-600 ' />
                        <span className='ml-2'>{moment(blog.attributes.createdAt).format('MMM DD, YYYY')}</span>
                    </div>
                    <div className='text-sm'>
                        <span>4 Min Read</span>
                    </div>
                </div>
                <p className=' text-left text-[15px]   mb-4  '>{blog.attributes.description}</p>
        </article>
    );
};

export default BlogCard;