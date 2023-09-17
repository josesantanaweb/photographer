"use client";
import { useState, useEffect } from "react";

import Navbar from "@/components/navbar";
import Header from "@/components/header";
import About from "@/components/about";
import Services from "@/components/services";
import Works from "@/components/works";
import Footer from "@/components/footer";


const RootPage = () => {

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Works />
      <Footer />
    </>
  );
};

export default RootPage;
