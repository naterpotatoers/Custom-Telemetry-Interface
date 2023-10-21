import { useReducer } from "react";
import { MOCK_SCHEMA } from "../../mocks/formEditorMock";
import { schemaReducer } from "../../reducers";

export default function FormEditor() {
  const [schema, dispatch] = useReducer(schemaReducer, MOCK_SCHEMA);
  const properties = Object.keys(schema.properties);

  const handleNewProperty = () => {
    dispatch({
      type: "ADD_PROPERTY",
      key: Date.now().toString(),
      title: "",
      dataType: "string",
      description: "",
      default: "",
    });
  };

  const handleDelete = (key: string) => {
    dispatch({
      type: "DELETE_PROPERTY",
      key,
    });
  };

  return (
    <div>
      <h1>Form Editor</h1>
      <div>
        <button onClick={handleNewProperty}>Add new property</button>
      </div>
      <div>
        {properties.map((property) => {
          const isNumberOrInteger = ["number", "integer"].includes(
            schema.properties[property].type
          );
          const isString = schema.properties[property].type === "string";
          return (
            <div style={{ margin: "10px" }}>
              <label>
                Key:
                <input
                  type="text"
                  value={property}
                  onChange={() => {}}
                  name="key"
                />
              </label>
              <label>
                Title:
                <input
                  type="text"
                  value={schema.properties[property].title}
                  onChange={() => {}}
                  name="title"
                />
              </label>
              <label>
                Description:
                <input
                  type="text"
                  value={schema.properties[property].description}
                  onChange={() => {}}
                  name="description"
                />
              </label>
              <label>
                Data Type:
                <select
                  value={schema.properties[property].type}
                  onChange={() => {}}
                  name="dataType"
                >
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
                Default:
                <input
                  type="text"
                  value={schema.properties[property].default}
                  onChange={() => {}}
                  name="default"
                />
              </label>
              {isNumberOrInteger && (
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
              {isString && (
                <>
                  <label>
                    Minimum Length:
                    <input type="number" id="minLength" name="minLength" />
                  </label>
                  <label>
                    Maximum Length:
                    <input type="number" id="maxLength" name="maxLength" />
                  </label>
                </>
              )}
              <button onClick={() => handleDelete(property)}>Delete</button>
            </div>
          );
        })}
      </div>
      <pre>{JSON.stringify(schema, null, 2)}</pre>
    </div>
  );
}
