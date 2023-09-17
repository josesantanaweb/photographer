"use client";
import { useState, useEffect } from "react";

import Navbar from "@/components/navbar";
import Header from "@/components/header";
import About from "@/components/about";
import Services from "@/components/services";
import Works from "@/components/works";


const RootPage = () => {

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Works />
    </>
  );
};

export default RootPage;
