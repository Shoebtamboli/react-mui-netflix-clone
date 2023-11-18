import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders without crashing", () => {
    render(<App />);

    expect(screen.getByText(/Enjoy on your TV/i)).toBeInTheDocument();
    expect(screen.getByText(/Watch everywhere/i)).toBeInTheDocument();
    expect(screen.getByText(/Create profiles for kids/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Download your shows to watch offline/i)
    ).toBeInTheDocument();
  });
});
