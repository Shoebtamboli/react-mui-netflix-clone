import React from "react";
import { Box, Typography, Button, TextField, Container } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const CallToAction = () => {
  return (
    <Container
      maxWidth="md"
      sx={{ position: "relative", textAlign: "center", pt: 10 }}
    >
      <Typography variant="h3" gutterBottom fontWeight="bold">
        Enjoy big movies, hit series and more from €4,99.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Join today. Cancel anytime.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Ready to watch? Enter your email to create or restart your membership.
      </Typography>
      <Box
        component="form"
        sx={{
          p: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: { md: "center" },
          "& .MuiTextField-root": { mr: { md: 2 }, mb: { xs: 2, md: 0 } },
        }}
      >
        <TextField
          variant="filled"
          label="Email address"
          InputLabelProps={{
            style: { color: "white" },
          }}
          InputProps={{
            style: { color: "white" },
          }}
          sx={{
            ".MuiFilledInput-root": {
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.25)",
              },
              "&.Mui-focused": {
                backgroundColor: "rgba(255, 255, 255, 0.25)",
              },
            },
            width: { xs: "100%", md: "450px" },
            mr: { md: 2 },
            mb: { xs: 2, md: 0 },
            height: "56px",
          }}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            textTransform: "none",
            height: "56px", // Match the TextField height
            whiteSpace: "nowrap", // Prevent the text from wrapping
            minWidth: "128px", // Minimum width for the button
          }}
          endIcon={<NavigateNextIcon />}
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default CallToAction;
