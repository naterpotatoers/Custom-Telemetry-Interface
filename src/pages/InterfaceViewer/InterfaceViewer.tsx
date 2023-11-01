import { useEffect, useState } from "react";
import { Schema, PropertyField } from "../../types";
import { getPropertyFields } from "../../util";
import { getInputType } from "../../util/mutators";
import SerialButtons from "./components/SerialButtons";

export default function InterfaceViewer({ schema }: { schema: Schema }) {
  const [interfaceData, setInterfaceData] = useState<Array<PropertyField>>(
    getPropertyFields(schema)
  );

  const output = interfaceData.reduce((acc: any, property: PropertyField) => {
    return { ...acc, [property.id]: property.value };
  }, {});

  const handleChange = (e: any) => {
    const newData = interfaceData.map((property: PropertyField) => {
      if (property.id === e.target.name) {
        if(property.type === "number" || property.type === "integer") return { ...property, value: Number(e.target.value) };
        return { ...property, value: e.target.value };
      }
      return property;
    });
    setInterfaceData(newData);
  };

  useEffect(() => {
    setInterfaceData(getPropertyFields(schema));
  }, [schema]);

  return (
    <div>
      <h1>Interface Viewer</h1>
      <SerialButtons />
      <pre>Output: {JSON.stringify(output)}</pre>
      <div className="input-container">
        {interfaceData.map((property: PropertyField) => (
          <div key={property.id}>
            <label>
              {property.title}
              <input
                type={getInputType(property.type)}
                name={property.id}
                value={property.value}
                onChange={handleChange}
              />
              {(property.type === "number" || property.type === "integer") && (
                <input
                  type="range"
                  step={property.type === "number" ? 0.1 : 1}
                  name={property.id}
                  value={property.value}
                  onChange={handleChange}
                />
              )}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
