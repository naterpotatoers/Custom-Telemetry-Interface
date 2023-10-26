import { Schema } from "../../types";
import PropertyCard from "./components/PropertyCard";

export default function FormEditor({
  schema,
  dispatch,
}: {
  schema: Schema;
  dispatch: React.Dispatch<any>;
}) {
  const handleNewProperty = () => {
    dispatch({
      type: "UPDATE_PROPERTY",
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
          <div className="card" style={{ margin: "10px" }} key={key}>
            <PropertyCard
              propertyKey={key}
              property={property}
              dispatch={dispatch}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
