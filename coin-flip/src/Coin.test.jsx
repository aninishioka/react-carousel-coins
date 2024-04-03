import { it, expect } from "vitest";

import { render, fireEvent } from "@testing-library/react";
import Coin from "./Coin";
import { HEADS_IMAGE_URL, TAILS_IMAGE_URL } from "./Flipper";


it("renders without crashing", function () {
  render(
    <Coin
      url={TAILS_IMAGE_URL}
    />
  );
});


it("matches snapshot on initial load", function () {
  const { container } = render(
    <Coin
      url={TAILS_IMAGE_URL}
    />
  );
  expect(container).toMatchSnapshot();
});