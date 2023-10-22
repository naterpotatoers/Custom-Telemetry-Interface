import { ChangeEvent, useState } from "react";
import { JsonSchemaProperty } from "../../../types";

export default function PropertyCard({
  propertyKey,
  property,
  dispatch,
}: {
  propertyKey: string;
  property: JsonSchemaProperty;
  dispatch: React.Dispatch<any>;
}) {
  const [key, setKey] = useState<string>(propertyKey);
  const isNumberOrString = ["number", "integer", "string"].includes(
    property.type
  );

  const handleDelete = () => {
    dispatch({
      type: "DELETE_PROPERTY",
      key: propertyKey,
    });
  };

  const handleKeyChange = () => {
    dispatch({
      type: "UPDATE_PROPERTY_KEY",
      oldKey: propertyKey,
      newKey: key,
    });
  };

  const handlePropertyChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "UPDATE_PROPERTY_FIELD",
      key: propertyKey,
      name: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <>
      <label>
        Data Type:
        <select value={property.type} onChange={() => {}} name="dataType">
          <option value="string">String</option>
          <option value="number">Number</option>
          <option value="integer">Integer</option>
          <option value="boolean">Boolean</option>
          <option value="object">Object</option>
          <option value="array">Array</option>
          <option value="null">Null</option>
        </select>
      </label>
      <label>
        Key:
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          onBlur={handleKeyChange}
          name="key"
        />
      </label>
      <label>
        Title:
        <input
          type="text"
          value={property.title}
          onChange={(e) => handlePropertyChange(e)}
          name="title"
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={property.description}
          onChange={(e) => handlePropertyChange(e)}
          name="description"
        />
      </label>
      <label>
        Default:
        <input
          type="text"
          value={property.default.toString()}
          onChange={() => {}}
          name="default"
        />
      </label>
      {isNumberOrString && (
        <>
          <label>
            Minimum:
            <input
              type="number"
              value={property.minimum}
              onChange={() => {}}
              name="minimum"
            />
          </label>
          <label>
            Maximum:
            <input
              type="number"
              value={property.maximum}
              onChange={() => {}}
              name="maximum"
            />
          </label>
        </>
      )}
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}
