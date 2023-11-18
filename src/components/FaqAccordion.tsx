// FaqAccordion.tsx
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container } from "@mui/material";

interface FaqItem {
  question: string;
  answer: string;
}

const mockFaqs: FaqItem[] = [
  {
    question: "Pellentesque habitant morbi tristique?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur ipsam error reiciendis autem dolorem blanditiis voluptas, modi laboriosam magni. Ullam, dolore. Blanditiis aliquid totam quisquam libero assumenda impedit reprehenderit!",
  },
  {
    question: "Vestibulum tortor quam?",
    answer: "Feugiat vitae, ultricies eget, tempor sit amet, ante.",
  },
  {
    question: "Vestibulum tortor quam?",
    answer: "Feugiat vitae, ultricies eget, tempor sit amet, ante.",
  },
  {
    question: "Vestibulum tortor quam?",
    answer: "Feugiat vitae, ultricies eget, tempor sit amet, ante.",
  },
  {
    question: "Vestibulum tortor quam?",
    answer: "Feugiat vitae, ultricies eget, tempor sit amet, ante.",
  },
  // ...add more mock FAQs as needed
];

const FaqAccordion: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        Frequently Asked Questions
      </Typography>
      {mockFaqs.map((faq, index) => (
        <Accordion key={index} square={true} sx={{ mb: 1, p: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
          >
            <Typography variant="h5">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h6">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FaqAccordion;
