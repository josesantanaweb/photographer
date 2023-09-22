"use client";

import { services } from "@/data";

const Services = () => {

  const serviceItemClass = (index: number) => {
    if (index === 0) {
      return "border-b border-r border-gray-700";
    }

    if (index === 1) {
      return "border-b border-gray-700";
    }

    if (index === 2) {
      return "border-b border-l border-gray-700";
    }

    if (index === 3) {
      return "border-r border-gray-700";
    }

    if (index === 5) {
      return "border-l border-gray-700";
    }

  }

  return (
    <section
      className="flex items-center justify-center transition-all py-28 bg-primary"
      id="services"
    >
      <div className="container px-20">
        <div className="w-2/5 m-auto text-center">
          <h2 className="mb-6 text-3xl font-bold text-center text-gray-200">
            My Services
          </h2>
          <p className="text-center text-gray-400 text-md mb-14">
            With the capacity of make multitask jobs, I’m a passionate
            photographer and Journalist, with other abilities too:
          </p>
        </div>
        <div className="grid items-center justify-center grid-cols-3">
          {services.map((service, index) => (
            <div
              className={`p-10 h-[250px] ${serviceItemClass(index)}`}
              key={index}
            >
              <img
                src={`/${service.icon}.svg`}
                alt="icon"
                className="w-10 mb-6"
              />
              <h6 className="mb-4 text-xl font-bold text-gray-200">
                {service.title}
              </h6>
              <p className="text-gray-400 text-md">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
