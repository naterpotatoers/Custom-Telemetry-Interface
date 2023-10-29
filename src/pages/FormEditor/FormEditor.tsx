import { useState } from "react";
import { Schema } from "../../types";
import PropertyCard from "./components/PropertyCard";
import AddProperty from "./components/AddProperty";

export default function FormEditor({
  schema,
  dispatch,
}: {
  schema: Schema;
  dispatch: React.Dispatch<any>;
}) {
  const [openNewPropertyDialog, setOpenNewPropertyDialog] = useState(false);

  return (
    <div>
      <h1>Form Editor</h1>
      {
        <AddProperty
          dispatch={dispatch}
          openNewPropertyDialog={openNewPropertyDialog}
          setOpenNewPropertyDialog={setOpenNewPropertyDialog}
        />
      }
      <div>
        <button onClick={() => setOpenNewPropertyDialog(true)}>
          Add new property
        </button>
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
