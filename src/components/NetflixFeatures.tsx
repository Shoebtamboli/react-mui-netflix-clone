import React from "react";
import { Container } from "@mui/material";

import Features from "./Features";
import Netflix1 from "../images/Netflix1.gif";
import Netflix2 from "../images/Netflix2.webp";
import Netflix3 from "../images/Netflix3.png";
import Netflix4 from "../images/Netflix4.gif";

const netflixData = [
  {
    imgSrc: Netflix1,
    imgAlt: "image",
    headerText: "Enjoy on your TV",
    contentText:
      "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    reverse: true,
  },
  {
    imgSrc: Netflix2,
    imgAlt: "image",
    headerText: "Watch everywhere",
    contentText:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    reverse: false,
  },
  {
    imgSrc: Netflix3,
    imgAlt: "image",
    headerText: "Create profiles for kids",
    contentText:
      "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
    reverse: true,
  },
  {
    imgSrc: Netflix4,
    imgAlt: "image",
    headerText: "Download your shows to watch offline",
    contentText: "Watch on a plane, train, or submarine...",
    reverse: false,
  },
];

const NetflixFeatures = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        textAlign: "center",
        mt: -8,
      }}
    >
      {netflixData.map((item, index) => (
        <Features
          key={index}
          imgSrc={item.imgSrc}
          imgAlt={item.imgAlt}
          headerText={item.headerText}
          contentText={item.contentText}
          reverse={item.reverse}
        />
      ))}
    </Container>
  );
};

export default NetflixFeatures;
