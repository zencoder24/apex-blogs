import React from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const BlogCard = ({ blog }: any) => {
  return (
    <article className="mb-24 p-0 text-[#e4e9f8] hover:border-l-4 hover:border-secondary hover:pl-4">
      <h1 className=" cursor-pointer text-left text-3xl font-bold text-accent transition duration-500 hover:text-secondary ">
        <Link href={`/blog/${blog.attributes.slug}`}>
          {blog.attributes.title}
        </Link>
      </h1>
      <div className=" my-2 flex space-x-2 text-accent ">
        <div className="text-sm font-medium after:pl-2 after:content-['•']">
          <FontAwesomeIcon icon={faCalendarAlt} className="text-red-600 " />
          <span className="ml-2">
            {moment(blog.attributes.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
        <div className="text-sm">
          <span>4 Min Read</span>
        </div>
      </div>
      <p className=" mb-4 text-left text-[15px]   text-accent  ">
        {blog.attributes.description}
      </p>
    </article>
  );
};

export default BlogCard;
