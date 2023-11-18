import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { CircularProgress, Box, Typography, Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import MovieCategory from "./MovieCategory";

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

if (!TMDB_API_KEY) {
  throw new Error("TMDB_API_KEY is not defined");
}

const TMDB_BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;
if (!TMDB_BASE_URL) {
  throw new Error("TMDB_BASE_URL is not defined");
}

const BrowseMovies: React.FC = () => {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [movieInfo, setMovieInfo] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        // Fetch popular movies
        const movieResponse = await fetch(
          `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
        );
        const movieData = await movieResponse.json();
        const firstMovie = movieData.results[0];

        // Set state with the first movie's title and overview
        setMovieTitle(firstMovie.title);
        setMovieInfo(firstMovie.overview);

        // Fetch videos/trailers for the first movie
        const videosResponse = await fetch(
          `${TMDB_BASE_URL}/movie/${firstMovie.id}/videos?api_key=${TMDB_API_KEY}&language=en-US`
        );
        const videosData = await videosResponse.json();
        console.log(videosData);
        const trailer = videosData.results.find(
          (video: any) => video.type === "Trailer" && video.site === "YouTube"
        );

        // If a trailer is found, construct the YouTube URL
        if (trailer) {
          const youtubeTrailerUrl = `https://www.youtube.com/watch?v=${trailer.key}`;
          setTrailerUrl(youtubeTrailerUrl);
        } else {
          // If no trailer is found, you might want to handle this case
          console.log("No YouTube trailer found for the first movie.");
        }
      } catch (error) {
        console.error("Fetching movies or trailers failed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Box sx={{ position: "relative", width: "100vw", height: "100vh" }}>
        {trailerUrl && (
          <ReactPlayer
            url={trailerUrl}
            playing
            controls={false}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
            config={{
              youtube: {
                playerVars: {
                  autoplay: 1,
                  modestbranding: 1,
                  controls: 0,
                  showinfo: 0,
                  rel: 0,
                  iv_load_policy: 3,
                },
              },
            }}
          />
        )}

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            padding: "20px",
            boxSizing: "border-box",
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            textAlign: "left",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: "bold", fontSize: "3rem" }}
          >
            {movieTitle}
          </Typography>
          <Typography variant="subtitle2">{movieInfo}</Typography>
          <Box sx={{ mt: 2 }}>
            <Button
              startIcon={<PlayArrowIcon />}
              variant="contained"
              color="secondary"
              sx={{ mr: 1 }}
            >
              Play
            </Button>
            <Button
              startIcon={<InfoIcon />}
              variant="outlined"
              sx={{ borderColor: "white", color: "white" }}
            >
              More Info
            </Button>
          </Box>
        </Box>
      </Box>
      <MovieCategory
        title="Trending Now"
        fetchUrl={`${TMDB_BASE_URL}/trending/all/week?language=en-US`}
        apiKey={TMDB_API_KEY}
      />
      <MovieCategory
        title="TV Shows"
        fetchUrl={`${TMDB_BASE_URL}/tv/popular`}
        apiKey={TMDB_API_KEY}
      />
      <MovieCategory
        title="Popular Movies"
        fetchUrl={`${TMDB_BASE_URL}/movie/popular`}
        apiKey={TMDB_API_KEY}
      />
      <MovieCategory
        title="Top Rated Movies"
        fetchUrl={`${TMDB_BASE_URL}/movie/top_rated`}
        apiKey={TMDB_API_KEY}
      />
      <MovieCategory
        title="Upcoming Movies"
        fetchUrl={`${TMDB_BASE_URL}/movie/upcoming`}
        apiKey={TMDB_API_KEY}
      />
    </>
  );
};

export default BrowseMovies;
