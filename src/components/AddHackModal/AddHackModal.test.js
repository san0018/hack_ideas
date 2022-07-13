import { render, screen } from "@testing-library/react";
import AddHackModal from "./AddHackModal";

test("button test", () => {
  render(<AddHackModal />);
  const buttonElement = screen.getByText(/Add/i);
  expect(buttonElement).toContainHTML("Button");
});

test("visible test", () => {
  render(<AddHackModal />);
  const dialogElement = screen.getByText(/Add Hack Idea/i);
  expect(dialogElement).toBeVisible();
});
