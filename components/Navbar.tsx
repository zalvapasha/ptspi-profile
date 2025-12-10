"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { IcMenu } from "@/assets/icons";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const router = useRouter();

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
      <Link href="/" aria-label="Go home" title="Company">
        <h1 className="text-2xl font-bold">SananaPelangi</h1>
      </Link>
      <div className="hidden sm:flex items-center gap-8 md:text-lg ">
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        <Button
          size="lg"
          onClick={() => router.push("contact-us")}
          className="text-lg"
        >
          Contact Us
        </Button>
      </div>
      <div className="flex sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <IcMenu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Navigation menu</SheetDescription>
            </SheetHeader>
            <div className="grid flex-1 auto-rows-min gap-6 px-4 mt-8">
              <Link href="/products" className="text-lg">
                Products
              </Link>
              <Link href="/about" className="text-lg">
                About
              </Link>
              <Link href="/" className="text-lg">
                Certificates
              </Link>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button
                  size="lg"
                  onClick={() => router.push("contact-us")}
                  className="w-full text-lg"
                >
                  Contact Us
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
