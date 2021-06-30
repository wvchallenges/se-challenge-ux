import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(
    "Your local Wave UX Challenge is running! Edit src/App.tsx and save to reload."
  );
  expect(linkElement).toBeInTheDocument();
});
