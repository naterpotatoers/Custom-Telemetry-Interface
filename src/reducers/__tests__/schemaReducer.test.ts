import { describe, it, expect, beforeEach } from "vitest";
import { schemaReducer } from "../index";
import { MOCK_ASTRAEUS_JSON_SCHEMA } from "../../mocks";

describe("schemaReducer", () => {
  beforeEach(() => {
    schemaReducer(MOCK_ASTRAEUS_JSON_SCHEMA, {});
  }
  );
  
  it("should return the initial mock schema", () => {
    expect(schemaReducer(MOCK_ASTRAEUS_JSON_SCHEMA, {})).toEqual(MOCK_ASTRAEUS_JSON_SCHEMA);
  });

  it("should add a property", () => {
    const action = {
      type: "ADD_PROPERTY",
      key: "test",
      title: "Test",
      dataType: "string",
      description: "Test description",
      default: "test",
    };
    const result = schemaReducer(MOCK_ASTRAEUS_JSON_SCHEMA, action);
    const originalLength = Object.keys(MOCK_ASTRAEUS_JSON_SCHEMA.properties).length;
    const resultLength = Object.keys(result.properties).length;
    expect(resultLength).toBeGreaterThan(originalLength);
  });


  it("should update a property key", () => {
    const firstKey = Object.keys(MOCK_ASTRAEUS_JSON_SCHEMA.properties)[0];
    const action = {
      type: "UPDATE_KEY",
      oldKey: firstKey,
      newKey: "test",
    };
    const expected = {
      ...MOCK_ASTRAEUS_JSON_SCHEMA,
      properties: {
        ...MOCK_ASTRAEUS_JSON_SCHEMA.properties,
      },
    };
    expected.properties[action.newKey] = expected.properties[action.oldKey];
    delete expected.properties[action.oldKey];

    const result = schemaReducer(MOCK_ASTRAEUS_JSON_SCHEMA, action);
    expect(result).toEqual(expected);
    const originalLength = Object.keys(MOCK_ASTRAEUS_JSON_SCHEMA.properties).length;
    const resultLength = Object.keys(result.properties).length;
    expect(resultLength).toBe(originalLength);
    expect(result.properties).not.toHaveProperty(firstKey);
    expect(result.properties).toHaveProperty("test");
  });

  it("should delete a property", () => {
    const firstKey = Object.keys(MOCK_ASTRAEUS_JSON_SCHEMA.properties)[0];
    const action = {
      type: "DELETE_PROPERTY",
      key: firstKey,
    };
    const expected = {
      ...MOCK_ASTRAEUS_JSON_SCHEMA,
      properties: {
        ...MOCK_ASTRAEUS_JSON_SCHEMA.properties,
      },
    };
    delete expected.properties[action.key];

    const result = schemaReducer(MOCK_ASTRAEUS_JSON_SCHEMA, action);
    expect(result).toEqual(expected);
    const originalLength = Object.keys(MOCK_ASTRAEUS_JSON_SCHEMA.properties).length;
    const resultLength = Object.keys(result.properties).length;
    expect(resultLength).toBeLessThan(originalLength);
    expect(result.properties).not.toHaveProperty(firstKey);
    expect(result.properties).toHaveProperty(Object.keys(MOCK_ASTRAEUS_JSON_SCHEMA.properties)[1]);
  });

  it("should update a property field", () => {
    const firstKey = Object.keys(MOCK_ASTRAEUS_JSON_SCHEMA.properties)[0];
    const action = {
      type: "UPDATE_FIELD",
      key: firstKey,
      name: "title",
      value: "Test",
    };
    let expected = MOCK_ASTRAEUS_JSON_SCHEMA;
    expected.properties[firstKey].title = action.value;
    const result = schemaReducer(MOCK_ASTRAEUS_JSON_SCHEMA, action);
    expect(result).toEqual(expected);
    expect(result).not.toBe(MOCK_ASTRAEUS_JSON_SCHEMA);
  });
});
