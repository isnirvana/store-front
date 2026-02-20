import { Search } from "lucide-react";

function SearchInput() {
  return (
    <label className="flex flex-col min-w-40 h-12 w-full md:w-3/4">
      <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
        <div className="text-[#4c669a] flex border-none bg-white dark:bg-gray-800 items-center justify-center pl-4 rounded-l-xl border-r-0">
          <Search className="material-symbols-outlined text-xl" />
        </div>
        <input
          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-[#0d121b] dark:text-white focus:outline-0 focus:ring-0 border-none bg-white dark:bg-gray-800 placeholder:text-[#4c669a] px-4 pl-2 text-base font-normal leading-normal"
          placeholder="Search for a bundle..."
          // value=""
        />
      </div>
    </label>
  );
}

export default SearchInput;
