import LogoIcon from "@/assets/logo.svg";
import Link from "next/link";
import XLogo from "@/assets/social-x.svg";
import InstagramLogo from "@/assets/social-instagram.svg";
import YoutubeLogo from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className=" py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex items-center gap-2 lg:flex-1">
            <LogoIcon className="w-6 h-6" />
            <h2 className="text-sm font-medium">AI Startup Landing Page</h2>
          </div>
          <nav className="py-8 flex flex-col lg:flex-row gap-5 lg:flex-1">
            <Link
              href="#"
              className="text-white/70 hover:text-white transition text-xs md:text-sm"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white transition text-xs md:text-sm"
            >
              Developers
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white transition text-xs md:text-sm"
            >
              Developers
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white transition text-xs md:text-sm"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white transition text-xs md:text-sm"
            >
              Changelog
            </Link>
          </nav>

          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <XLogo className="w-6 h-6 text-white/40 hover:text-white transition cursor-pointer" />
            <InstagramLogo className="w-6 h-6 text-white/40 hover:text-white transition cursor-pointer" />
            <YoutubeLogo className="w-6 h-6 text-white/40 hover:text-white transition cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};
