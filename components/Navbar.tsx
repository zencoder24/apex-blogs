import React, { useState } from "react";
import ApexLogo from "../assets/logo_the_web_apex.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faAngleDown,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";
import { useGetCategoriesQuery } from "../graphql/generated/schema";

const Navbar = () => {
  const [darkMode, setDarkmode] = useState<Boolean>(true);

  return (
    <nav className="mx-auto my-0 flex items-center justify-between  py-4 px-4  ">
      <div className=" center flex cursor-pointer items-center space-x-2 text-primary">
        <FontAwesomeIcon icon={faBarsStaggered} />
        <p className=" font-semibold ">Categories</p>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      <div className="">
        <Link href="/">
          <ApexLogo className=" h-16 w-32   cursor-pointer rounded-full bg-primary bg-gradient-to-br from-primary/0 to-secondary/75 py-2" />
        </Link>
      </div>

      <div className="">
        <div className="menu menu-horizontal space-x-6">
          <input
            type="checkbox"
            data-toggle-theme="mydarktheme,mylighttheme"
            className="toggle toggle-primary toggle-md"
          />
          {/* <FontAwesomeIcon icon={faToggleOn} className=' text-5xl'/> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
