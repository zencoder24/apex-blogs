import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { MarkdownComponents } from '../services/MarkdownComponents';

const BlogDetail = ({blog}:any) => {

    return (
        <div className=' bg-white shadow-lg rounded-lg lg:p-8 pb-12 my-8 '>
           <div className=' relative overflow-hidden shadow-md mb-6'>
                <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}${blog.featureImage.data.attributes.url}`}
                    alt={blog.title}
                    className=" object-top h-full w-full object-cover"/>
           </div>
           <div className='px-4'>
                <h1 className='mb-2 text-4xl font-extrabold text-black '>{blog.title}</h1>
                <h2 className='mb-4 text-lg font-semibold italic'>{blog.description}</h2>
                <div className='flex mb-4 w-full'>
                    <div className='flex items-center mb-4  w-auto '>
                        {/* <Image
                            src={ `${process.env.NEXT_PUBLIC_API_URL}${blog.author.data.attributes.Photo.data.attributes.url}`} 
                            className=' align-middle rounded-full'
                            alt={blog.author.data.attributes.Name}
                            height={30}
                            width ={30}
                        /> */}
                        <p className='inline align-middle text-base mr-2'>By <span className='font-bold'>{blog.author.data.attributes.Name}</span></p>

                    </div>
                    <div className="flex font-semibold before:content-['•'] before:mr-2">
                        <p className='mr-1'>Written On: </p>
                        <span className='text-center'>{moment(blog.createdAt).format('MMM DD, YYYY')}</span>
                    </div>
                </div>
                
        
                <div className='prose'>
                    <ReactMarkdown components={MarkdownComponents}>
                        {blog.body}
                    </ReactMarkdown>
                </div>
                
                    
                
           </div>
        </div>
    );
};

export default BlogDetail;