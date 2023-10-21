import { JsonSchemaProperty } from "../../../types";

export default function PropertyCard({
  propertyKey,
  property,
  handleDelete,
}: {
  propertyKey: string;
  property: JsonSchemaProperty;
  handleDelete: (key: string) => void;
}) {
  const isNumberOrString = ["number", "integer", "string"].includes(
    property.type
  );
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
          onChange={() => {}}
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
            <input type="number" id="minimum" name="minimum" />
          </label>
          <label>
            Maximum:
            <input type="number" id="maximum" name="maximum" />
          </label>
        </>
      )}
      <button onClick={() => handleDelete(propertyKey)}>Delete</button>
    </>
  );
}
