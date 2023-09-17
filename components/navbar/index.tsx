"use client";
import { menu } from "@/data"
import { Link } from "react-scroll"

const Navbar = () => {
  return (
    <nav className="relative bg-primary">
      <div className="container flex items-center justify-between mx-auto bg-primary">
        <img src="/logo.png" alt="logo" className="py-5 w-36" />
        <ul className="flex items-center w-2/4 gap-6">
          {menu.map((item) => (
            <Link
              to={item}
              key={item}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={`capitalize transition-colors hover:text-gray-200 text-md ${
                item === "about" ? "text-gray-200" : "text-gray-500"
              }`}
            >
              {item}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
