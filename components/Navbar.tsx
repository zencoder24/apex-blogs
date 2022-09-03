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

  return (
    <nav className="mx-auto my-0 flex items-center justify-between py-4  px-4">
      <div className="dropdown relative mx-2 inline-block">
        <a className="flex cursor-pointer items-center ">
          <span className="text-xl font-semibold text-light-accent dark:text-dark-accent">
            <FontAwesomeIcon
              className="block text-light-accent dark:text-dark-accent md:hidden"
              icon={faBarsStaggered as IconProp}
            />
          </span>

          <span className="mx-1 text-base font-semibold text-light-accent dark:text-dark-accent md:text-base">
            Categories
          </span>
          <span className="text-xl font-semibold text-light-accent dark:text-dark-accent">
            <FontAwesomeIcon
              className="text-light-accent dark:text-dark-accent"
              icon={faAngleDown as IconProp}
            />
          </span>
        </a>
        <ul className="dropdown-menu absolute left-1/3 z-[9999] hidden w-40 rounded-xl  bg-light-primary py-1 text-gray-700 dark:bg-slate-300 ">
          {categories?.map((category: CategoryEntity) => (
            <li key={category?.attributes?.Slug} className="cursor-pointer ">
              <Link href={`/category/${category?.attributes?.Slug}`}>
                <a className="block whitespace-nowrap rounded-xl px-4 py-2 text-light-neutral hover:bg-light-secondary hover:font-semibold dark:text-dark-neutral hover:dark:bg-dark-secondary">
                  {category?.attributes?.Name}
                </a>
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
