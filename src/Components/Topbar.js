import Image from "next/image";
import { useState } from "react";

const Topbar = ({ pageName, color, size, show, setShow }) => {
  const [showSearch, setSearch] = useState(false);
  return (
    <div className="top-bar shadow-lg shadow-gray-200 flex justify-between items-center px-10">
      <h1 className={`logo text-[${color}] flex items-center`}>
        <button
          className="mr-3 lg:hidden"
          onClick={() => {
            show ? setShow(false) : setShow(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        {pageName}
      </h1>

      <div className="search-bar">
        <input
          type="text"
          className="w-full bg-[#F7F7F7] rounded-md h-full"
          placeholder="Search..."
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 glass"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <button
        className="glass-only"
        onClick={() => {
          showSearch ? setSearch(false) : setSearch(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 glass"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>

      <div className="flex items-center">
        <img
          src="/images/avater.png"
          className=" rounded-lg"
          width={43}
          alt=""
        />
        <h3 className={`text-[18.67px] ml-2 `}>Super Admin</h3>
        <button className="ml-2 primary font-bold">
          <Image src="/images/Vector.png" width={18} height={12} alt="" />
        </button>
      </div>
      {showSearch && (
        <div className="absolute px-5 top-[100px] flex justify-center items-center left-0 right-0 w-full h-96 s-modal">
          <div className="search-bar-2">
            <input
              type="text"
              className="w-full bg-[#F7F7F7] rounded-md h-full"
              placeholder="Search..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 glass"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbar;
