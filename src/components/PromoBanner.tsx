import React from "react";
import { Box, Typography, Link } from "@mui/material";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const PromoBanner: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",

        textAlign: "center",
        backgroundColor: "black",
        height: "30vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 10%, rgba(142,45,226,1) 45%, rgba(74,0,224,1) 55%, rgba(0,0,0,0.8) 90%, rgba(0,0,0,1) 100%)",
          color: "white",
          gap: "24px",
        }}
      >
        <LocalMoviesIcon sx={{ color: "#ffeb3b", fontSize: "5rem" }} />
        <Box sx={{ textAlign: "left", mx: 2 }}>
          <Typography variant="subtitle1">
            The Netflix you love for just €4,99.
          </Typography>
          <Typography variant="body2">
            Get the Standard with ads plan.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            {/* Add flex container */}
            <Link
              href="#"
              sx={{
                color: "white",
                padding: "8px 16px",
                display: "flex",
                alignItems: "center", // Center the items vertically
                justifyContent: "center",
                textAlign: "center",
                fontWeight: "bold",
                textDecoration: "none", // Remove underline from the link
                "&:hover": {
                  textDecoration: "underline", // Add underline on hover
                },
                gap: "8px", // Add space between text and icon
              }}
            >
              Learn More
              <NavigateNextIcon />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PromoBanner;
