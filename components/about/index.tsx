"use client";

import { BiCheck } from "react-icons/bi";

const About = () => {

  return (
    <section
      className="flex items-center justify-center transition-all py-28"
      id="about"
    >
      <div className="container grid items-center justify-center grid-cols-2 gap-32 px-20">
        <div>
          <h2 className="mb-4 text-4xl font-bold leading-10 text-primary">
            Hello, I’m Héctor Colmenares, a journalist and a sport photographer
            raised in Venezuela but based in Orlando
          </h2>
          <p className="mb-4 leading-7 text-gray-500">
            Passionate of capture and document the sport life with a journalist
            side but with the vision of a lense prepare for the moment
          </p>
          <ul className="pb-4 mb-4 border-b border-gray-200">
            <li className="flex items-center gap-3 my-4">
              <span className="flex items-center justify-center w-8 h-8 text-2xl text-gray-200 rounded-full bg-primary">
                <BiCheck />
              </span>
              5 years of experience in journalism and sport
            </li>
            <li className="flex items-center gap-3 my-4">
              <span className="flex items-center justify-center w-8 h-8 text-2xl text-gray-200 rounded-full bg-primary">
                <BiCheck />
              </span>
              2 projects with Baseball teams in Venezuela
            </li>
            <li className="flex items-center gap-3 my-4">
              <span className="flex items-center justify-center w-8 h-8 text-2xl text-gray-200 rounded-full bg-primary">
                <BiCheck />
              </span>
              Exceptional and dedicated work quality
            </li>
          </ul>
          <div className="flex items-center gap-8">
            <img className="w-20" src="/signature.svg" alt="" />
            <div>
              <h6 className="mb-1 text-xl">Martin Dan</h6>
              <p className="text-sm text-gray-500">Founder of Photography</p>
            </div>
          </div>
        </div>
        <div className="relative about">
          <img
            src="/about.jpg"
            alt="photographer"
            className="w-[400px] relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
