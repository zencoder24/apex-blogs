import React from 'react';

const BlogCard = ({blog}:any) => {
    return (
        <div>
            {blog.attributes.title}
            {blog.attributes.description}
        </div>
    );
};

export default BlogCard;