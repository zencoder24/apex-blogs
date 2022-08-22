import React from "react";

const HeaderContent = () => {
  return (
    <div>
      <h1 className="bg-gradient-to-br from-light-primary to-light-secondary bg-clip-text py-8 text-5xl font-extrabold text-transparent dark:from-dark-primary dark:to-dark-secondary/75">
        Apex-Blogs
      </h1>
      <p className=" italic text-light-primary dark:text-dark-primary">
        A series of posts of concepts, best practices, and life lesson learned
        while coding.
      </p>
    </div>
  );
};

export default HeaderContent;
