import React from "react";
import { Button, AppBar, Toolbar, Stack } from "@mui/material";
import LanguageTextField from "./LanguageTextField";
import netflixLogo from "../images/netflix-logo.svg";

const Header = ({ onSignInClick }: any) => {
  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <img src={netflixLogo} alt="Netflix Logo" style={{ height: "3rem" }} />
        <Stack spacing={2} direction="row">
          <LanguageTextField />
          <Button
            sx={{ textTransform: "none" }}
            variant="contained"
            color="primary"
            onClick={onSignInClick}
          >
            Sign In
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
