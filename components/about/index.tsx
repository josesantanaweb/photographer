"use client";

import { BiCheck } from "react-icons/bi";

const About = () => {

  return (
    <section className="flex items-center justify-center px-8 transition-all py-28">
      <div className="container grid grid-cols-2 items-center justify-center px-20 gap-32">
        <div>
          <h2 className="text-4xl text-primary font-bold mb-4 leading-10">
            Hello, I'm Martin Dan, a professional photographer based on New York
          </h2>
          <p className="text-gray-500 leading-7 mb-4">
            I love to pause the wild, happy and real moments of life, just to
            hear their stories untold. Viverra tristique usto duis vitae diam
            neque nivamus estan ateuene artines viverra nec setlie no curabit
            tristique.
          </p>
          <ul className="mb-4 pb-4 border-b border-gray-200">
            <li className="my-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-2xl text-gray-200">
                <BiCheck />
              </span>
              Over 15 years of experience
            </li>
            <li className="my-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-2xl text-gray-200">
                <BiCheck />
              </span>
              200+ successfully executed projects
            </li>
            <li className="my-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-2xl text-gray-200">
                <BiCheck />
              </span>
              Exceptional work quality
            </li>
          </ul>
          <div className="flex items-center gap-8">
            <img className="w-20" src="/signature.svg" alt="" />
            <div>
              <h6 className="text-xl mb-1">Martin Dan</h6>
              <p className="text-sm text-gray-500">Founder of Photography</p>
            </div>
          </div>
        </div>
        <div className="about relative">
          <img src="/about.jpg" alt="photographer" className="w-[400px] relative z-10" />
        </div>
      </div>
    </section>
  );
};

export default About;
