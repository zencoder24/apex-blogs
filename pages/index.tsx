import { NextPage } from "next";
import { BlogCard, HeaderContent } from "../components";
import Head from "next/head";
import React from "react";
import { useGetBlogsQuery } from "../graphql/generated/schema";

const Home: NextPage = () => {
  const { data, loading, error } = useGetBlogsQuery({});
  let blogs = data?.blogs?.data;

  return (
    <div className="container mx-auto my-0  max-w-[768px]  px-16  ">
      <Head>
        <title>Apex Blogs | Home</title>
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

export default Home;
