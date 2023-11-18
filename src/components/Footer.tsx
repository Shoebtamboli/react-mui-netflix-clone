import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import LanguageTextField from "./LanguageTextField";
// Define footer link data
const footerLinks = [
  {
    title: "FAQ",
    links: [
      "FAQ",
      "Media Center",
      "Redeem Gift Cards",
      "Privacy",
      "Speed Test",
    ],
  },
  {
    title: "Cancel Membership",
    links: [
      "Cancel Membership",
      "Investor Relations",
      "Buy Gift Cards",
      "Cookie Preferences",
      "Legal Guarantee",
    ],
  },
  {
    title: "Help Center",
    links: [
      "Help Center",
      "Jobs",
      "Ways to Watch",
      "Impressum",
      "Legal Notices",
    ],
  },
  {
    title: "Account",
    links: [
      "Account",
      "Netflix Shop",
      "Terms of Use",
      "Contact Us",
      "Only on Netflix",
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        color: "white",
        pt: 8, // Padding top for the entire footer
        pb: 4, // Padding bottom for the entire footer
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="subtitle1" gutterBottom>
          Questions? Contact us.
        </Typography>
        <Grid container spacing={4}>
          {footerLinks.map((section) => (
            <Grid item xs={12} sm={6} md={3} key={section.title}>
              <Box sx={{ mb: 2 }}>
                {/* Margin bottom for each section */}
                {section.links.map((link) => (
                  <Typography
                    key={link}
                    variant="body2"
                    sx={{ display: "block", my: 2 }}
                  >
                    {/* Margin top and bottom for each link */}
                    <Link href="#" color="inherit" underline="hover">
                      {link}
                    </Link>
                  </Typography>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Margin top and bottom for the divider */}
        <Box textAlign="left" sx={{ mt: 2 }}>
          <LanguageTextField />
          <Typography variant="body2" sx={{ mt: 2 }}>
            Netflix Germany
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
