import React, { ReactNode } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ProfileSelector from "./components/ProfileSelector";
import BrowseMovies from "./components/BrowseMovies";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import { CssBaseline } from "@mui/material";
import LoginPage from "./pages/LoginPage";

interface LayoutProps {
  children: ReactNode;
}

// Create a layout component that includes the AppBar
const LayoutWithAppBar: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const showAppBar =
    location.pathname !== "/" &&
    location.pathname !== "/profile" &&
    location.pathname !== "/login";

  const showFooter = location.pathname !== "/profile";

  return (
    <>
      {showAppBar && <ResponsiveAppBar />}
      {children}
      {showFooter && <Footer />}
    </>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <LayoutWithAppBar>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/profile" element={<ProfileSelector />} />
            <Route path="/browse" element={<BrowseMovies />} />
            <Route path="/login" element={<LoginPage />} />
            {/* Define other routes here */}
          </Routes>
        </LayoutWithAppBar>
      </Router>
    </ThemeProvider>
  );
};

export default App;
