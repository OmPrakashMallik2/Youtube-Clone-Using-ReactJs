import React from "react";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdHistory } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { LiaDownloadSolid } from "react-icons/lia";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";

function SideBar() {
  const sideBar1 = [
    {
      title: "Home",
      icon: <GoHomeFill />,
    },
    {
      title: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      title: "Subscriptions",
      icon: <MdOutlineSubscriptions />,
    },
  ];

  const sideBar2 = [
    {
      title: "Your channel",
      icon: <CgProfile />,
    },
    {
      title: "History",
      icon: <MdHistory />,
    },
    {
      title: "Your videos",
      icon: <BiSolidVideos />,
    },
    {
      title: "Watch later",
      icon: <MdOutlineWatchLater />,
    },
    {
      title: "Downloads",
      icon: <LiaDownloadSolid />,
    },
    {
      title: "Liked videos",
      icon: <AiOutlineLike />,
    },
  ];
  const sideBar3 = [
    {
      title: "Home",
      icon: <GoHomeFill />,
    },
    {
      title: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      title: "Subscriptions",
      icon: <MdOutlineSubscriptions />,
    },
  ];

  return (
    <div className="w-1/6 pl-3 pr-5 h-screen overflow-y-scroll fixed">
      <div className="pb-2 border-b-2 border-b-neutral-500">
        {sideBar1.map((item, index) => {
          return (
            <div key={index} className="flex items-center py-3 px-4 rounded-xl">
              <div className="text-2xl mr-6">{item.icon}</div>
              <h2 className="font-medium text-base">{item.title}</h2>
            </div>
          );
        })}
      </div>
      <div className="pb-2 border-b-2 border-b-neutral-500">
        <div className="flex items-center py-2 px-4 rounded-xl">
          <h2 className="font-medium text-medium mr-2">You</h2>
          <IoIosArrowForward className="text-xl font-medium" />
        </div>
        {sideBar2.map((item, index) => {
          return (
            <div key={index} className="flex items-center py-3 px-4 rounded-xl">
              <div className="text-2xl mr-6">{item.icon}</div>
              <h2 className="font-medium text-base">{item.title}</h2>
            </div>
          );
        })}
      </div>
      <div className="pb-2 border-b-2 border-b-neutral-500">
        <div className="flex items-center py-2 px-4 rounded-xl">
          <h2 className="font-medium text-medium mr-2">You</h2>
          <IoIosArrowForward className="text-xl font-medium" />
        </div>
        {sideBar2.map((item, index) => {
          return (
            <div key={index} className="flex items-center py-3 px-4 rounded-xl">
              <div className="text-2xl mr-6">{item.icon}</div>
              <h2 className="font-medium text-base">{item.title}</h2>
            </div>
          );
        })}
      </div>
      <div className="pb-2 border-b-2 border-b-neutral-500">
        <div className="flex items-center py-2 px-4 rounded-xl">
          <h2 className="font-medium text-medium mr-2">You</h2>
          <IoIosArrowForward className="text-xl font-medium" />
        </div>
        {sideBar2.map((item, index) => {
          return (
            <div key={index} className="flex items-center py-3 px-4 rounded-xl">
              <div className="text-2xl mr-6">{item.icon}</div>
              <h2 className="font-medium text-base">{item.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
