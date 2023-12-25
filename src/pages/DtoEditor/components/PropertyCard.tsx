import { ChangeEvent, useState } from "react";
import { SchemaProperty } from "../../../types";
import { convertSchemaTypeToInputType } from "../../../util/mutators";

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
  const minMaxSuffix = property.type === "string" ? "Length" : "Value";

  const handleDelete = () => {
    dispatch({
      type: "DELETE_PROPERTY",
      key: propertyKey,
    });
  };

  const handleKeyChange = () => {
    dispatch({
      type: "UPDATE_KEY",
      oldKey: propertyKey,
      newKey: key,
    });
  };

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: "UPDATE_TYPE",
      key: propertyKey,
      propertyType: e.target.value,
    });
  };

  const handlePropertyChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "UPDATE_FIELD",
      key: propertyKey,
      name: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <>
      <div className="flex-header">
        <h2>{property.title}</h2>
        <button type="button" className="close-btn" onClick={handleDelete}>
          &times;
        </button>
      </div>
      <div className="grid-col-3">
        <label className="form-input">
          Key
          <input
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            onBlur={handleKeyChange}
            name="key"
          />
        </label>
        <label className="form-input">
          Title
          <input
            type="text"
            value={property.title}
            onChange={(e) => handlePropertyChange(e)}
            name="title"
          />
        </label>
        <label className="form-input">
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
      </div>
      <div className="grid-col-3">
        <label className="form-input">
          Default
          <input
            type={convertSchemaTypeToInputType(property.type)}
            value={property.default as any}
            onChange={(e) => handlePropertyChange(e)}
            name="default"
          />
        </label>
        <label className="form-input">
          Minimum {minMaxSuffix}
          <input
            type="number"
            value={property.minimum}
            onChange={(e) => handlePropertyChange(e)}
            name="minimum"
          />
        </label>
        <label className="form-input">
          Maximum {minMaxSuffix}
          <input
            type="number"
            value={property.maximum}
            onChange={(e) => handlePropertyChange(e)}
            name="maximum"
          />
        </label>
      </div>
    </>
  );
}
