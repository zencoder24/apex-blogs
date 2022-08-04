import axios from 'axios';
import { NextPage } from 'next';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const BlogPostPage: NextPage = ({blog}:any) => {
    blog = blog[0]
    
    

    return (
        <div className='container bg-slate-300 w-1/2 mx-auto my-10 p-12 rounded-lg'>
            <article>
                <header>
                    <h1 className=' text-center text-3xl my-4'>{blog.attributes.title}</h1>
                    <h2 className=' text-center text-2xl my-2'>{blog.attributes.author.author}</h2>
                </header>
                <section>
                    <ReactMarkdown>{blog.attributes.body}</ReactMarkdown>
                </section>
            </article>
        </div>
    );
};

export async function getStaticProps ({params}:any) {
    const blogResponse = await axios.get(`http://localhost:1337/api/blogs?filters[slug]=${params.slug}`);

    return{
        props:{
            blog: blogResponse.data.data
        }
    }
       
} 

export async function getStaticPaths() {
    const blogsResponse = await axios.get("http://localhost:1337/api/blogs");

    const paths = blogsResponse.data.data.map((blog:any) => {
        return {params: {slug:blog.attributes.slug}}
    }) 

    return {
        paths,
        fallback: false
    }
    
}

export default BlogPostPage;
