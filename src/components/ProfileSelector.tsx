import React from "react";
import {
  Grid,
  Paper,
  Typography,
  ButtonBase,
  Box,
  Button,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useNavigate } from "react-router-dom";

interface ProfileProps {
  name: string;
  imageUrl: string;
}

const ProfileSelector: React.FC = () => {
  const profiles: ProfileProps[] = [
    {
      name: "John Doe",
      imageUrl: "https://picsum.photos/200/200?random=1", // Random image from Picsum
    },
    {
      name: "Kids",
      imageUrl: "https://picsum.photos/200/200?random=2", // Random image from Picsum
    },
    // {
    //   name: "Chris Johnson",
    //   imageUrl: "https://picsum.photos/200/300?random=3", // Random image from Picsum
    // },
    // Add more profiles as needed
  ];
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/browse");
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
      }}
    >
      <Typography variant="h2" color="white" gutterBottom>
        Who's watching?
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {profiles.map((profile) => (
          <Grid item key={profile.name} xs={6} sm={4} md={3} lg={2}>
            <ButtonBase
              sx={{ width: "100%", display: "flex", flexDirection: "column" }}
              onClick={handleProfileClick} // Set the click handler here
            >
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "#333",
                  color: "white",
                  padding: 1,
                }}
              >
                <img
                  src={profile.imageUrl}
                  alt={profile.name}
                  style={{ width: "100%", height: "auto" }}
                />
                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  {profile.name}
                </Typography>
              </Paper>
            </ButtonBase>
          </Grid>
        ))}
        {/* Add Profile Button */}
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <ButtonBase
            sx={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#333",
                color: "white",
                padding: 2,
                height: "100%",
              }}
            >
              <AddCircleOutlineIcon sx={{ fontSize: 60 }} />
              <Typography variant="subtitle1">Add Profile</Typography>
            </Paper>
          </ButtonBase>
        </Grid>
      </Grid>
      <Button
        variant="outlined"
        color="primary"
        sx={{ borderColor: "white", color: "white", mt: 2 }}
      >
        Manage Profiles
      </Button>
    </Box>
  );
};

export default ProfileSelector;
