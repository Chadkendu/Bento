"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className="mt-[100px] relative z-10 bg-opacity-5 pt-16 md:pt-20 lg:pt-24 w-full p-5"
        data-wow-delay=".1s"
      >
        <h1 className="text-xl font-bold uppercase text-center w-full p-5">
          @ Bento Blog
        </h1>
      </footer>
    </>
  );
};

export default Footer;
