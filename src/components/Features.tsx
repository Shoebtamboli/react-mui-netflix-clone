import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";

interface FeaturesProps {
  imgSrc: string;
  imgAlt: string;
  headerText: string;
  contentText: string;
  reverse?: boolean;
}

const Features: React.FC<FeaturesProps> = ({
  imgSrc,
  imgAlt,
  headerText,
  contentText,
  reverse = false,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : reverse ? "row-reverse" : "row",
          alignItems: "center",
          justifyContent: "center",
          padding: theme.spacing(4),
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        <Box
          component="img"
          src={imgSrc}
          alt={imgAlt}
          sx={{
            maxWidth: "100%",
            width: isMobile ? "100%" : "40%",
            height: "auto",
            margin: isMobile
              ? `${theme.spacing(2)} 0`
              : `0 ${theme.spacing(4)}`,
          }}
        />
        <Box>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            {headerText}
          </Typography>
          <Typography variant="h5">{contentText}</Typography>
        </Box>
      </Box>
      <Divider sx={{ backgroundColor: "gray", my: 4 }} />
    </>
  );
};

export default Features;
