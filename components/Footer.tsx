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
    <footer className=" footer items-center bg-primary bg-gradient-to-br from-primary/0 to-secondary/75 p-2 text-neutral-content">
      <div className="grid-flow-col items-center">
        <ApexLogo className="h-12 w-36 cursor-pointer md:h-16" />
        <p className="font-bold text-white">
          © 2022 The Web Apex Blogs - @zencoder24{" "}
        </p>
      </div>
      <div className="grid grid-flow-col gap-4 md:place-self-center md:justify-self-end">
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
    </footer>
  );
};

export default Footer;
