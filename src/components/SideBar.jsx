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
import { AiOutlineFire } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { IoMdMusicalNotes } from "react-icons/io";
import { PiFilmSlateBold } from "react-icons/pi";
import { CiStreamOn } from "react-icons/ci";
import { SiYoutubegaming } from "react-icons/si";
import { BiNews } from "react-icons/bi";
import { BsTrophy } from "react-icons/bs";
import { GoLightBulb } from "react-icons/go";
import { MdOutlinePodcasts } from "react-icons/md";
import { GiHanger } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineFlag } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";

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
  const explore = [
    {
      title: "Trending",
      icon: <AiOutlineFire />,
    },
    {
      title: "Shopping",
      icon: <AiOutlineShopping />,
    },
    {
      title: "Music",
      icon: <IoMdMusicalNotes />,
    },
    {
      title: "Movie",
      icon: <PiFilmSlateBold />,
    },
    {
      title: "Live",
      icon: <CiStreamOn />,
    },
    {
      title: "Gaming",
      icon: <SiYoutubegaming />,
    },
    {
      title: "News",
      icon: <BiNews />,
    },
    {
      title: "Sports",
      icon: <BsTrophy />,
    },
    {
      title: "Learning",
      icon: <GoLightBulb />,
    },
    {
      title: "Fasion & Beauty",
      icon: <GiHanger />,
    },
    {
      title: "Podcasts",
      icon: <MdOutlinePodcasts />,
    },
  ];

  const youtube = [
    {
      title: "YouTube Prem",
      icon: <FaYoutube />,
    },
    {
      title: "YouTube Studio",
      icon: <SiYoutubestudio />,
    },
    {
      title: "YouTube Music",
      icon: <SiYoutubemusic />,
    },
    {
      title: "YouTube Kids",
      icon: <TbBrandYoutubeKids />,
    },
  ];
  const youtube2 = [
    {
      title: "Settings",
      icon: <IoSettingsOutline />,
    },
    {
      title: "Report History",
      icon: <MdOutlineFlag />,
    },
    {
      title: "Help",
      icon: <IoMdHelpCircleOutline />,
    },
    {
      title: "Send feedback",
      icon: <MdOutlineFeedback />,
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
          <h2 className="font-medium text-medium mr-2">Explore</h2>
          <IoIosArrowForward className="text-xl font-medium" />
        </div>
        {explore.map((item, index) => {
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
          <h2 className="font-medium text-medium mr-2">More from YouTube</h2>
          <IoIosArrowForward className="text-xl font-medium" />
        </div>
        {youtube.map((item, index) => {
          return (
            <div key={index} className="flex items-center py-3 px-4 rounded-xl">
              <div className="text-red-600 text-2xl mr-6">{item.icon}</div>
              <h2 className="font-medium text-base">{item.title}</h2>
            </div>
          );
        })}
      </div>
      <div className="pb-2 border-b-2 border-b-neutral-500">
        {youtube2.map((item, index) => {
          return (
            <div key={index} className="flex items-center py-3 px-4 rounded-xl">
              <div className="text-2xl mr-6">{item.icon}</div>
              <h2 className="font-medium text-base">{item.title}</h2>
            </div>
          );
        })}
      </div>
      <div className="pb-2 border-b-2 border-b-neutral-50 pb-16">
        <p className="text-xs p-3 font-semibold">
          About Press Copyright <br /> Contact us Creators <br /> Advertise
          Developers
        </p>
        <p className="text-xs p-3 font-semibold">
          Terms Privacy Policy & Safety <br /> How YouTube works <br /> Test new
          features
        </p>
        <p className="text-xs p-3 font-semibold">© 2024 Google LLC</p>
      </div>
    </div>
  );
}

export default SideBar;
