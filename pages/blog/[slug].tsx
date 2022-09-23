import React from "react";
import Head from "next/head";
import {
  Categories,
  BlogDetail,
  Author,
  RecentBlogsWidget,
  CommentForm,
} from "../../components";
import {
  AuthorEntityResponse,
  Maybe,
  Blog,
} from "../../graphql/generated/schema";
import {
  ssrGetBlogs,
  ssrGetBlogDetail,
  PageGetBlogDetailComp,
} from "../../graphql/generated/page";
import { withApollo } from "../../graphql/withApollo";
import { GetServerSideProps, GetStaticPaths } from "next";

import Comments from "../../components/Comments";

const BlogDetails: PageGetBlogDetailComp = (props) => {
  const title = `Apex Blogs | ${
    props?.data?.blogs?.data[0]?.attributes?.title as string
  }`;
  return (
    <div className=" container mx-auto mb-8 bg-light-neutral px-10 dark:bg-dark-neutral">
      <Head>
        <title>{title}</title>
        <meta
          property="og:title"
          content={props?.data?.blogs?.data[0].attributes?.title}
        />
        <meta
          property="og:description"
          content={
            props?.data?.blogs?.data[0].attributes?.description as string
          }
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={
            props?.data?.blogs?.data[0]?.attributes?.featureImage?.data
              ?.attributes?.url
          }
        />
        <meta
          property="og:url"
          content={`https://apex-blogs.vercel.app/blog/${props?.data?.blogs?.data[0]?.attributes?.slug}`}
        />
        <meta
          name="twitter:title"
          content={props?.data?.blogs?.data[0].attributes?.title}
        />
        <meta
          name="twitter:description"
          content={
            props?.data?.blogs?.data[0].attributes?.description as string
          }
        />
        <meta
          name="twitter:image"
          content={
            props?.data?.blogs?.data[0]?.attributes?.featureImage?.data
              ?.attributes?.url
          }
        />
        <meta name="twitter:card" content="summary" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 ">
        <div className="col-span-1 lg:col-span-8">
          <BlogDetail
            blog={props?.data?.blogs?.data[0]?.attributes as Maybe<Blog>}
          />
          <Author
            author={
              props?.data?.blogs?.data[0]?.attributes
                ?.author as AuthorEntityResponse
            }
          />
          <CommentForm id={props?.data?.blogs?.data[0]?.id} />
          <Comments id={props?.data?.blogs?.data[0]?.id} />
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

export const getStaticProps: GetServerSideProps = async ({ params, req }) => {
  const res = await ssrGetBlogDetail.getServerPage(
    {
      variables: { slug: params?.slug?.toString() || "" },
    },
    { req }
  );

  if (res.props.error) {
    return {
      notFound: true,
    };
  }

  return res;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { props } = await ssrGetBlogs.getServerPage({}, { req: undefined });

  const paths =
    props?.data?.blogs?.data?.map((val: any) => ({
      params: { slug: val.attributes.slug },
    })) || [];

  //   ((slug) => ({
  //     params: { slug },
  //   })
  // );

  return {
    paths,
    fallback: false,
  };
};

export default withApollo(
  ssrGetBlogDetail.withPage((arg) => ({
    variables: { slug: arg?.query?.slug?.toString() || "" },
  }))(BlogDetails)
);
