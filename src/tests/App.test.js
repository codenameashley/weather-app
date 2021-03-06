import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../components/App";

test("renders the words weather app", () => {
  render(<App />);
  const linkElement = screen.getByText(/weather App/i); // or 'Weather App'
  expect(linkElement).toBeInTheDocument();
});
