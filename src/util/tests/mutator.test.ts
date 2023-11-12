import { describe, it, expect } from "vitest";
import { MOCK_SCHEMA, MOCK_SCHEMA_STATE } from "../../mocks";
import { getFormattedMessage, getPropertyFields } from "../mutators";
import { Message } from "../../types";

describe("mutator", () => {
  it("should return schema as state", () => {
    const state = getPropertyFields(MOCK_SCHEMA);
    expect(state).toEqual(MOCK_SCHEMA_STATE);
  });

  it("should return a string in the correctly formatted structure", () => {
    const message: Message = {
      format: "pitch ${pitch} and roll ${roll}",
      message: "",
    };
    const formattedMessage = getFormattedMessage(message, MOCK_SCHEMA);
    expect(formattedMessage).toEqual("pitch 0 and roll 0");
  });

});
