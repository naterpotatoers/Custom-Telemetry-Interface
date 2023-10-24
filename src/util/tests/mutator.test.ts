import { describe, it, expect } from "vitest";
import { MOCK_SCHEMA, MOCK_SCHEMA_STATE } from "../../mocks";
import { getJsonSchemaPropertyInputFields } from "../mutators";

describe("mutator", () => {
  it("should return schema as state", () => {
    const state = getJsonSchemaPropertyInputFields(MOCK_SCHEMA);
    expect(state).toEqual(MOCK_SCHEMA_STATE);
  });
});
