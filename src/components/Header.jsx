import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [isAccontOpen, setIsAccountOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const genreRef = useRef(null);
  const accountRef = useRef(null);

  const genres = [
    "Hành động",
    "Hài hước",
    "Kinh dị",
    "Tâm lý",
    "Tình cảm",
    "Hoạt hình",
    "Học đường",
    "Thể thao",
    "TV Show",
    "Phim chiếu rạp",
    "Khoa học viễn tưởng",
    "Phiêu lưu",
  ];

  const account = [
    "Thông tin cá nhân",
    "Danh sách yêu thích",
    "Lịch sử xem phim",
    "Đăng xuất",
  ];

  const handleScrollToTopOrReload = () => {
    if (window.scrollY === 0) {
      window.location.reload();
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const toggleGenreList = () => {
    setIsGenreOpen((prev) => !prev);
  };

  const toggleAccontList = () => {
    setIsAccountOpen((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle("dark", !isDarkMode);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (genreRef.current && !genreRef.current.contains(event.target)) {
        setIsGenreOpen(false);
      } else if (
        accountRef.current &&
        !accountRef.current.contains(event.target)
      ) {
        setIsAccountOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="p-4 flex justify-between items-center fixed top-0 left-0 w-full z-[9999] bg-black shadow-md">
      <div className="flex items-center gap-8">
        <h1
          className="text-[30px] uppercase text-red-700 font-bold cursor-pointer"
          onClick={handleScrollToTopOrReload}
        >
          Hafo Movie
        </h1>
        <nav className="hidden md:flex items-center space-x-5 relative">
          <a
            href="#"
            className="text-white hover:text-red-700 transition duration-300"
            onClick={handleScrollToTopOrReload}
          >
            Trang chủ
          </a>
          <div className="relative" ref={genreRef}>
            <button
              onClick={toggleGenreList}
              className="text-white hover:text-red-700 transition duration-300"
            >
              Thể loại{" "}
              <i className="fa-solid fa-chevron-down text-[10px] relative top-[-2px]"></i>
            </button>
            {isGenreOpen && (
              <ul className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white/50 text-black shadow-lg rounded-lg w-40 md:w-52 lg:w-44 backdrop-blur-md">
                {genres.map((genre, index) => (
                  <li
                    key={index}
                    className="p-2 text-[15px] md:text-[15px] lg:text-[15px] hover:text-red-600 transition duration-300 cursor-pointer"
                  >
                    {genre}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <a
            href="#"
            className="text-white hover:text-red-700 transition duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="text-white hover:text-red-700 transition duration-300"
          >
            Contact
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-5">
        <input
          type="text"
          placeholder="Search"
          className="border bg-white/20 border-gray-300 p-2 text-white rounded-lg focus:ring focus:ring-red-700 focus:outline-none transition duration-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch(search.trim()); 
            }
          }}
        />
        <button
          className="bg-red-700 text-white px-3 py-1 rounded-lg hover:bg-red-800 transition duration-300"
          onClick={() => onSearch(search)}
        >
          Search
        </button>
        <div className="relative" ref={accountRef}>
          <button
            onClick={toggleAccontList}
            className="text-white hover:text-red-700 transition duration-300"
          >
            Tài khoản{" "}
            <i className="fa-solid fa-chevron-down text-[10px] relative top-[-2px]"></i>
          </button>
          {isAccontOpen && (
            <ul className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 bg-white/50 text-black shadow-lg rounded-lg w-40 md:w-52 lg:w-40 backdrop-blur-md">
              {account.map((genre, index) => (
                <li
                  key={index}
                  className="p-2 text-[15px] md:text-[15px] lg:text-[15px] hover:text-red-600 transition duration-300 cursor-pointer"
                >
                  {genre}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          onClick={toggleDarkMode}
          className="text-white hover:text-yellow-500 transition duration-300"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;
