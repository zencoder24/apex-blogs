import { NextPage, GetStaticProps } from 'next';
import { BlogCard, Categories, BlogWidget } from '../components';
import Head from 'next/head';
import axios from 'axios';
import React from 'react';


const Home: NextPage = ({blogs}:any) => {
    console.log(blogs)
    return (
        <div className='container mx-auto px-10 mb-8'>
          <Head>
            <title>Apex Blogs | Home</title>
          </Head>
          <div className=' grid grid-cols-1 lg:grid-cols-12 gap-12 '>
            <div className='lg:col-span-8 col-span-1' >
              {blogs.map ((blog:any) => (<BlogCard blog={blog} key={blog.attributes.title}/>))}
            </div>
          <div className='lg:col-span-4 col-span-1'>
                <div className='lg:sticky relative top-8 '>
                  <BlogWidget/>
                  <Categories/>
                </div>
          </div>
          </div>
        </div>
    ); 
};

export const getStaticProps: GetStaticProps = async (context) => {
    const blogRes = await axios.get("http://localhost:1337/api/blogs?populate=*")

    return{
      props: {
        blogs: blogRes.data.data
    }
    }
  }
  

export default Home;