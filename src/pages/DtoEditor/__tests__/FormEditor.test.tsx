import { describe, expect, it } from "vitest";
import { render, renderHook } from "@testing-library/react";

import FormEditor from "../DtoEditor";
import { useReducer } from "react";
import { MOCK_SCHEMA } from "../../../mocks";
import { schemaReducer } from "../../../reducers";

describe("FormEditor", () => {
  const { result } = renderHook(() => useReducer(schemaReducer, MOCK_SCHEMA));
  const dispatch = result.current[1];

  it("should render successfully", () => {
    const { baseElement } = render(
      <FormEditor schema={MOCK_SCHEMA} dispatch={dispatch} />
    );
    expect(baseElement).toBeTruthy();
  });
});
