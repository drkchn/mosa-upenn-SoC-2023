import { render, screen } from "@testing-library/react";
import { Home } from "./Home.tsx";

describe("App", () => {
  it("renders headline", () => {
    render(<Home />);

    screen.debug();

    // check if App components renders headline
  });
});
