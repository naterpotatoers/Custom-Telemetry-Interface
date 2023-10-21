import { useReducer } from "react";
import { MOCK_SCHEMA } from "../../mocks/formEditorMock";
import { schemaReducer } from "../../reducers";
import PropertyCard from "./components/PropertyCard";

export default function FormEditor() {
  const [schema, dispatch] = useReducer(schemaReducer, MOCK_SCHEMA);

  const handleNewProperty = () => {
    dispatch({
      type: "ADD_PROPERTY",
      key: Date.now().toString(),
      title: "",
      dataType: "string",
      description: "",
      default: "",
    });
  };

  return (
    <div>
      <h1>Form Editor</h1>
      <div>
        <button onClick={handleNewProperty}>Add new property</button>
      </div>
      <div>
        {Object.entries(schema.properties).map(([key, property]) => (
          <div style={{ margin: "10px" }} key={key}>
            <PropertyCard
              propertyKey={key}
              property={property}
              dispatch={dispatch}
            />
          </div>
        ))}
      </div>
      <pre>{JSON.stringify(schema, null, 2)}</pre>
    </div>
  );
}
