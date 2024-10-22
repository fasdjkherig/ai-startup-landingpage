import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Button from "@/components/Button";
import Link from "next/link";

export const Header = () => {
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

            <MenuIcon className="w-8 h-8 md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
