import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import FormEditor from "../FormEditor";

describe("FormEditor", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FormEditor />);
    expect(baseElement).toBeTruthy();
  });
});
