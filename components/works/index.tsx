"use client";
import React, { useState } from "react";
import { tag, works } from "@/data";

const Works = () => {
  const [worksData, setWorksData] = useState(works);
  const [tagActive, setTagActive] = useState("");

  const filterTag = (tag: string) => {
    if (tag === "all") {
      setWorksData(works);
    } else {
      setWorksData(works.filter((item) => item.tag === tag));
    }
    setTagActive(tag);
  };

  return (
    <section
      className="flex items-center justify-center transition-all bg-white py-28"
      id="works"
    >
      <div className="container px-20">
        <div className="w-2/5 mb-4 border-b border-gray-300">
          <h3 className="mb-6 text-3xl font-bold text-primary">My Works</h3>
        </div>
        <div className="flex items-center gap-5 mb-5">
          {tag.map((item: any, index: number) => (
            <button
              key={index}
              className={`text-md list-none hover:text-primary cursor-pointer capitalize ${
                item === tagActive ? 'text-primary font-semibold' : 'text-gray-400'
              }`}
              onClick={() => filterTag(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="gap-5 columns-3">
          {worksData.map((item, index) => (
            <div
              className="grid grid-rows-1 mb-4 transition-all break-inside-avoid"
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
