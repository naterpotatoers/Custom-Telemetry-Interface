import { Schema, PropertyField } from "../types";

export function getPropertyFields(
  schema: Schema
): PropertyField[] {
    const { properties } = schema;
    const propertyKeys = Object.keys(properties);
    const state: PropertyField[] = [];
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


export function getType(type: string): string {
  switch (type) {
    case "string":
      return "text";
    case "integer":
      return "number";
    case "number":
      return "number";
    case "boolean":
      return "checkbox";
    default:
      return "text";
  }
}