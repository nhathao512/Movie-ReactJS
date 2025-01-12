# 🎥 Movie App 🍿

This is a movie browsing web application built with **React**, **Tailwind CSS**, and **Vite**. It utilizes **The Movie Database (TMDB) API** to display trending, top-rated movies and allows users to search for specific movies.

## ✨ Features

- 🌟 **Trending Movies:** Display a list of popular movies.
- ⭐ **Top-Rated Movies:** Show highly rated movies.
- 🔍 **Search Functionality:** Users can search for movies.
- 🎬 **Trailer Modal:** Watch movie trailers via YouTube.
- 📱 **Responsive Design:** Ensures compatibility with various devices.

## 🗂️ Project Structure

```plaintext
.
├── public
│   ├── banner-1.png
│   ├── banner-2.png
│   └── vite.svg
├── src
│   ├── assets
│   │   ├── bg-login.jpg
│   │   ├── play-button.png
│   │   ├── rating-half.png
│   │   ├── rating.png
│   │   ├── react.svg
│   │   ├── temp-1.jpg
│   │   └── temp-2.jpeg
│   ├── components
│   │   ├── Banner.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── MovieList.jsx
│   │   └── MovieSearch.jsx
│   ├── context
│   │   └── MovieDetailContext.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## ⚙️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/movie-app.git
   ```

2. Navigate into the project directory:

   ```bash
   cd movie-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   VITE_API_KEY=your_tmdb_api_key
   VITE_IMG_URL=https://image.tmdb.org/t/p/w500
   ```

## 🚀 Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and go to `http://localhost:5173`.

## 🧩 Components

### `Banner.jsx`
🎥 Displays a banner at the top of the app.

### `Header.jsx`
🔍 Includes the search bar for movie queries.

### `Footer.jsx`
📋 Shows a footer with app-related information.

### `MovieList.jsx`
🎞️ Displays lists of movies (e.g., trending, top-rated) in a carousel.

### `MovieSearch.jsx`
🔎 Displays search results based on user input.

### `MovieDetailContext.jsx`
🛠️ Provides context for handling movie trailer modal and state management.

## 📚 Libraries Used

- ⚛️ **React**: UI Framework
- 🎨 **Tailwind CSS**: Styling
- 🎠 **react-multi-carousel**: For responsive carousels
- 🪟 **react-modal**: For modals
- ▶️ **YouTube API**: To play trailers

## 🌐 API Integration

This app integrates with [TMDB API](https://developers.themoviedb.org/3) for fetching movie data.

### API Endpoints Used

- 🌟 **Popular Movies:** `/movie/popular`
- ⭐ **Top Rated Movies:** `/movie/top_rated`
- 🔍 **Search Movies:** `/search/movie`
- 🎥 **Movie Trailers:** `/movie/{movie_id}/videos`

## 🛠️ How It Works

- **Fetching Data:**
  - `useEffect` fetches data for trending and top-rated movies on initial render.
  - Search functionality makes API calls dynamically based on user input.

- **Context API:**
  - Used for managing modal and trailer-related state across the app.

- **Responsive Design:**
  - Carousel is implemented to adapt to various screen sizes.

## ⚖️ License

This project is licensed under the MIT License. See the [License](LICENSE.md) file for details

---

## 🙏 Thank you for visiting this repository! Feel free to clone, explore, and contribute ❤️.
