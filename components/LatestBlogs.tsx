import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const LatestBlogs = ({blogs}:any) => {
    const [latestBlogs, setLatestBlogs] = useState([])

    useEffect (() => {
        setLatestBlogs(blogs.slice(0,8))
    }, [blogs])

    function renderBlogCards(){
        return latestBlogs.map((blog) => {
            return <BlogCard blog={blog} key={blog.id}/>
        })
    }
    return (
        <div className='flex flex-col lg:flex-row lg:flex-wrap lg:items-baseline lg:gap-12 lg:justify-around  space-y-36  justify-center items-center p-8 '>
         {renderBlogCards()}
        </div>
    );
};

export default LatestBlogs;