import React, { useState } from "react";
import { TextField } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";

const languages = [
  {
    value: "en",
    label: "English",
  },
  {
    value: "de",
    label: "Deutsch",
  },
];

const LanguageTextField = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      <TextField
        id="outlined-select-language"
        select
        size="small"
        value={language}
        onChange={handleLanguageChange}
        variant="outlined"
        sx={{
          ".MuiOutlinedInput-root": {
            color: "white",
            label: { color: "white" },
            "& fieldset": {
              borderColor: "white", // Set the color of the outline
            },
            "&:hover fieldset": {
              borderColor: "white", // Set the color of the outline on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "white", // Set the color of the outline when focused
            },
          },
          width: 150, // Set the width of the select
          marginRight: 2, // Add some spacing to the right
        }}
        InputLabelProps={{
          style: { color: "white" },
        }}
        SelectProps={{
          native: true,
          startAdornment: <TranslateIcon sx={{ color: "white" }} />, // Set the color of the icon
        }}
      >
        {languages.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
    </div>
  );
};

export default LanguageTextField;
