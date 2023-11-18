import React from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const MovieCard = ({ poster_path, title }: any) => {
  return (
    <Card
      sx={{
        position: "relative",
        cursor: "pointer",
        overflow: "hidden",
        transition: "transform 0.3s ease-in-out",
        height: "100%",
        width: "100%",
        "&:hover": {
          transform: "translateX(1.5)",
          zIndex: 2,
        },
        "&:hover .content-overlay": {
          opacity: 1,
          visibility: "visible",
        },
      }}
    >
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        sx={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
      />
      {/* Overlay Content */}
      <Box
        className="content-overlay"
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "8px",
          //          backgroundColor: "rgba(0,0,0,0.7)",
          opacity: 0,
          visibility: "hidden",
          transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
        }}
      >
        {/* Top Icons */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Tooltip title="Play">
            <IconButton>
              <PlayArrowIcon sx={{ color: "white" }} />
            </IconButton>
          </Tooltip>
          <Box>
            <Tooltip title="Add to My List">
              <IconButton>
                <AddIcon sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="I like this">
              <IconButton>
                <ThumbUpIcon sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Seen it">
              <IconButton>
                <CheckCircleIcon sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        {/* Match Percentage and Other Info */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" color="success.main">
            97% Match
          </Typography>
          <Box>
            <Typography variant="body2" color="white">
              12
            </Typography>
            <Typography variant="body2" color="white">
              6 Seasons
            </Typography>
            <Typography variant="body2" color="white">
              HD
            </Typography>
          </Box>
        </Box>
        {/* Bottom Text */}
        <Typography variant="body2" color="white">
          Soapy • Teen • Notable Soundtrack
        </Typography>
      </Box>
    </Card>
  );
};

export default MovieCard;
