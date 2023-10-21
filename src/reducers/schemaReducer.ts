import { JsonSchema } from "../types";

export function schemaReducer(schema: JsonSchema, action: any) {
    switch (action.type) {
      case "ADD_PROPERTY":
        return {
          ...schema,
          properties: {
            ...schema.properties,
            [action.key]: {
              title: action.title,
              type: action.dataType,
              description: action.description,
              default: action.default,
            },
          },
        };
      case "UPDATE_PROPERTY":
        return {
          ...schema,
          properties: {
            ...schema.properties,
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
      case "DELETE_PROPERTY":
        const newProperties = { ...schema.properties };
        delete newProperties[action.key];
        return {
          ...schema,
          properties: newProperties,
        };
      default:
        return schema;
    }
  }
  