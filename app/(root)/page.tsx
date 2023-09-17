"use client";
import { useState, useEffect } from "react";

import Navbar from "@/components/navbar";
import Header from "@/components/header";
import About from "@/components/about";


const RootPage = () => {

  return (
    <>
      <Navbar />
      <Header />
      <About />
    </>
  );
};

export default RootPage;
