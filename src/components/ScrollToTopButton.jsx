import { useState, useEffect } from "react";
import UpArrow from "../assets/up-arrow.png";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 p-3 rounded-full bg-red-900 hover:bg-red-600 text-white shadow-lg transition-transform duration-300 transform hover:scale-110"
      >
        <img src={UpArrow} alt="scroll to top" className="w-4 h-4 mx-auto filter invert" />
      </button>
    )
  );
};

export default ScrollToTopButton;
