import React, { useState } from "react";
import ApexLogo from "../assets/logo_the_web_apex.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";
import {
  CategoryEntity,
  useGetCategoriesQuery,
} from "../graphql/generated/schema";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState(false);

  const [categories, setCategories] = useState<
    Array<CategoryEntity> | undefined
  >([]);

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

  const Dropdown = () => {
    return (
      <>
        <ul className=" absolute top-16 w-40 list-none text-start">
          {categories?.map((category: CategoryEntity) => (
            <li
              key={category?.attributes?.Slug}
              className=" pointer bg-orange-500"
            >
              <Link
                className=" block h-full w-full p-4 text-white"
                href={`/category/${category?.attributes?.Slug}`}
              >
                {category?.attributes?.Name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <nav className="mx-auto my-0 flex items-center justify-between py-4  px-4">
      <div id="dropdown" className="relative">
        <button
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
          className="flex cursor-pointer items-center space-x-2 text-light-primary dark:text-dark-primary"
        >
          <FontAwesomeIcon
            className="block md:hidden"
            icon={faBarsStaggered as IconProp}
          />
          <p className=" hidden font-semibold md:block ">Categories</p>
          <FontAwesomeIcon icon={faAngleDown as IconProp} />
        </button>
        {dropdown && <Dropdown />}
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
