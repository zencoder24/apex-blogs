import React from "react";

interface HeaderContentComp {
  category: string;
}

const HeaderContent = ({ category }: HeaderContentComp) => {
  return (
    <div>
      <h1 className="bg-gradient-to-br from-light-primary to-light-secondary bg-clip-text py-8 text-5xl font-extrabold text-transparent dark:from-dark-primary dark:to-dark-secondary/75">
        Apex-Blogs {category}
      </h1>
      <p className=" italic text-light-primary dark:text-dark-primary">
        A series of posts of concepts, best practices, and life lessons learned
        while coding.
      </p>
    </div>
  );
};

export default HeaderContent;
