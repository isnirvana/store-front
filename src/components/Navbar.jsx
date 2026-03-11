import { Signal, Bell, Menu } from "lucide-react";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80  backdrop-blur-md">
      <div className="flex items-center p-4 pb-2 justify-between">
        <div className="flex items-center gap-3">
          <Signal className="material-symbols-outlined text-primary text-2xl" />
          <h2 className="text-[#0d121b] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
            Marketplace
          </h2>
        </div>
        <div className="px-4 py-3 hidden md:block w-full">
          <SearchInput />
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-sm">
            <Bell className="material-symbols-outlined text-[#4c669a]" />
          </button>
          <button className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-sm">
            <Menu className="text-[#4c669a]" />
          </button>
        </div>
      </div>
      {/* <div className="px-4 py-3 md:hidden"><SearchInput /></div> */}
    </header>
  );
};

export default Navbar;
