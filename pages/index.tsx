import { GetServerSideProps, GetStaticPaths } from "next";
import { BlogCard, HeaderContent } from "../components";
import Head from "next/head";
import React from "react";
import { PageGetBlogsComp, ssrGetBlogs } from "../graphql/generated/page";
import { withApollo } from "../graphql/withApollo";

const Home: PageGetBlogsComp = () => {
  // const { data, loading, error } = useGetBlogsQuery({});
  // let blogs = data?.blogs?.data;

  const { data } = ssrGetBlogs.usePage();
  let blogs = data?.blogs?.data;

  return (
    <div className="container mx-auto my-0  max-w-[768px]  px-16  ">
      <Head>
        <title>Apex Blogs | Home</title>
        <meta property="og:title" content="Hello" />
        <meta property="og:description" content="Open Graph Description" />
      </Head>
      <div className="header-content mt-8">
        <HeaderContent category="" />
      </div>
      <div className=" ">
        <div className="mt-24">
          {blogs?.map((blog: any) => (
            <BlogCard blog={blog} key={blog.attributes.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await ssrGetBlogs.getServerPage({}, ctx);
};

export default withApollo(Home);
