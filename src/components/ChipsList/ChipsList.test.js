import { render, screen } from "@testing-library/react";
import ChipsList from "./ChipsList";

test("span test", () => {
  render(<ChipsList tags={["testing", "development"]} />);
  const chipElement = screen.getByText(/testing/i);
  expect(chipElement).toContainHTML("span");
});

test("span visible test", () => {
  render(<ChipsList tags={["testing", "development"]} />);
  const chipElement = screen.getByText(/testing/i);
  expect(chipElement).toBeVisible();
});
