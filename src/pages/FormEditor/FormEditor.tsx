import { useReducer } from "react";
import { MOCK_FORM_EDITOR_OBJECT } from "../../mocks/formEditorMock";
import { JsonSchema } from "../../types";

export default function FormEditor() {
  const [formEditorSchema, dispatch] = useReducer(
    formEditorSchemaReducer,
    MOCK_FORM_EDITOR_OBJECT
  );
  const properties = Object.keys(formEditorSchema.properties);

  const handleNewProperty = () => {
    dispatch({
      type: "ADD_STRING_PROPERTY",
      key: "propertyKey",
      title: "Title",
      dataType: "string",
      description: "property description",
      default: "default value",
    });
  };

  const handleDeleteProperty = (key: string) => {
    dispatch({
      type: "DELETE_PROPERTY",
      key,
    });
  };

  return (
    <div>
      <h1>Form Editor</h1>
      <div>
        <button onClick={handleNewProperty}>Add new property</button>
      </div>
      <div>
        {properties.map((property) => {
          return (
            <div style={{ margin: "10px" }}>
              <div>Key: {property}</div>
              <div>Title: {formEditorSchema.title}</div>
              <div>Data Type: {formEditorSchema.properties[property].type}</div>
              <div>
                Description: {formEditorSchema.properties[property].description}
              </div>
              <div>
                Default: {formEditorSchema.properties[property].default}
              </div>
              <button onClick={() => handleDeleteProperty(property)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function formEditorSchemaReducer(schema: JsonSchema, action: any) {
  switch (action.type) {
    case "ADD_STRING_PROPERTY":
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
