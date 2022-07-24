import React from 'react';
import Image from 'next/image';

const BlogCard = ({blog}:any) => {
    return (
        <div className="blog_post md:w-2/3 md:h-96 max-w-[500px] max-h-[500px] bg-white rounded-[10px] shadow-[1px_1px_2rem_rgba(0,0,0,0.3)] relative overflow-visible">
            <div 
                className='img_pod h-[131px] w-[131px] bg-gradient-to-r from-secondary to-accent z-10 shadow-[1px_1px_2rem_rgba(0, 0, 0, 0.3)] rounded-full absolute top-[-13%] left-[-10%] flex items-center justify-center '>
                <img className='w-[7.3rem] h-[7.3rem] relative rounded-[999999px] shadow-[1px_1px_2rem_rgba(0, 0, 0, 0.3)] z-[1]' src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg" alt="Shoes" />
            </div>
            <div className="container_copy relative px-8 py-20">
                <div className='flex justify-between'>
                    <h3 className='date mb-2 text-slate-400 text-md'>12 November 2020</h3>
                    <div className="badge badge-accent">{blog.attributes.Topic}</div>
                </div>
                <div className='mb-4'>
                    <h1 className="title  text-2xl font-bold tracking-[0.5px] leading-9 text-[#333]">
                        {blog.attributes.title}
                    </h1>
                    <h2 className='text-slate-400 font-semibold'>Writen by: {blog.attributes.author}</h2>
                </div>
                <p className='description mb-8 text-md font-medium leading-[1.45] text-[#333] '>{blog.attributes.description}</p>
                <a className=' relative border-none outline-none bg-gradient-to-r from-primary to-accent py-4 px-6 rounded-[50px] text-white text-lg shadow-[1px_10px_2rem_rgba(255, 94, 98, 0.5)] transition-all no-underline ' href="#" target="_blank">Read More</a>
            </div>
        </div>
    );
};

export default BlogCard;