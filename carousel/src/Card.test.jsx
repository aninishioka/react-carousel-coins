import { it, expect } from "vitest";

import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon";
const TEST_IMAGE_1 = TEST_IMAGES[0];


it("renders without crashing", function() {
    render(
      <Card
        caption={TEST_IMAGE_1.caption}
        src={TEST_IMAGE_1.src}
        currNum={1}
        totalNum={TEST_IMAGES.length}
      />
    );
  });


it("matches snapshot on initial load", function() {
const {container} = render(
    <Card
        caption={TEST_IMAGE_1.caption}
        src={TEST_IMAGE_1.src}
        currNum={1}
        totalNum={TEST_IMAGES.length}
      />
);
expect(container).toMatchSnapshot();
})