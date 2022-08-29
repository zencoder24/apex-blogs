import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { AuthorEntityResponse, Maybe } from "../graphql/generated/schema";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface AuthorComp {
  author: AuthorEntityResponse | undefined | null;
}

const Author = ({ author }: AuthorComp) => {
  return (
    <div className=" relative mt-20 mb-8 rounded-lg bg-black bg-opacity-20 p-12 text-center">
      <div className=" absolute left-0 right-0 -top-14">
        <Image
          className="rounded-full align-middle"
          alt={author?.data?.attributes?.Name}
          height={100}
          width={100}
          src={String(author?.data?.attributes?.Photo?.data?.attributes?.url)}
        />
      </div>
      <h3 className="mt-4 text-xl italic text-light-accent dark:text-dark-accent">
        Author
      </h3>
      <h3 className=" mb-2 text-xl font-bold text-light-accent dark:text-dark-accent">
        {author?.data?.attributes?.Name}
      </h3>
      <p className="text-lg text-light-accent dark:text-dark-accent">
        {author?.data?.attributes?.Bio}
      </p>
      <div className="social-links my-2 flex justify-center space-x-2 align-middle text-light-accent dark:text-dark-accent">
        <Link href={String(author?.data?.attributes?.githubLink)}>
          <FontAwesomeIcon
            className="h-6 cursor-pointer hover:text-[#BD2C00]  "
            icon={faGithub as IconProp}
          />
        </Link>
        <Link href={String(author?.data?.attributes?.linkedInLink)}>
          <FontAwesomeIcon
            className="h-6 cursor-pointer hover:text-[#0077b5] "
            icon={faLinkedin as IconProp}
          />
        </Link>
        <Link href={String(author?.data?.attributes?.twitterLink)}>
          <FontAwesomeIcon
            className="h-6 cursor-pointer hover:text-[#1DA1F2]"
            icon={faTwitter as IconProp}
          />
        </Link>
      </div>
    </div>
  );
};

export default Author;
