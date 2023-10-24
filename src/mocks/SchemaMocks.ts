import { JsonSchema, JsonSchemaPropertyInputField } from "../types";

export const MOCK_SCHEMA: JsonSchema = {
  $id: "https://example.com/form.editor.mock.schema.json",
  $schema: "https://json-schema.org/draft/2020-12/schema",
  title: "Mock Form Editor",
  type: "object",
  properties: {
    speed: {
      title: "Speed",
      type: "integer",
      description: "The speed of the device.",
      default: 0,
      minimum: 0,
      maximum: 100,
    },
    angle: {
      title: "Angle",
      type: "integer",
      description: "The angle of the device.",
      default: 0,
      minimum: 0,
      maximum: 360,
    },
    drive_mode: {
      title: "Drive Mode",
      type: "string",
      description: "The drive mode of the device.",
      default: "D",
    },
    is_operational: {
      title: "Is Operational",
      type: "boolean",
      description: "The operational status of the device.",
      default: true,
    },
  },
};

export const MOCK_SCHEMA_STATE: JsonSchemaPropertyInputField[] = [
  {
    id: "speed",
    value: 0,
    title: "Speed",
    type: "integer",
    description: "The speed of the device.",
    default: 0,
    minimum: 0,
    maximum: 100,
  },
  {
    id: "angle",
    value: 0,
    title: "Angle",
    type: "integer",
    description: "The angle of the device.",
    default: 0,
    minimum: 0,
    maximum: 360,
  },
  {
    id: "drive_mode",
    value: "D",
    title: "Drive Mode",
    type: "string",
    description: "The drive mode of the device.",
    default: "D",
  },
  {
    id: "is_operational",
    value: true,
    title: "Is Operational",
    type: "boolean",
    description: "The operational status of the device.",
    default: true,
  },
];
