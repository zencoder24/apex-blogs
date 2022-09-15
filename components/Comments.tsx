import React, { useState, useEffect } from "react";
import moment from "moment";
import {
  useGetCommentsQuery,
  GetCommentsQuery,
} from "../graphql/generated/schema";

interface CommentComp {
  id: any;
}

const Comments = ({ id }: CommentComp) => {
  const [comments, setComments] = useState<
    GetCommentsQuery["findAllInHierarchy"] | undefined
  >(undefined);

  const { data, loading, error } = useGetCommentsQuery({
    variables: { blog_relation: "api::blog.blog:" + id },
  });

  useEffect(() => {
    if (loading === false && data) {
      setComments(data?.findAllInHierarchy);
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
    <div>
      {comments?.length && (
        <div className="mb-8 rounded-lg bg-light-accent p-8 pb-12 shadow-lg dark:bg-white ">
          <>
            <h3 className="mb-8 border-b border-light-primary pb-4 text-xl font-semibold text-light-neutral dark:border-dark-secondary dark:text-dark-neutral">
              {comments?.length} Comment(s)
            </h3>
            {comments?.map((comment: any) => {
              return (
                <div
                  key={comment?.createdAt}
                  className=" mb-4 border-b border-light-primary pb-4 dark:border-dark-secondary"
                >
                  <p className="mb-4 text-light-neutral dark:text-dark-neutral">
                    <>
                      <div className="mr-2 inline h-12 w-12 rounded-[50%] bg-light-primary px-4 py-3 text-center align-middle dark:bg-dark-primary">
                        <span className="text-lg font-bold">
                          {comment?.author?.name[0]}
                        </span>
                      </div>
                      <span className=" font-semibold text-light-primary  dark:text-dark-secondary">
                        {comment?.author?.name}
                      </span>{" "}
                      wrote on{" "}
                      {moment(comment?.createdAt).format("MMM DD, YYYY")}
                    </>
                  </p>
                  <p className="  w-full whitespace-pre-line text-light-neutral dark:text-dark-neutral ">
                    {comment?.content}
                  </p>
                </div>
              );
            })}
          </>
        </div>
      )}
    </div>
  );
};

export default Comments;
