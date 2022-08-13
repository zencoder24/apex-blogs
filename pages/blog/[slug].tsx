import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';
import { Categories, BlogDetail, Author, CommentsForm, Comments, RecentBlogsWidget} from '../../components';
import SimilarBlogWidget from '../../components/SimilarBlogWidget';
import { useGetBlogDetailQuery } from '../../graphql/generated/schema';
import { useApolloClient } from '@apollo/client';



const BlogDetails: NextPage = () => {
    const client = useApolloClient();
    

    // const [blog, setBlog] = useState<any>([])
    const router = useRouter();
    const slug = router.query.slug
    let blog 

    const {data, loading, error} = useGetBlogDetailQuery({
        variables: { slug: router.query.slug}
    });

    if(data){blog = data?.blogs?.data}

    //TODO: Fix Temporary Loading Message....
    if (loading) return <h1>Loading....</h1>

    //TODO: Fix Temporary Error Message....
    if(error){
        console.log(error)
        return <h1>Error....</h1>
    }


    

    console.log(blog)



   
  
   
   

    return (
        <div className=' container mx-auto px-10 mb-8'>
            <Head>
                <title>Apex Blogs | {blog[0]?.attributes?.title}</title>
            </Head>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 '>
                <div className='col-span-1 lg:col-span-8'>
                    <BlogDetail blog={blog[0]?.attributes}/> 
                    <Author author={blog[0]?.attributes?.author} />
                    <CommentsForm slug={blog[0]?.attributes?.slug}/>
                    <Comments slug={blog[0]?.attributes?.slug}/>
                </div>
                <div className='col-span-1 lg:col-span-4'>
                    <div className=' relative lgsticky top-8'>
                        <RecentBlogsWidget/>
                        {/* <SimilarBlogWidget/> */}
                        <Categories/>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default BlogDetails;