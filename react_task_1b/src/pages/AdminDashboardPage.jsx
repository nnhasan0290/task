import React from "react";
import SingleBoard from "../components/SingleBoard";

const AdminDashboardPage = () => {
  return (
    <>
      <div className="w-full   h-screen text-gray-700 bg-black m-0 p-0">
        <div className="flex container mx-auto items-center justify-between">
          <h3 className="text-[48px] font-black leading-5 text-[#fff]">App</h3>
          <button className="bg-[#9BFF00] rounded-[40px] text-[16px] flex items-center gap-2 p-2 m-2 text-[#050505]">
            <svg
              className="h-[1rem]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
            <span>logout</span>
          </button>
        </div>
        <div>
          <div>
            <h2>Today's Leader Board</h2>
          </div>
          <div>
            <span>30 May, 2022</span>
            <span> submission open</span>
            <span>11.34</span>
          </div>
        </div>
        <SingleBoard />
        <SingleBoard />
        <SingleBoard />
      </div>
    </>
  );
};

export default AdminDashboardPage;
