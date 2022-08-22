/* eslint-disable @next/next/no-img-element */
import React from "react";
import moment from "moment";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { MarkdownComponents } from "../services/MarkdownComponents";

const BlogDetail = ({ blog }: any) => {
  return (
    <div className=" my-8 rounded-lg bg-light-accent pb-12 shadow-lg dark:bg-dark-accent lg:p-8 ">
      <div className=" relative mb-6 overflow-hidden shadow-md">
        <img
          src={`${process.env.NEXT_PUBLIC_API_URL}${blog.featureImage.data.attributes.url}`}
          alt={blog.title}
          className=" h-full w-full object-cover object-top"
        />
      </div>
      <div className="px-4">
        <h1 className="mb-2 text-4xl font-extrabold text-light-neutral dark:text-dark-neutral ">
          {blog.title}
        </h1>
        <h2 className="mb-4 text-lg font-semibold italic text-light-neutral dark:text-dark-neutral">
          {blog.description}
        </h2>
        <div className="mb-4 flex w-full flex-col md:flex-row">
          <div className="mb-4 flex w-auto  items-center ">
            <p className="mr-2 inline align-middle text-base text-light-neutral/70 dark:text-dark-neutral/70">
              By:{" "}
              <span className="font-bold">
                {blog.author.data.attributes.Name}
              </span>
            </p>
          </div>
          <div className="flex font-semibold text-light-neutral/70 dark:text-dark-neutral/70 md:before:mr-2 md:before:content-['•']">
            <p className="md:mr-1">Written On: </p>
            <span className="text-center">
              {moment(blog.createdAt).format("MMM DD, YYYY")}
            </span>
          </div>
        </div>

        <div className="prose text-light-neutral dark:text-dark-neutral">
          <ReactMarkdown components={MarkdownComponents}>
            {blog.body}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
