import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
  Link,
  Paper,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const SignInForm: React.FC = () => {
  // Add state and form handling logic as needed
  const [email, setEmail] = useState("demo@demo.com");
  const [password, setPassword] = useState("1234");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSignUpClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    navigate("/");
  };

  const validateEmail = (email: string) => {
    // Simple regex for email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateForm = () => {
    let isValid = true;
    if (!validateEmail(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email or phone number.",
      }));
      isValid = false;
    }

    if (password.length < 4 || password.length > 60) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Your password must contain between 4 and 60 characters.",
      }));
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      // Proceed with form submission
      console.log("Form is valid, submit the form");
      navigate("/profile");
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{ position: "relative", pt: 10, mt: 4, mb: 4 }}
    >
      <Paper elevation={4} sx={{ p: 4, bgcolor: "black" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            p: 2,
          }}
        >
          <Typography variant="h4" align="left" sx={{ mb: 2 }}>
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              variant="filled"
              fullWidth
              id="email"
              label="Email or phone number"
              name="email"
              autoComplete="email"
              autoFocus
              InputProps={{
                style: { backgroundColor: grey[700] },
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              margin="normal"
              variant="filled"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={{
                style: { backgroundColor: grey[700] },
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    color="primary"
                    size="small"
                    checked
                  />
                }
                label="Remember me"
              />
              <Link href="#" variant="body2">
                Need help?
              </Link>
            </Box>
            <Typography>
              New to Netflix?{" "}
              <Link href="#" variant="subtitle1" onClick={handleSignUpClick}>
                Sign up now.
              </Link>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignInForm;
