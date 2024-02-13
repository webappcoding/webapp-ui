import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from ".";

describe("Button Component tests", () => {
  test("loads and displays greeting", () => {
    render(<Button label="Hello" />);

    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
