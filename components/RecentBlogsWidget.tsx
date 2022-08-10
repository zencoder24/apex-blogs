import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import { useGetRecentBlogsQuery, useGetSimilarBlogsQuery } from '../graphql/generated/schema';


const RecentBlogsWidget = () => {
    const [widgetBlogs, setWidgetBlogs] = useState<any>([])

        const {data} = useGetRecentBlogsQuery({
            onCompleted: (data) => {
                setWidgetBlogs(data.blogs?.data)
            }
        })
        
        
    return (
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
           <h3 className=' text-xl mb-8 font-semibold border-b pb-4 '>Recent Posts</h3>
           {widgetBlogs.map((blog:any) => (
            <div key={blog.attributes.title} className='flex items-center w-full mb-4'>
                <div className='w-16 flex-none'>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_API_URL}${blog.attributes.featureImage.data.attributes.url}`}
                        className='align-middle rounded-full'
                        alt={blog.attributes.title}
                        height={60}
                        width={60}
                        />
                </div>
                <div className='flex-row ml-4 '>
                    <p className=' text-gray-500 text-xs'>
                        {moment(blog.attributes.createdAt).format('MMM DD, YYYY')}
                    </p>
                    <Link key={blog.attributes.title} href={`/blog/${blog.attributes.slug}`}>
                        <p className='hover:underline cursor-pointer'>{blog.attributes.title}</p>
                    </Link>
                </div>
            </div>
           ))}
        </div>
    );
};

export default RecentBlogsWidget;