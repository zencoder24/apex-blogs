import { NextPage, GetStaticProps } from 'next';
import HomeHead from '../components/HomeHead';
import axios from 'axios';
import React from 'react';
import AllBlogs from '../components/AllBlogs';

const Blog: NextPage = ({blogs}:any) => {
    return (
        <div>
            <HomeHead pageSubHead="All Blogs"/>
           <AllBlogs blogs={blogs}/>
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
  

export default Blog;