import { useEffect, useState } from "react";
import { Schema, PropertyField } from "../../types";
import { getPropertyFields } from "../../util";
import { MOCK_RESPONSE } from "../../mocks";
import {
  convertSchemaTypeToInputType,
  getFormattedMessage,
} from "../../util/mutators";
import SerialButtons from "./components/SerialButtons";
import WifiButtons from "./components/WifiButtons";

export default function InterfaceViewer({
  schema,
  message,
  messageFormat,
}: {
  schema: Schema;
  message: React.MutableRefObject<string>;
  messageFormat: string;
}) {
  const [status, setStatus] = useState<string>("");
  const [interfaceData, setInterfaceData] = useState<Array<PropertyField>>(
    getPropertyFields(schema)
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
    message.current = getFormattedMessage(messageFormat, output);
    message.current = JSON.stringify(MOCK_RESPONSE);
  }, [output]);

  const formattedMessage = getFormattedMessage(messageFormat, interfaceData);

  return (
    <div className="section">
      <div className="flex-header">
        <h2>Interface Viewer</h2>
        <div>
          <SerialButtons setStatus={setStatus} message={message} />
          <WifiButtons setStatus={setStatus} message={message} />
        </div>
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
      <pre>Message Format: {formattedMessage}</pre>
      <pre>Response: {JSON.stringify(status, null, 2)}</pre>
    </div>
  );
}
