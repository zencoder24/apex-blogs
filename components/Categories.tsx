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
    <div className="mb-8 rounded-lg p-8 pb-12 text-white">
      <h3 className=" mb-8 border-b  pb-4 text-xl font-semibold text-primary ">
        Categories
      </h3>
      {categories.map((category: any) => (
        <Link
          key={category.attributes.Slug}
          href={`/category/${category.attributes.Slug}`}
        >
          <span className="mb-3 block cursor-pointer pb-3 font-semibold text-accent hover:text-primary hover:underline">
            {category.attributes.Name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
