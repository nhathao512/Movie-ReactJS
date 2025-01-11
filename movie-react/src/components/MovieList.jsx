import PropTypes from "prop-types";
import { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MovieContext } from "../context/MovieDetailContext";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1200, min: 600 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};

const MovieList = ({ title, data }) => {
  const { handleVideoTrailer } = useContext(MovieContext);

  return (
    <div className="my-10 px-10 max-w-full">
      {/* Title */}
      <h2 className="text-xl font-bold uppercase mb-6 text-gray-100 tracking-wider">
        {title}
      </h2>

      {/* Carousel */}
      <Carousel responsive={responsive} draggable={false} itemClass="px-2">
        {data?.map((movie) => (
          <div
            key={movie.id}
            className="relative w-[200px] h-[300px] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer"
            onClick={() => handleVideoTrailer(movie.id)}
          >
            {/* Background Image */}
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${
                  movie.poster_path
                    ? `${import.meta.env.VITE_IMG_URL}${movie.poster_path}`
                    : "https://via.placeholder.com/200x300?text=No+Image"
                })`,
              }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-0" />

            {/* Movie Title */}
            <div className="absolute bottom-4 left-4 right-4 z-10 text-center">
              <h3 className="text-md font-semibold text-white truncate">
                {movie.name || movie.title || movie.original_title}
              </h3>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array,
};

export default MovieList;
