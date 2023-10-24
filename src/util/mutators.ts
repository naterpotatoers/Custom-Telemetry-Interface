import { JsonSchema, JsonSchemaPropertyInputField } from "../types";

export function getJsonSchemaPropertyInputFields(
  schema: JsonSchema
): JsonSchemaPropertyInputField[] {
    const { properties } = schema;
    const propertyKeys = Object.keys(properties);
    const state: JsonSchemaPropertyInputField[] = [];
    propertyKeys.forEach((key) => {
      const property = properties[key];
      state.push({
        id: key,
        value: property.default,
        ...property,
      });
    });
    return state;
}
