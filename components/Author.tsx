import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Author = ({ author }: any) => {
  console.log(author);
  return (
    <div className=" relative mt-20 mb-8 rounded-lg bg-black bg-opacity-20 p-12 text-center">
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
      <div className="social-links my-2 flex justify-center space-x-2 align-middle">
        <Link href={author.data.attributes.githubLink}>
          <FontAwesomeIcon
            className="h-6 cursor-pointer hover:text-[#BD2C00]  "
            icon={faGithub}
          />
        </Link>
        <Link href={author.data.attributes.linkedInLink}>
          <FontAwesomeIcon
            className="h-6 cursor-pointer hover:text-[#0077b5] "
            icon={faLinkedin}
          />
        </Link>
        <Link href={author.data.attributes.twitterLink}>
          <FontAwesomeIcon
            className="h-6 cursor-pointer hover:text-[#1DA1F2]"
            icon={faTwitter}
          />
        </Link>
      </div>
    </div>
  );
};

export default Author;
