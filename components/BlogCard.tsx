import React from 'react';

const BlogCard = ({blog}:any) => {
    return (
        <div className='text-black'>
            {blog.attributes.title}
            {blog.attributes.description}
        </div>
    );
};

export default BlogCard;