import React, { useState, useEffect } from "react";
import ApexLogo from "../assets/logo_the_web_apex.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";
import { useGetCategoriesQuery } from "../graphql/generated/schema";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState<boolean>(false);

  const [categories, setCategories] = useState<any>([]);

  const { data } = useGetCategoriesQuery({
    onCompleted: (data) => {
      setCategories(data.categories?.data);
    },
  });

  const themeChange = () => {
    if (checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <nav className="mx-auto my-0 flex items-center justify-between py-4  px-4">
      <div className="dropdown">
        <label
          tabIndex={0}
          className="flex cursor-pointer items-center space-x-2 text-light-primary dark:text-dark-primary"
        >
          <FontAwesomeIcon icon={faBarsStaggered} />
          <p className=" font-semibold ">Categories</p>
          <FontAwesomeIcon icon={faAngleDown} />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box mt-4 ml-4  w-52 bg-light-primary bg-gradient-to-br  from-primary/0 to-secondary/75 py-2 dark:bg-dark-primary dark:from-light-primary/0 dark:to-dark-secondary"
        >
          {categories.map((category: any) => (
            <li
              key={category.attributes.Slug}
              className="mb-3 cursor-pointer pb-3 font-semibold text-light-neutral hover:text-light-accent  hover:underline dark:text-dark-neutral hover:dark:text-dark-accent"
            >
              <Link href={`/category/${category.attributes.Slug}`}>
                {category.attributes.Name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <Link href="/">
          <ApexLogo className=" h-16 w-32 cursor-pointer rounded-full bg-light-primary bg-gradient-to-br from-primary/0 to-secondary/75 py-2 dark:bg-dark-primary dark:from-light-primary/0 dark:to-dark-secondary" />
        </Link>
      </div>

      <div className="">
        <div className="menu menu-horizontal space-x-6">
          <input
            type="checkbox"
            className="toggle toggle-md  border-light-secondary bg-light-primary dark:border-dark-primary dark:bg-dark-secondary"
            checked={checked}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setChecked(e.target.checked);
              themeChange();
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
