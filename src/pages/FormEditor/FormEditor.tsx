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
      {
        <AddProperty
          dispatch={dispatch}
          openNewPropertyDialog={openNewPropertyDialog}
          setOpenNewPropertyDialog={setOpenNewPropertyDialog}
        />
      }
      <div className="flex-header">
        <h2>Form Editor</h2>

        <div>
          <button onClick={() => setOpenNewPropertyDialog(true)}>
            Add Property
          </button>
        </div>
      </div>
      {Object.entries(schema.properties).map(([key, property]) => (
        <div className="card" key={key}>
          <PropertyCard
            propertyKey={key}
            property={property}
            dispatch={dispatch}
          />
        </div>
      ))}
    </div>
  );
}
