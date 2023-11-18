import React from "react";
import { Box } from "@mui/material";
import netflixBackground from "../images/netflix.png";
import { Toolbar } from "@mui/material";
import netflixLogo from "../images/netflix-logo.svg";
import SignInForm from "../components/SignInForm";

const LoginPage = () => {
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
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          zIndex: 1,
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
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <img
            src={netflixLogo}
            alt="Netflix Logo"
            style={{ height: "3rem" }}
          />
        </Toolbar>
        <SignInForm />
      </Box>
    </Box>
  );
};

export default LoginPage;
