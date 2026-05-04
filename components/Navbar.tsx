"use client";

import { useEffect, useState } from "react";
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
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";

const Navbar = () => {
  const t = useTranslations("Navbar");

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
      className={`fixed w-full top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex h-20 justify-between items-center px-5 md:px-16">
        <Link
          href="/"
          aria-label="Go home"
          title="Company"
          className="flex items-center gap-3"
        >
          <Image
            src={
              isScrolled
                ? "/images/ptssilogo-gradient.png"
                : "/images/ptssilogo-white.png"
            }
            alt="Logo"
            width={48}
            height={48}
            className="h-12 w-12 shrink-0"
          />
          <h1 className="text-2xl font-light">Sula Seafood Indonesia</h1>
        </Link>
        <div className="hidden sm:flex items-center gap-8 md:text-lg ">
          <Link href="/products">{t("products")}</Link>
          <Link href="/about">{t("about-us")}</Link>
          <Button
            size="lg"
            onClick={() => router.push("/contact-us")}
            className="text-lg bg-blue-900"
          >
            {t("contact-us")}
          </Button>
          <LanguageSwitcher />
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
                  {t("products")}
                </Link>
                <Link href="/about" className="text-lg">
                  {t("about-us")}
                </Link>
                <Link href="/certificates" className="text-lg">
                  Certificates
                </Link>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <div className="flex flex-col space-y-2 items-end  w-full">
                    <LanguageSwitcher />

                    <Button
                      size="lg"
                      onClick={() => router.push("/contact-us")}
                      className="w-full text-lg bg-blue-900"
                    >
                      {t("contact-us")}
                    </Button>
                  </div>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
