import { Icon } from "@iconify/react";
import React from "react";

const SearchBar = () => {
  return (
    <div>
      <form className="mt-10 mx-auto max-w-xl py-2 px-6 rounded-full bg-transparent border flex focus-within:border-gray-300">
        <input
          type="text"
          placeholder="Que voulez-vous apprendre ?"
          className="bg-transparent placeholder-white w-full focus:outline-none pr-4 border-0 focus:ring-0 px-0 py-0"
          name="topic"
        />
        <button className="flex flex-row   items-center justify-center min-w-[130px] px-1 rounded-full font-medium tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-violet-700 text-white border-transparent  h-[38px] -mr-3">
          <Icon icon="gg:search" fontSize={18} />
          <p className="ml-4">Search</p>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
