"use client";
import React, { useState } from "react";
import { tag, works } from "@/data";

const Works = () => {
  const [worksData, setWorksData] = useState(works);

  const filterTag = (tag: string) => {
    if (tag === "all") {
      setWorksData(works);
    } else {
      setWorksData(works.filter((item) => item.tag === tag));
    }
  };

  return (
    <section
      className="flex items-center justify-center transition-all py-28 bg-white"
      id="works"
    >
      <div className="container px-20">
        <div className="border-b border-gray-300 w-2/5 mb-4">
          <h3 className="mb-6 text-3xl font-bold text-primary">My Works</h3>
        </div>
        <div className="flex items-center gap-5 mb-5">
          {tag.map((item, index) => (
            <li
              key={index}
              className="text-md text-gray-400 list-none hover:text-primary cursor-pointer capitalize"
              onClick={() => filterTag(item)}
            >
              {item}
            </li>
          ))}
        </div>

        <div className="columns-3 gap-5">
          {worksData.map((item, index) => (
            <div
              className="grid grid-rows-1 mb-4 break-inside-avoid transition-all"
              key={index}
            >
              <img
                className="col-span-1 row-span-full"
                src={`/${item.imagen}.jpg`}
                alt="item"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
