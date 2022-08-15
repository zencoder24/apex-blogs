import { NextPage} from 'next';
import { BlogCard, HeaderContent, Categories, RecentBlogsWidget } from '../components';
import Head from 'next/head';
import React from 'react';
import {useGetBlogsQuery } from '../graphql/generated/schema';


const Home: NextPage = () => {
     const {data, loading, error} = useGetBlogsQuery({})
     let blogs = data?.blogs?.data
     
    return (
        <div className='container mx-auto my-0 mb-8 w-1/2'>
          <Head>
            <title>Apex Blogs | Home</title>
          </Head>
          <div className='header-content'>
            <HeaderContent/>
          </div>
          <div className=' '>
            <div className='mt-12' >
              {blogs?.map ((blog:any) => (<BlogCard blog={blog} key={blog.attributes.title}/>))}
            </div>
          {/* <div className='lg:col-span-4 col-span-1'>
                <div className=' relative top-6 mt-12 '>
                  <RecentBlogsWidget />
                  <Categories/>
                </div>
          </div> */}
          </div>
        </div>
    ); 
};

export default Home;