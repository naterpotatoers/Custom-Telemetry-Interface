import { describe, it, expect } from "vitest";
import { MOCK_SCHEMA, MOCK_SCHEMA_STATE } from "../../mocks";
import { getPropertyFields } from "../mutators";

describe("mutator", () => {
  it("should return schema as state", () => {
    const state = getPropertyFields(MOCK_SCHEMA);
    expect(state).toEqual(MOCK_SCHEMA_STATE);
  });
});
