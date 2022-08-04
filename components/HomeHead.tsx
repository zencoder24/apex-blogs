import React from 'react';

const HomeHead = ({pageSubHead}:any) => {
    return (
        <div className='text-left md:text-center ml-6 mt-20 mb-12 md:ml-0 w-full'>
            <p className='text-xl font-bold'>Apex-Blogs</p>
            <h1 className='text-5xl tracking-wider leading-16  font-bold md:text-6xl mt-4'>
                <span className='block lg:inline'>Live.</span>
                <span className='block lg:inline'>Code.</span>
                <span className='block lg:inline'>Learn.</span>
            </h1>
            <h2 className=' text-4xl font-bold italic my-4'>{pageSubHead}</h2>
        </div>
    );
};

export default HomeHead;