import { ChangeEvent } from "react";
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
  const isNumberOrString = ["number", "integer", "string"].includes(
    property.type
  );

  const handleDelete = () => {
    dispatch({
      type: "DELETE_PROPERTY",
      key: propertyKey,
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // TODO: this is not working - need to figure out how to update the property
    // dispatch({
    //   type: "UPDATE_PROPERTY",
    //   key: propertyKey,
    //   [e.target.name]: e.target.value,
    // });
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
        <input type="text" value={propertyKey} onChange={() => {}} name="key" />
      </label>
      <label>
        Title:
        <input
          type="text"
          value={property.title}
          onChange={() => {}}
          name="title"
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={property.description}
          onChange={(e) => handleChange(e)}
          name="description"
        />
      </label>
      <label>
        Default:
        <input
          type="text"
          value={property.default.toString()} // TODO: verify that this works fine
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
