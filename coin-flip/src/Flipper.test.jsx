import { it, expect, vi } from "vitest";

import { render, fireEvent } from "@testing-library/react";
import Flipper, { TAILS_IMAGE_URL } from "./Flipper";
import * as helpers from "./helpers";

const MockRandomCoin = vi.spyOn(helpers, "getRandomCoin");

it("doesn't render a coin image on load", function () {
  const { container } = render(
    <Flipper />
  );

  expect(container.querySelector("img")).not.toBeInTheDocument();
});

it("matches the snapshot", function () {
  const { container } = render(
    <Flipper />
  );

  expect(container).toMatchSnapshot();
});

it("properly updates text", function () {
  MockRandomCoin.mockReturnValueOnce(2);
  const { container } = render(<Flipper />);

  const flipButton = container.querySelector("button");
  fireEvent.click(flipButton);

  expect(
    container.querySelector("h5")
  ).toContainHTML("Out of 1 flips, there have been 0 heads and 1 tails.");
});

it("properly shows image", function () {
  MockRandomCoin.mockReturnValueOnce(2);
  const { container } = render(<Flipper />);

  const flipButton = container.querySelector("button");
  fireEvent.click(flipButton);

  expect(
    container.querySelector("img")
  ).toHaveAttribute("src", TAILS_IMAGE_URL);
});