"use client";
import mockData from "@/data/mockData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function getUniqueCategories(data) {
  const categories = data.map((item) => item.category);
  return [...new Set(categories)];
}

const NavigationMenu = () => {
  const categories = getUniqueCategories(mockData);
  const path = usePathname();

  return (
    <div className="bg-gray-800 p-4">
      <ul className="flex space-x-4 jusify-center">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`text-white ${
              path === "/productos/" + category.toLowerCase()
                ? "underline"
                : "no-underline"
            }`}
          >
            <Link href={`/productos/${category.toLowerCase()}`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationMenu;
