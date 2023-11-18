import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MovieCard from "./MovieCard";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

// Define a type for the category props
type CategoryProps = {
  title: string;
  fetchUrl: string;
  apiKey: string;
};

const MovieCategory: React.FC<CategoryProps> = ({
  title,
  fetchUrl,
  apiKey,
}) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMoviesForCategory = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzRmNmJkN2IyMjViYzE3OGQ2ZDhmYmYxZmZiZWM3NCIsInN1YiI6IjYxYzA1MzI2YTI4NGViMDA5ODExMjExMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.waZlTNjE1KbWwrzoTCa_ogrs-yWzmj1jUFQDmqpwc30",
        },
      };
      try {
        const response = await fetch(`${fetchUrl}?api_key=${apiKey}`, options);
        const data = await response.json();
        setMovies(data.results); // Adjust according to the actual API response
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesForCategory();
  }, [fetchUrl, apiKey]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  // Slices the movies array into chunks of the desired size for each slide.
  const chunkSize = 6;
  const movieChunks = [];
  for (let i = 0; i < movies?.length; i += chunkSize) {
    movieChunks.push(movies.slice(i, i + chunkSize));
  }

  return (
    <Box sx={{ p: 4 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          gap: 1,
          "&:hover .explore-all": {
            opacity: 1, // Reveal the "Explore All" text on hover
          },
          "&:hover .explore-icon": {
            transform: "translateX(10px)", // Move the icon to the right on hover
          },
          ".explore-all": {
            opacity: 0, // Initially hidden
            transition: "opacity 0.3s ease-in-out", // Smooth transition for opacity
          },
          ".explore-icon": {
            transition: "transform 0.3s ease-in-out", // Smooth transition for transform
          },
        }}
      >
        <Typography variant="h6" gutterBottom component="span">
          {title}
        </Typography>
        <IconButton
          size="small"
          className="explore-icon"
          sx={{ color: "white" }}
        >
          <KeyboardArrowRightIcon />
        </IconButton>
        <Typography
          variant="subtitle2"
          component="span"
          className="explore-all"
          sx={{ color: "lightblue" }}
        >
          Explore All
        </Typography>
      </Box>

      <Carousel
        showArrows={true}
        autoPlay={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows={true}
        swipeable={true}
        dynamicHeight={true}
        emulateTouch={true}
      >
        {movieChunks.map((chunk, index) => (
          <Grid container spacing={2} key={index}>
            {chunk.map((movie) => {
              console.log("movie", movie);
              return (
                <Grid item xs={12} sm={6} md={4} lg={2} key={movie.id}>
                  <MovieCard
                    poster_path={movie.poster_path}
                    title={movie.title}
                  />
                </Grid>
              );
            })}
          </Grid>
        ))}
      </Carousel>
    </Box>
  );
};

export default MovieCategory;
