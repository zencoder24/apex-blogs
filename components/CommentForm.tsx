import React, { useState, useEffect, useRef, useId } from "react";
import { useCreateCommentMutation } from "../graphql/generated/schema";

interface CommentFormComp {
  id: any;
}

const CommentForm = ({ id }: CommentFormComp) => {
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const commentEl = useRef<HTMLTextAreaElement | null>(null);
  const nameEl = useRef<HTMLInputElement | null>(null);
  const emailEl = useRef<HTMLInputElement | null>(null);

  const [addComment] = useCreateCommentMutation();

  const author_id_rand = useId();

  const handleCommentSubmission = () => {
    setError(false);

    const comment = commentEl.current;
    const name = nameEl.current;
    const email = emailEl.current;

    if (!comment?.value || !name?.value || !email?.value) {
      setError(true);
      return;
    }

    addComment({
      variables: {
        blog_relation: "api::blog.blog:" + id,
        author_id: Math.floor(Math.random() * 9000), // <--- Quick fix but not the ultimate solution for generating an id
        author_name: name.value,
        author_email: email.value,
        content: comment.value,
      },
      onCompleted() {
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
        formRef?.current?.reset();
        name.value = "";
        email.value = "";
        comment.value = "";
      },
    });
  };

  return (
    <form ref={formRef}>
      <div className=" mb-8 rounded-lg bg-light-accent p-8 pb-12 shadow-lg dark:bg-white ">
        <h3 className="border-grey-300 text: mb-8 border-b pb-4 text-xl font-bold  text-gray-300 dark:border-gray-300 dark:text-dark-neutral">
          Let Me Know What You Think...
        </h3>
        <div className="mb-4 grid grid-cols-1 gap-4">
          <textarea
            ref={commentEl}
            className="w-full rounded-lg bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200 dark:bg-dark-neutral dark:text-white dark:placeholder:text-white"
            placeholder="What are your thoughts?"
            name="comment"
          />
        </div>
        <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <input
            type="text"
            ref={nameEl}
            className="w-full rounded-lg bg-gray-100 py-2 px-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200 dark:bg-dark-neutral dark:text-white dark:placeholder:text-white"
            placeholder="Name"
            name="name"
          />
          <input
            type="text"
            ref={emailEl}
            className="w-full rounded-lg bg-gray-100 py-2 px-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200 dark:bg-dark-neutral dark:text-white dark:placeholder:text-white"
            placeholder="Email"
            name="email"
          />
        </div>
        {error && (
          <p className="text-xs text-red-400">All Field are required!</p>
        )}
        <div className="mt-8 ">
          <button
            type="button"
            onClick={handleCommentSubmission}
            className="ease  inline-block rounded-full bg-light-primary px-8 py-3 text-lg text-white transition duration-500  hover:bg-light-primary/70 dark:bg-dark-secondary dark:hover:bg-dark-secondary/70"
          >
            Post Comment
          </button>
          {showSuccessMessage && (
            <span className="float-right mt-3 text-xl font-semibold text-green-500">
              Comment Submitted!
            </span>
          )}
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
