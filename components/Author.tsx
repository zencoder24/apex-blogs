import React from 'react';
import Image from 'next/image';

const Author = ({author}:any) => {
    console.log(author)
    return (
        <div className=' text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20'>
            <div className=' absolute left-0 right-0 -top-14'>
                <Image
                    className='align-middle rounded-full'
                    alt={author.data.attributes.Name}
                    height={100}
                    width={100}
                    src={`${process.env.NEXT_PUBLIC_API_URL}${author.data.attributes.Photo.data.attributes.url}`}
                />
            </div>
            <h3 className='text-white mt-4 mb-4 text-xl font-bold'>
                {author.data.attributes.Name}
            </h3>
            <p className='text-white text-lg'>{author.data.attributes.Bio}</p>
           
        </div>
    );
};

export default Author;