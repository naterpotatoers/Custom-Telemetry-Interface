import { Schema, PropertyField, Message } from "../types";

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

export function getFormattedMessage(message: Message, schema: Schema): string {
  const { format } = message;
  const { properties } = schema;
  const propertyKeys = Object.keys(properties);
  let formattedMessage = format;
  propertyKeys.forEach((key) => {
    const property = properties[key];
    const regex = new RegExp(`\\$\\{${key}\\}`, "g");
    formattedMessage = formattedMessage.replace(regex, property.default.toString());
  });
  return formattedMessage; 
}