import React from 'react';
import BlogCard from './BlogCard';

const AllBlogs = ({blogs}:any) => {

    function renderBlogCards(){
        return blogs.map((blog: any) => {
            return <BlogCard blog={blog} key={blog.id}/>
        })
    }

    return (
        <div>
            <div className='flex flex-col lg:flex-row lg:flex-wrap lg:items-baseline lg:gap-12 lg:justify-around  space-y-36  justify-center items-center p-8 '>
                {renderBlogCards()}
            </div>
        </div>
    );
};

export default AllBlogs;