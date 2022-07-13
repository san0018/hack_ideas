import { render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import { BrowserRouter } from "react-router-dom";

const MockLogin = () => {
  return (
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  );
};

test("header test", () => {
  render(<MockLogin />);
  const headerElement = screen.getByRole("heading");
  expect(headerElement).toBeInTheDocument();
});

test("para test", () => {
  render(<MockLogin />);
  const paraElement = screen.getByText(
    /Please enter your Employee Id to Login !/i
  );
  expect(paraElement).toBeInTheDocument();
});

test("button test", () => {
  render(<MockLogin />);
  const buttonElement = screen.getByText(/Log In/i);
  expect(buttonElement).toContainHTML("Button");
});
