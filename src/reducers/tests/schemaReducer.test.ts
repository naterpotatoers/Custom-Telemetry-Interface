import { describe, it, expect } from "vitest";
import { schemaReducer } from "../schemaReducer";
import { MOCK_SCHEMA } from "../../mocks";

describe("schemaReducer", () => {
  it("should return the initial mock schema", () => {
    expect(schemaReducer(MOCK_SCHEMA, {})).toEqual(MOCK_SCHEMA);
  });

  it("should add a property", () => {
    const action = {
      type: "UPDATE_PROPERTY",
      key: "test",
      title: "Test",
      dataType: "string",
      description: "Test description",
      default: "test",
    };
    const expected = {
      ...MOCK_SCHEMA,
      properties: {
        ...MOCK_SCHEMA.properties,
        [action.key]: {
          title: action.title,
          type: action.dataType,
          description: action.description,
          default: action.default,
        },
      },
    };

    const result = schemaReducer(MOCK_SCHEMA, action);
    expect(result).toEqual(expected);
    const originalLength = Object.keys(MOCK_SCHEMA.properties).length;
    const resultLength = Object.keys(result.properties).length;
    expect(resultLength).toBeGreaterThan(originalLength);
  });

  it("should update a property", () => {
    const firstKey = Object.keys(MOCK_SCHEMA.properties)[0];
    const action = {
      type: "UPDATE_PROPERTY",
      key: firstKey,
      title: "Test",
      dataType: "string",
      description: "Test description",
      default: "test",
      minimum: 0,
      maximum: 100,
    };
    const expected = {
      ...MOCK_SCHEMA,
      properties: {
        ...MOCK_SCHEMA.properties,
        [action.key]: {
          title: action.title,
          type: action.dataType,
          description: action.description,
          default: action.default,
          minimum: action.minimum,
          maximum: action.maximum,
        },
      },
    };

    it("should update a property field", () => {
      const firstKey = Object.keys(MOCK_SCHEMA.properties)[0];
      const action = {
        type: "UPDATE_PROPERTY_FIELD",
        key: firstKey,
        name: "title",
        value: "Test",
      };
      let expected = MOCK_SCHEMA;
      expected.properties[firstKey].title = action.value;
      const result = schemaReducer(MOCK_SCHEMA, action);
      expect(result).toEqual(expected);
      expect(result).not.toBe(MOCK_SCHEMA);
    });

    const result = schemaReducer(MOCK_SCHEMA, action);
    expect(result).toEqual(expected);
    const originalLength = Object.keys(MOCK_SCHEMA.properties).length;
    const resultLength = Object.keys(result.properties).length;
    expect(originalLength).toBe(resultLength);
  });

  it("should update a property key", () => {
    const firstKey = Object.keys(MOCK_SCHEMA.properties)[0];
    const action = {
      type: "UPDATE_PROPERTY_KEY",
      oldKey: firstKey,
      newKey: "test",
    };
    const expected = {
      ...MOCK_SCHEMA,
      properties: {
        ...MOCK_SCHEMA.properties,
      },
    };
    expected.properties[action.newKey] = expected.properties[action.oldKey];
    delete expected.properties[action.oldKey];

    const result = schemaReducer(MOCK_SCHEMA, action);
    expect(result).toEqual(expected);
    const originalLength = Object.keys(MOCK_SCHEMA.properties).length;
    const resultLength = Object.keys(result.properties).length;
    expect(resultLength).toBe(originalLength);
    expect(result.properties).not.toHaveProperty(firstKey);
    expect(result.properties).toHaveProperty("test");
  });

  it("should delete a property", () => {
    const firstKey = Object.keys(MOCK_SCHEMA.properties)[0];
    const action = {
      type: "DELETE_PROPERTY",
      key: firstKey,
    };
    const expected = {
      ...MOCK_SCHEMA,
      properties: {
        ...MOCK_SCHEMA.properties,
      },
    };
    delete expected.properties[action.key];

    const result = schemaReducer(MOCK_SCHEMA, action);
    expect(result).toEqual(expected);
    const originalLength = Object.keys(MOCK_SCHEMA.properties).length;
    const resultLength = Object.keys(result.properties).length;
    expect(resultLength).toBeLessThan(originalLength);
    expect(result.properties).not.toHaveProperty(firstKey);
    expect(result.properties).toHaveProperty("angle");
  });
});
