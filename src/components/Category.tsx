import React from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <div>
      <div className="category-links w-full flex justify-between py-4">
        <h1 className="text-2xl font-bold">Nos super catégories</h1>
        <h3 className="text-lg font-bold flex items-center">
          Tout afficher
          <svg
            className="ml-4"
            width="50"
            height="16"
            viewBox="0 0 50 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M49.7071 8.70711C50.0976 8.31658 50.0976 7.68342 49.7071 7.29289L43.3431 0.928932C42.9526 0.538408 42.3195 0.538408 41.9289 0.928932C41.5384 1.31946 41.5384 1.95262 41.9289 2.34315L47.5858 8L41.9289 13.6569C41.5384 14.0474 41.5384 14.6805 41.9289 15.0711C42.3195 15.4616 42.9526 15.4616 43.3431 15.0711L49.7071 8.70711ZM0 9H49V7H0V9Z"
              fill="black"
            />
          </svg>
        </h3>
      </div>
      <div className="category-card">
        <CategoryCard />
      </div>
    </div>
  );
};

export default Category;
