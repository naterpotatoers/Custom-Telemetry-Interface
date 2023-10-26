import { ChangeEvent, useState } from "react";
import { SchemaProperty } from "../../../types";

export default function PropertyCard({
  propertyKey,
  property,
  dispatch,
}: {
  propertyKey: string;
  property: SchemaProperty;
  dispatch: React.Dispatch<any>;
}) {
  const [key, setKey] = useState<string>(propertyKey);
  const isNumberOrString = ["number", "integer", "string"].includes(
    property.type
  );
  const MinMaxLengthSuffix = property.type === "string" ? "Length" : "Value";
  const defaultType = property.type === "string" ? "text" : "number";

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

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    let newDefault = property.default;
    if (e.target.value === "string") {
      newDefault = "";
    }
    if (e.target.value === "number") {
      newDefault = 0;
    }
    if (e.target.value === "integer") {
      newDefault = 0;
    }
    dispatch({
      type: "UPDATE_PROPERTY",
      key: propertyKey,
      name: "type",
      dataType: e.target.value,
      default: newDefault,
      minimum: undefined,
      maximum: undefined,
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
        Type
        <select
          value={property.type}
          onChange={(e) => handleTypeChange(e)}
          name="dataType"
        >
          <option value="string">String</option>
          <option value="number">Number</option>
          <option value="integer">Integer</option>
        </select>
      </label>
      <label>
        Key
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          onBlur={handleKeyChange}
          name="key"
        />
      </label>
      <label>
        Title
        <input
          type="text"
          value={property.title}
          onChange={(e) => handlePropertyChange(e)}
          name="title"
        />
      </label>
      <label>
        Description
        <input
          type="text"
          value={property.description}
          onChange={(e) => handlePropertyChange(e)}
          name="description"
        />
      </label>
      {/* TODO: throws warning "a component is changing an uncontrolled input to be controlled" */}
      <label>
        Default
        <input
          type={defaultType}
          value={property.default as any}
          onChange={(e) => handlePropertyChange(e)}
          name="default"
        />
      </label>
      {isNumberOrString && (
        <>
          <label>
            Minimum {MinMaxLengthSuffix}
            <input
              type="number"
              value={property.minimum}
              onChange={(e) => handlePropertyChange(e)}
              name="minimum"
            />
          </label>
          <label>
            Maximum {MinMaxLengthSuffix}
            <input
              type="number"
              value={property.maximum}
              onChange={(e) => handlePropertyChange(e)}
              name="maximum"
            />
          </label>
        </>
      )}
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}
