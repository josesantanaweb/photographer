"use client";

import { BiCheck } from "react-icons/bi";

const About = () => {

  return (
    <section className="flex items-center justify-center transition-all py-28">
      <div className="container grid items-center justify-center grid-cols-2 gap-32 px-20">
        <div>
          <h2 className="mb-4 text-4xl font-bold leading-10 text-primary">
            Hello, I'm Martin Dan, a professional photographer based on New York
          </h2>
          <p className="mb-4 leading-7 text-gray-500">
            I love to pause the wild, happy and real moments of life, just to
            hear their stories untold. Viverra tristique usto duis vitae diam
            neque nivamus estan ateuene artines viverra nec setlie no curabit
            tristique.
          </p>
          <ul className="pb-4 mb-4 border-b border-gray-200">
            <li className="flex items-center gap-3 my-4">
              <span className="flex items-center justify-center w-8 h-8 text-2xl text-gray-200 rounded-full bg-primary">
                <BiCheck />
              </span>
              Over 15 years of experience
            </li>
            <li className="flex items-center gap-3 my-4">
              <span className="flex items-center justify-center w-8 h-8 text-2xl text-gray-200 rounded-full bg-primary">
                <BiCheck />
              </span>
              200+ successfully executed projects
            </li>
            <li className="flex items-center gap-3 my-4">
              <span className="flex items-center justify-center w-8 h-8 text-2xl text-gray-200 rounded-full bg-primary">
                <BiCheck />
              </span>
              Exceptional work quality
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
          <img src="/about.jpg" alt="photographer" className="w-[400px] relative z-10" />
        </div>
      </div>
    </section>
  );
};

export default About;
