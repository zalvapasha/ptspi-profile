"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    // Check initial scroll position
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed max-w-7xl w-full flex h-20 justify-between items-center px-5 md:px-16 top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <h1 className="text-2xl font-bold">SananaPelangi</h1>
      <div className="hidden sm:flex items-center gap-8 md:text-lg ">
        <Link href="/">Products</Link>
        <Link href="/">About</Link>
        <Link href="/">Certificates</Link>
        <Button size="lg" className="text-lg cursor-pointer">
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
