import Head from "next/head";
import { useRouter } from "next/router";
import { type } from "os";
import React, { useState } from "react";
import { HeaderContent, BlogCard } from "../../components";
import { useGetCategoryBlogsQuery } from "../../graphql/generated/schema";

const CategoryPage = () => {
  const router = useRouter();

  let catInfo: any;
  let catBlogs: any;

  let passSlug = router?.query?.slug as string;

  const { data, loading, error } = useGetCategoryBlogsQuery({
    variables: { slug: passSlug },
  });

  if (data) {
    catInfo = data?.categories?.data;
  }

  if (catInfo) {
    catBlogs = catInfo[0]?.attributes?.blogs?.data;
  }

  console.log(catBlogs);

  //TODO: Fix Temporary Loading Message....
  if (loading) return <h1>Loading....</h1>;

  //TODO: Fix Temporary Error Message....
  if (error) {
    console.log(error);
    return <h1>Error....</h1>;
  }

  return (
    <div className="container mx-auto my-0 mb-8 max-w-[768px]  px-16  ">
      <Head>
        <title>Apex Blogs | {catInfo[0]?.attributes?.Name} </title>
      </Head>
      <div className="header-content mt-8">
        <HeaderContent category={`- ${catInfo[0]?.attributes?.Name}`} />
      </div>
      <div className=" ">
        <div className="mt-24">
          {catBlogs?.map((catBlog: any) => (
            <BlogCard blog={catBlog} key={catBlog.attributes.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
