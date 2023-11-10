import { useEffect, useRef, useState } from "react";
import { Schema, PropertyField } from "../../types";
import { getPropertyFields } from "../../util";
import { convertSchemaTypeToInputType } from "../../util/mutators";
import SerialButtons from "./components/SerialButtons";
import TerminalInterface from "./components/TerminalInterface";

export default function InterfaceViewer({ schema }: { schema: Schema }) {
  const [status, setStatus] = useState<string>("");
  const [interfaceData, setInterfaceData] = useState<Array<PropertyField>>(
    getPropertyFields(schema)
  );

  const message = useRef<string>(
    JSON.stringify({ throttle: 0, pitch: 0, roll: 0, yaw: 0 })
  );

  const output = interfaceData.reduce((acc: any, property: PropertyField) => {
    return { ...acc, [property.id]: property.value };
  }, {});

  const handleChange = (e: any) => {
    const newData = interfaceData.map((property: PropertyField) => {
      if (property.id === e.target.name) {
        if (property.type === "number" || property.type === "integer")
          return { ...property, value: Number(e.target.value) };
        return { ...property, value: e.target.value };
      }
      return property;
    });
    setInterfaceData(newData);
  };

  useEffect(() => {
    setInterfaceData(getPropertyFields(schema));
  }, [schema]);

  useEffect(() => {
    message.current = JSON.stringify(output);
  }, [output]);

  return (
    <div>
      <div className="flex-header">
        <h2>Interface Viewer</h2>
        <SerialButtons setStatus={setStatus} message={message} />
      </div>
      <div className="flex-spaced">
        {interfaceData.map((property: PropertyField) => (
          <div key={property.id}>
            <label className="form-input">
              {property.title}
              <input
                type={convertSchemaTypeToInputType(property.type)}
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
      <pre>Response: {status}</pre>
    </div>
  );
}
