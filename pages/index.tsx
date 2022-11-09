import { GetServerSideProps } from "next";
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
        <meta property="og:title" content="Apex Blogs" />
        <meta
          property="og:description"
          content="A series of posts of concepts, best practices, and life lessons learned while coding"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dkjd7wsdj/image/upload/v1668032124/Rod_Garland-C2_v4df2c.jpg"
        />
        <meta property="og:url" content="www.blogs.rodthedev.com" />
        <meta name="twitter:title" content="Apex Blogs" />
        <meta
          name="twitter:description"
          content="A series of posts of concepts, best practices, and life lessons learned while coding"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dkjd7wsdj/image/upload/v1668032124/Rod_Garland-C2_v4df2c.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@RoddTheDev" />
      </Head>
      <div className="header-content mt-8">
        <HeaderContent category="" />
      </div>
      <div className=" ">
        <div className="mt-24">
          {blogs
            ?.map((blog: any) => (
              <BlogCard blog={blog} key={blog.attributes.title} />
            ))
            .reverse()}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await ssrGetBlogs.getServerPage({}, ctx);
};

export default withApollo(Home);
