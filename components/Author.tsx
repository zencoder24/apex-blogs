import React from "react";
import Image from "next/image";

const Author = ({ author }: any) => {
  console.log(author);
  return (
    <div className=" bg-black relative mt-20 mb-8 rounded-lg bg-opacity-20 p-12 text-center">
      <div className=" absolute left-0 right-0 -top-14">
        <Image
          className="rounded-full align-middle"
          alt={author.data.attributes.Name}
          height={100}
          width={100}
          src={`${process.env.NEXT_PUBLIC_API_URL}${author.data.attributes.Photo.data.attributes.url}`}
        />
      </div>
      <h3 className="mt-4 mb-4 text-xl font-bold text-light-accent dark:text-dark-accent">
        {author.data.attributes.Name}
      </h3>
      <p className="text-lg text-light-accent dark:text-dark-accent">
        {author.data.attributes.Bio}
      </p>
    </div>
  );
};

export default Author;
