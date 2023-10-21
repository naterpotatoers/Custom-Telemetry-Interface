// tests the schemaReducer
import { schemaReducer } from "../schemaReducer";
import { MOCK_SCHEMA } from "../../mocks";

describe("schemaReducer", () => {
  it("should return the initial mock schema", () => {
    expect(schemaReducer(MOCK_SCHEMA, {})).toEqual(MOCK_SCHEMA);
  });
});
