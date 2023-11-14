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


export function convertSchemaTypeToInputType(type: string): string {
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

export function getFormattedMessage(format: string, data: Array<PropertyField>): string {
  const keys = Object.keys(data);
  let formattedMessage = format;
  keys.forEach((key) => {
    const value = data[key].value;
    const regex = new RegExp(`{${key}}`, "g");
    formattedMessage = formattedMessage.replace(regex, value);
  });
  console.log(formattedMessage);
  return formattedMessage;
}