import { useEffect, useState } from "react";
import { Schema, PropertyField } from "../../types";
import { getPropertyFields } from "../../util";
import { getType } from "../../util/mutators";

export default function InterfaceViewer({ schema }: { schema: Schema }) {
  const [data, setData] = useState<Array<PropertyField>>(
    getPropertyFields(schema)
  );

  const handleChange = (e: any) => {
    const newData = data.map((property: PropertyField) => {
      if (property.id === e.target.name) {
        return { ...property, default: e.target.value };
      }
      return property;
    });
    setData(newData);
  };

  useEffect(() => {
    setData(getPropertyFields(schema));
  }, [schema]);

  return (
    <div>
      <h1>Interface Viewer</h1>
      <div>
        {data.map((property: PropertyField) => (
          <div key={property.id}>
            <label>
              {property.title} - {property.type}
              <input
                type={getType(property.type)}
                name={property.id}
                value={property.default}
                onChange={handleChange}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
