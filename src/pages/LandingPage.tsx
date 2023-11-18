import React from "react";
import { Box } from "@mui/material";
import netflixBackground from "../images/netflix.png";
import { useNavigate } from "react-router-dom";
import PromoBanner from "../components/PromoBanner";
import FaqAccordion from "../components/FaqAccordion";
import Header from "../components/Header";
import CallToAction from "../components/CallToAction";
import NetflixFeatures from "../components/NetflixFeatures";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Background with overlay */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          zIndex: 1, // Ensure this box is below the content
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${netflixBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
          }}
        />
        <Header onSignInClick={handleClick} />
        <CallToAction />
        <PromoBanner />
      </Box>
      {/* Content without background overlay */}
      <Box sx={{ position: "relative", zIndex: 2, backgroundColor: "black" }}>
        <NetflixFeatures />
        <FaqAccordion />
      </Box>
    </Box>
  );
};

export default LandingPage;
