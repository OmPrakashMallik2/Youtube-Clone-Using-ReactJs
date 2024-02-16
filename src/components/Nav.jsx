import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiVideoUploadLine } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";

function Nav() {
  return (
    <div className="bg-neutral-900 flex justify-between py-2 px-7 text-neutral-200">
      <div className="flex items-center">
        <AiOutlineMenu className="text-2xl font-semibold cursor-pointer" />
        <img
          className="w-24 ml-6 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="yt_logo"
        />
      </div>

      <div className="flex items-center w-2/5 rounded-full bg-neutral-700 ">
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-l-full px-4 py-2 font-semibold outline-none"
        />
        <button>
          <IoIosSearch className="w-16 text-2xl font-semibold rounded-r-full" />
        </button>
      </div>

      <div className="flex justify-between items-center">
        <RiVideoUploadLine className=" ml-6 text-2xl font-semibold cursor-pointer" />
        <IoMdNotificationsOutline className=" ml-6 text-2xl font-semibold cursor-pointer" />
        <RxAvatar className=" ml-6 text-4xl font-semibold cursor-pointer" />
      </div>
    </div>
  );
}

export default Nav;
