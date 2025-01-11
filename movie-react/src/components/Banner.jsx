import { useState, useEffect } from 'react';
import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import IconPlay from "../assets/play-button.png";
import ImgMovie1 from "../assets/temp-1.jpg";
import ImgMovie2 from "../assets/temp-2.jpeg";
import BgBanner1 from "../../public/banner-1.png";
import BgBanner2 from "../../public/banner-2.png";

const Banner = () => {
  const banners = [
    {
      id: 1,
      title: "Lật Mặt 7: Một Điều Ước",
      type: "Phim chiếu rạp",
      description: "Lật Mặt 7: Một Điều Ước sẽ kể câu chuyện về bà Nguyễn Thị Hai và năm người con, bộ phim xoáy vào một câu hỏi đầy nhức nhối trong xã hội hiện đại - khi cha mẹ già đi, liệu người con nào có trách nhiệm phụng dưỡng đây?",
      backgroundImage: BgBanner1,
      moviePoster: ImgMovie1,
      rating: 4.5
    },
    {
      id: 2,
      title: "Nghe nói em thích tôi",
      type: "TV Show", 
      description: "Đây là bộ phim kể về chuyện tình gương vỡ lại lành của một cặp đôi từng ly hôn. Sau 6 năm xa cách, cơ duyên giúp họ một lần nữa có cơ hội gặp gỡ nhau. Đáng nói hơn, cả hai vẫn còn yêu đối phương nên cuối cùng đã quyết định mở cửa trái tim mình.",
      backgroundImage: BgBanner2,
      moviePoster: ImgMovie2,
      rating: 4.0
    }
  ];

  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBannerIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentBanner = banners[currentBannerIndex];

  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <img 
          key={`full-${i}`} 
          src={IconRating} 
          alt="rating" 
          className="w-6 h-6 md:w-8 md:h-8 transition-transform hover:scale-110" 
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <img 
          key="half" 
          src={IconRatingHalf} 
          alt="rating" 
          className="w-6 h-6 md:w-8 md:h-8 transition-transform hover:scale-110" 
        />
      );
    }

    return stars;
  };

  return (
    <div className="relative h-[650px] mt-16 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out transform scale-105"
        style={{ 
          backgroundImage: `url(${currentBanner.backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between h-full py-8 md:py-0">
          <div className="md:w-1/2 space-y-6 md:pr-8">
            <span className="inline-block bg-gradient-to-r from-red-600 to-red-400 py-2 px-6 rounded-full text-sm font-medium">
              {currentBanner.type}
            </span>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {currentBanner.title}
            </h1>
            
            <div className="flex items-center space-x-2">
              {renderRatingStars(currentBanner.rating)}
            </div>
            
            <p className="text-gray-300 text-base leading-relaxed line-clamp-3">
              {currentBanner.description}
            </p>

            <div className="flex items-center space-x-4">
              <button className="px-6 py-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg font-medium hover:bg-white/20 transition-all duration-300">
                Chi tiết
              </button>
              <button className="px-6 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-300">
                Xem Phim
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
            <div className="relative w-[220px] md:w-[280px] rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-500 shadow-2xl">
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center group">
                <img 
                  src={IconPlay} 
                  alt="play" 
                  className="w-16 h-16 transform scale-90 group-hover:scale-100 transition-transform duration-300" 
                />
              </div>
              <img
                src={currentBanner.moviePoster}
                alt={currentBanner.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBannerIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentBannerIndex 
                  ? 'bg-red-600 w-8' 
                  : 'bg-gray-400 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;