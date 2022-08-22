import React from "react";
import { useGetCategoriesQuery } from "../graphql/generated/schema";
import { useState } from "react";
import Link from "next/link";

const Categories = () => {
  const [categories, setCategories] = useState<any>([]);

  const { data } = useGetCategoriesQuery({
    onCompleted: (data) => {
      setCategories(data.categories?.data);
    },
  });

  return (
    <div className="text-white mb-8 rounded-lg p-8 pb-12">
      <h3 className=" mb-8 border-b  pb-4 text-xl font-semibold text-light-primary dark:text-dark-primary ">
        Categories
      </h3>
      {categories.map((category: any) => (
        <Link
          key={category.attributes.Slug}
          href={`/category/${category.attributes.Slug}`}
        >
          <span className="mb-3 block cursor-pointer pb-3 font-semibold text-light-accent hover:text-light-primary  hover:underline dark:text-dark-accent hover:dark:text-dark-primary">
            {category.attributes.Name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
