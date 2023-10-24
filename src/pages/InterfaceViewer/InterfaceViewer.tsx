import { useState } from "react";
import { JsonSchema, JsonSchemaPropertyInputField } from "../../types";
import { getJsonSchemaPropertyInputFields } from "../../util";
import { MOCK_SCHEMA_STATE } from "../../mocks";

export default function InterfaceViewer({ schema }: { schema: JsonSchema }) {
  const [data, setData] =
    useState<Array<JsonSchemaPropertyInputField>>(MOCK_SCHEMA_STATE);

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Interface Viewer</h1>
      <div></div>
    </div>
  );
}
