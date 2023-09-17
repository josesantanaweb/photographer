"use client";
import { menu } from "@/data"

const Navbar = () => {
  return (
    <nav className="relative bg-primary">
      <div className="container flex items-center justify-between mx-auto bg-primary">
        <img src="/logo.png" alt="logo" className="py-5 w-36" />
        <ul className="flex items-center w-2/4 gap-6">
          {menu.map((item) => (
            <a
              href="#"
              key={item}
              className={`text-gray-500 capitalize transition-colors hover:text-gray-200 text-md ${
                item === "home" && "text-gray-200"
              }`}
            >
              {item}
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
