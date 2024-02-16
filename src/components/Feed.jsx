import React from "react";
import ButtonList from "./ButtonList";
import Videos from "./Videos";

function Feed() {
  return (
    <div className=" w-5/6 ml-auto">
      <ButtonList />
      <Videos />
    </div>
  );
}

export default Feed;
