import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, IconButton, Button, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import netflixLogo from "../images/netflix-logo.svg";

const ResponsiveAppBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        // Arbitrary number for when the transition should occur
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: "none",
        backgroundColor: scrolled ? "black" : "transparent", // Use rgba for gradual opacity change
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <img src={netflixLogo} alt="Netflix Logo" style={{ height: "2rem" }} />
        <Box>
          <Button color="inherit" sx={{ textTransform: "none" }}>
            Home
          </Button>
          <Button color="inherit" sx={{ textTransform: "none" }}>
            TV Shows
          </Button>
          <Button color="inherit" sx={{ textTransform: "none" }}>
            Movies
          </Button>
          <Button color="inherit" sx={{ textTransform: "none" }}>
            New & Popular
          </Button>
          <Button color="inherit" sx={{ textTransform: "none" }}>
            My List
          </Button>
          <Button color="inherit" sx={{ textTransform: "none" }}>
            Browse by Languages
          </Button>
        </Box>
        <Box />
        <Box />
        <Box>
          <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <Button color="inherit" sx={{ textTransform: "none" }}>
            Kids
          </Button>
          <IconButton size="large" aria-label="notifications" color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton size="large" aria-label="account" color="inherit">
            <AccountCircle />
          </IconButton>
          {/* Include more icons or buttons as needed */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default ResponsiveAppBar;
