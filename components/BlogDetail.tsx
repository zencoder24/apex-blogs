/* eslint-disable @next/next/no-img-element */
import React from "react";
import moment from "moment";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { MarkdownComponents } from "../services/MarkdownComponents";
import {
  LinkedinShareButton,
  LinkedinIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from "next-share";
import { Blog, Maybe } from "../graphql/generated/schema";

interface BlogDetailComp {
  blog: Maybe<Blog> | undefined;
}

const BlogDetail = ({ blog }: BlogDetailComp) => {
  return (
    <div className=" my-8 rounded-lg bg-light-accent pb-12 shadow-lg dark:bg-dark-accent lg:p-8 ">
      <div className=" relative mb-6 overflow-hidden shadow-md">
        <img
          src={blog?.featureImage?.data?.attributes?.url}
          alt={blog?.title}
          className=" h-full w-full object-cover object-top"
        />
      </div>
      <div className="px-4">
        <h1 className="mb-2 text-4xl font-extrabold text-light-neutral dark:text-dark-neutral ">
          {blog?.title}
        </h1>
        <h2 className="mb-4 text-lg font-semibold italic text-light-neutral/70 dark:text-dark-neutral/50">
          {blog?.description}
        </h2>
        <div className="mb-4 flex w-full flex-col md:flex-row">
          <div className="mb-4 flex w-auto  items-center ">
            <p className="mr-2 inline align-middle text-base font-bold  text-light-neutral dark:text-dark-neutral">
              By:{" "}
              <span className="font-bold">
                {blog?.author?.data?.attributes?.Name}
              </span>
            </p>
          </div>
          <div className="flex font-semibold text-light-neutral dark:text-dark-neutral md:before:mr-2 md:before:content-['•']">
            <p className="md:mr-1">Written On:&nbsp;</p>
            <span className="text-center">
              {moment(blog?.createdAt).format("MMM DD, YYYY")}
            </span>
          </div>
        </div>

        <div className="prose text-light-neutral prose-headings:text-light-neutral prose-a:font-bold prose-a:text-light-primary prose-blockquote:text-light-neutral dark:text-dark-neutral/70 dark:prose-headings:text-dark-neutral dark:prose-h2:text-dark-neutral dark:prose-a:text-dark-secondary dark:prose-blockquote:text-dark-neutral">
          <ReactMarkdown components={MarkdownComponents}>
            {String(blog?.body)}
          </ReactMarkdown>
        </div>
        <div className="share-blog mt-4 flex flex-row">
          <p className="mr-2 text-lg font-bold text-light-neutral dark:text-dark-neutral">
            Share Post:{" "}
          </p>
          <div className="flex flex-row space-x-2">
            <LinkedinShareButton
              url={`https://apex-blogs.vercel.app/blog/${blog?.slug}`}
              title={blog?.title}
              summary={blog?.description as string}
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <FacebookShareButton
              url={`https://apex-blogs.vercel.app/blog/${blog?.slug}`}
              quote={blog?.description as string}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton
              url={`https://apex-blogs.vercel.app/blog/${blog?.slug}`}
              title={blog?.title}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
