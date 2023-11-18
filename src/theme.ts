import { createTheme } from "@mui/material/styles";

// Define the netflix palette
const netflixPalette = {
  primary: { main: "#E50914" }, // Netflix red
  secondary: { main: "#221f1f" }, // Dark gray almost black
  background: {
    default: "#141414", // Very dark gray (almost black) for backgrounds
    paper: "#221f1f", // Slightly lighter for elements considered 'paper'
  },
  text: {
    primary: "#ffffff", // White text for primary text
    secondary: "#a9a9a9", // Lighter gray for secondary text
  },
};

// Create a theme instance.
const theme = createTheme({
  palette: netflixPalette,
  components: {
    // You can customize MUI components here. For example:
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white", // Buttons text white
        },
      },
    },
    // Add customizations for other components like MuiCard, MuiTypography, etc.
  },
  typography: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', // Netflix uses a similar sans-serif font stack
    h1: {
      fontWeight: 700, // Bold for headers
    },
    // Define other typography variants as needed
  },
});

export default theme;
