import PropTypes from "prop-types";
import { useState } from "react";

const Header = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="p-4 flex justify-between items-center fixed top-0 left-0 w-full z-[9999] bg-black shadow-md">
      <div className="flex items-center gap-8">
        <h1
          className="text-[30px] uppercase text-red-700 font-bold cursor-pointer"
          onClick={handleScrollToTop}
        >
          Hafo Movie
        </h1>
        <nav className="hidden md:flex items-center space-x-5">
          <a href="#" className="text-white hover:text-red-700 transition duration-300">
            Home
          </a>
          <a href="#" className="text-white hover:text-red-700 transition duration-300">
            About
          </a>
          <a href="#" className="text-white hover:text-red-700 transition duration-300">
            Contact
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-5">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 p-2 text-black rounded-lg focus:ring focus:ring-red-700 focus:outline-none transition duration-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-red-700 text-white px-3 py-1 rounded-lg hover:bg-red-800 transition duration-300"
          onClick={() => onSearch(search)}
        >
          Search
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;
