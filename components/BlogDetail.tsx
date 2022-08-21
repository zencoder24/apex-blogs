import React from "react";
import Image from "next/image";
import moment from "moment";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { MarkdownComponents } from "../services/MarkdownComponents";

const BlogDetail = ({ blog }: any) => {
  return (
    <div className=" my-8 rounded-lg bg-accent pb-12 shadow-lg lg:p-8 ">
      <div className=" relative mb-6 overflow-hidden shadow-md">
        <img
          src={`${process.env.NEXT_PUBLIC_API_URL}${blog.featureImage.data.attributes.url}`}
          alt={blog.title}
          className=" h-full w-full object-cover object-top"
        />
      </div>
      <div className="px-4">
        <h1 className="mb-2 text-4xl font-extrabold text-neutral ">
          {blog.title}
        </h1>
        <h2 className="mb-4 text-lg font-semibold italic text-neutral">
          {blog.description}
        </h2>
        <div className="mb-4 flex w-full">
          <div className="mb-4 flex w-auto  items-center ">
            {/* <Image
                            src={ `${process.env.NEXT_PUBLIC_API_URL}${blog.author.data.attributes.Photo.data.attributes.url}`} 
                            className=' align-middle rounded-full'
                            alt={blog.author.data.attributes.Name}
                            height={30}
                            width ={30}
                        /> */}
            <p className="mr-2 inline align-middle text-base text-neutral/70">
              By{" "}
              <span className="font-bold">
                {blog.author.data.attributes.Name}
              </span>
            </p>
          </div>
          <div className="flex font-semibold text-neutral/70 before:mr-2 before:content-['•']">
            <p className="mr-1">Written On: </p>
            <span className="text-center">
              {moment(blog.createdAt).format("MMM DD, YYYY")}
            </span>
          </div>
        </div>

        <div className="prose text-neutral">
          <ReactMarkdown components={MarkdownComponents}>
            {blog.body}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
