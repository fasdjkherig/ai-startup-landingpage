"use client";

import { useState } from "react";
import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Button from "@/components/Button";
import Link from "next/link";
import CloseIcon from "@/assets/icon-close.svg";

export const Header = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <header className=" py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur">
          <div className="h-12 w-12 border rounded-lg border-white/15 inline-flex justify-center items-center">
            <LogoIcon className="w-8 h-8 " />
          </div>

          <nav className="hidden md:flex gap-8 text-sm">
            <Link
              href="#"
              className="text-white/70 hover:text-white transition"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white transition"
            >
              Developers
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white transition"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white transition"
            >
              Changelog
            </Link>
          </nav>

          <div className="flex justify-between gap-4 items-center">
            <Button>join waitlist</Button>

            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? (
                <CloseIcon className="w-8 h-8" />
              ) : (
                <MenuIcon className="w-8 h-8 md:hidden" />
              )}
            </button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <nav className="fixed right-0 mt-2 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <Link
              href="#"
              className="text-white/70 hover:text-white transition py-4"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white transition py-4"
            >
              Developers
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white transition py-4"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white transition py-4"
            >
              Changelog
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
