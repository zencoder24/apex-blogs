import React, { useState, useEffect } from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import {
  BlogEntity,
  GetRecentBlogsQuery,
  Maybe,
  useGetRecentBlogsQuery,
} from "../graphql/generated/schema";

const RecentBlogsWidget = () => {
  //Not sure why BlogEntity can be passed as a Type. Just using 'any' because it works
  const [widgetBlogs, setWidgetBlogs] = useState<any>([]);

  const { data, loading, error } = useGetRecentBlogsQuery({});

  useEffect(() => {
    if (loading === false && data) {
      setWidgetBlogs(data?.blogs?.data);
    }
  }, [loading, data]);

  return (
    <div className="mb-8 rounded-lg p-8 text-white">
      <h3 className=" mb-8 border-b pb-4 text-xl font-semibold text-light-primary dark:text-dark-primary ">
        Recent Posts
      </h3>
      {widgetBlogs?.map((blog: any) => (
        <div
          key={blog?.attributes?.title}
          className="mb-4 flex w-full items-center text-light-accent dark:text-dark-accent"
        >
          <div className="w-16 flex-none">
            <Image
              src={blog?.attributes?.featureImage?.data?.attributes?.url}
              className="rounded-full align-middle"
              alt={blog?.attributes?.title}
              height={60}
              width={60}
            />
          </div>
          <div className="ml-4 flex-row ">
            <p className=" text-xs text-light-primary dark:text-dark-primary">
              {moment(blog?.attributes?.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link
              key={blog?.attributes?.title}
              href={`/blog/${blog?.attributes?.slug}`}
            >
              <p className="cursor-pointer font-semibold hover:text-light-secondary hover:underline hover:dark:text-dark-secondary">
                {blog?.attributes?.title}
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentBlogsWidget;
