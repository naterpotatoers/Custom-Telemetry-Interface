import { describe, it, expect } from "vitest";
import { MOCK_SCHEMA, MOCK_SCHEMA_STATE } from "../../mocks";
import { getFormattedMessage, getPropertyFields } from "../mutators";

describe("mutator", () => {
  it("should return schema as state", () => {
    const state = getPropertyFields(MOCK_SCHEMA);
    expect(state).toEqual(MOCK_SCHEMA_STATE);
  });

  it("should return a string in the correctly formatted structure", () => {
    const format = "pitch $(pitch) and roll $(roll)";
    const formattedMessage = getFormattedMessage(format, MOCK_SCHEMA_STATE);
    expect(formattedMessage).toEqual("pitch 0 and roll 0");
  });
});
