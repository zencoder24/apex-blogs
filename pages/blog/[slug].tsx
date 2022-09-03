import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  Categories,
  BlogDetail,
  Author,
  RecentBlogsWidget,
  CommentForm,
} from "../../components";
import {
  useGetBlogDetailQuery,
  GetBlogDetailQuery,
  AuthorEntityResponse,
  Maybe,
  Blog,
} from "../../graphql/generated/schema";

import Comments from "../../components/Comments";

const BlogDetails: NextPage = () => {
  const router: NextRouter = useRouter();
  const slugQuery = String(router.query.slug);
  const [blog, setBlog] = useState<GetBlogDetailQuery | undefined>(undefined);

  const { data, loading, error } = useGetBlogDetailQuery({
    variables: { slug: slugQuery },
  });

  useEffect(() => {
    if (loading === false && data) {
      setBlog(data);
    }
  }, [loading, data]);

  //TODO: Fix Temporary Loading Message....
  if (loading) return <h1>Loading....</h1>;

  //TODO: Fix Temporary Error Message....
  if (error) {
    console.log(error);
    return <h1>Error....</h1>;
  }

  return (
    <div className=" container mx-auto mb-8 bg-light-neutral px-10 dark:bg-dark-neutral">
      <Head>
        <title>Apex Blogs | {data?.blogs?.data[0]?.attributes?.title}</title>
        <meta
          property="og:title"
          content={data?.blogs?.data[0]?.attributes?.title}
        />
        <meta
          property="og:image"
          content={
            data?.blogs?.data[0]?.attributes?.featureImage?.data?.attributes
              ?.url
          }
        />
        <meta
          property="og:url"
          content={`https://apex-blogs.vercel.app/blog/${data?.blogs?.data[0]?.attributes?.slug}`}
        />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 ">
        <div className="col-span-1 lg:col-span-8">
          <BlogDetail blog={data?.blogs?.data[0]?.attributes as Maybe<Blog>} />
          <Author
            author={
              data?.blogs?.data[0]?.attributes?.author as AuthorEntityResponse
            }
          />
          <CommentForm id={data?.blogs?.data[0]?.id} />
          <Comments id={data?.blogs?.data[0]?.id} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className=" lgsticky relative top-8">
            <RecentBlogsWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
