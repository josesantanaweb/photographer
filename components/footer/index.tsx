"use client";

import { BiLogoFacebook, BiLogoInstagram, BiLogoWhatsapp } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-primary py-10">
      <div className="container flex items-center justify-between mx-auto px-20">
        <p className="text-gray-200 text-sm">
          Copyright © 2023 by JS. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a href="#" className="text-gray-200 text-xl">
            <BiLogoFacebook />
          </a>
          <a href="#" className="text-gray-200 text-xl">
            <BiLogoInstagram />
          </a>
          <a href="#" className="text-gray-200 text-xl">
            <BiLogoWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
