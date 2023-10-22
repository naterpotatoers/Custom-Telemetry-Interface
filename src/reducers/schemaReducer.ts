import { JsonSchema } from "../types";

export function schemaReducer(schema: JsonSchema, action: any) {
  switch (action.type) {
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

    case "UPDATE_PROPERTY_FIELD":
      return {
        ...schema,
        properties: {
          ...schema.properties,
          [action.key]: {
            ...schema.properties[action.key],
            [action.name]: action.value,
          },
        },
      };

    case "UPDATE_PROPERTY_KEY":
      const newProperty = { ...schema.properties };
      const newKey = action.newKey;
      const oldKey = action.oldKey;
      newProperty[newKey] = newProperty[oldKey];
      delete newProperty[oldKey];
      return {
        ...schema,
        properties: newProperty,
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
