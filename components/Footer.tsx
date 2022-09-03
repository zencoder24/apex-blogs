import React from "react";
import ApexLogo from "../assets/logo_the_web_apex.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Footer = () => {
  return (
    <footer className=" w-full bg-light-primary/90 text-center dark:bg-dark-secondary/90">
      <div className="w-full pt-4">
        <div className="mb-4 flex justify-center space-x-9">
          <Link href="https://github.com/zencoder24">
            <FontAwesomeIcon
              icon={faGithub as IconProp}
              className="h-6 w-6 cursor-pointer text-white "
            />
          </Link>
          <Link href="https://www.linkedin.com/in/rodderick-garland-58ba19160/">
            <FontAwesomeIcon
              icon={faLinkedin as IconProp}
              className="h-6 w-6 cursor-pointer text-white "
            />
          </Link>
          <Link href="www.twitter.com">
            <FontAwesomeIcon
              icon={faTwitter as IconProp}
              className="h-6 w-6 cursor-pointer text-white "
            />
          </Link>
        </div>
        <div className=" bg-light-primary p-4 text-center text-white   dark:bg-dark-secondary dark:text-gray-700">
          <ApexLogo className="mx-auto my-0 h-12 w-36 cursor-pointer md:h-16" />
          <div className="">© 2022 The Web Apex Blogs - @zencoder24 </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
