import React from "react";
import moment from "moment";
import Link from "next/link";
import { BlogEntity } from "../graphql/generated/schema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { readingTime } from "reading-time-estimator";

interface BlogCardComp {
  blog: BlogEntity | undefined;
}

const BlogCard = ({ blog }: BlogCardComp) => {
  const result = readingTime(String(blog?.attributes?.body));
  return (
    <article className="mb-24 p-0 hover:border-l-4  hover:border-light-primary hover:pl-4 hover:dark:border-dark-secondary">
      <h1 className=" cursor-pointer text-left text-3xl font-bold text-light-accent transition duration-500 hover:text-light-secondary dark:text-dark-accent hover:dark:text-dark-secondary ">
        <Link href={`/blog/${blog?.attributes?.slug}`}>
          {blog?.attributes?.title}
        </Link>
      </h1>
      <div className=" my-2  flex  space-x-2 text-light-accent dark:text-dark-accent ">
        <div className="text-sm font-medium after:pl-2 after:content-['•']">
          <FontAwesomeIcon icon={faCalendarAlt} className="text-red-600 " />
          <span className="ml-2">
            {moment(blog?.attributes?.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
        <div className="text-sm">
          <span>{result.text}</span>
        </div>
      </div>
      <p className=" mb-4 text-left text-[15px] text-light-accent dark:text-dark-accent  ">
        {blog?.attributes?.description}
      </p>
    </article>
  );
};

export default BlogCard;
