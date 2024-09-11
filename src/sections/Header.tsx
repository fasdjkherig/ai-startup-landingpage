import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";

export const Header = () => {
  return (
    <header className=" py-4 border-b border-white/15 md:border-none">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
          <div className="h-12 w-12 border rounded-lg border-white/15 inline-flex justify-center items-center">
            <LogoIcon className="w-8 h-8 " />
          </div>

          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#" className="text-white/70 hover:text-white transition">
              Features
            </a>
            <a href="#" className="text-white/70 hover:text-white transition">
              Developers
            </a>
            <a href="#" className="text-white/70 hover:text-white transition">
              Pricing
            </a>
            <a href="#" className="text-white/70 hover:text-white transition">
              Changelog
            </a>
          </nav>

          <div className="flex justify-between gap-4 items-center">
            <button className="rounded-lg py-2 px-3 text-white text-sm font-medium bg-gradient-to-b from-[#190D2E] to-[#4A208A] shadow-custom-shadow">
              Join waitlist
            </button>

            <MenuIcon className="w-8 h-8 md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
