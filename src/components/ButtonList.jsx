import React from "react";

function ButtonList() {
  const buttonList = [
    "All",
    "Java",
    "Web development",
    "Podcasts",
    "Placement",
    "DSA",
    "All",
    "Java",
    "Web development",
    "Podcasts",
    "Placement",
    "DSA",
  ];

  return (
    <div className="py-3 ">
      {buttonList.map((btn, index) => {
        return (
          <button className="text-medium font-semibold py-1 px-3 bg-neutral-200 rounded-lg mx-2">
            {btn}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonList;
