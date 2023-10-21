import { useState } from "react";
import { JsonSchemaProperty } from "../../../types";

function StringField() {
  return (
    <>
      <label>
        Key:
        <input type="text" id="key" name="key" />
      </label>
      <label>
        Title:
        <input type="text" id="title" name="title" />
      </label>
      <label>
        Description:
        <input type="text" id="description" name="description" />
      </label>
      <label>
        Default:
        <input type="text" id="default" name="default" />
      </label>
      <label>
        Minimum Length:
        <input type="number" id="minLength" name="minLength" />
      </label>
      <label>
        Maximum Length:
        <input type="number" id="maxLength" name="maxLength" />
      </label>
    </>
  );
}

function NumberField() {
  return (
    <>
      <label>
        Key:
        <input type="text" id="key" name="key" />
      </label>
      <label>
        Title:
        <input type="text" id="title" name="title" />
      </label>
      <label>
        Description:
        <input type="text" id="description" name="description" />
      </label>
      <label>
        Default:
        <input type="number" id="default" name="default" />
      </label>
      <label>
        Minimum:
        <input type="number" id="minimum" name="minimum" />
      </label>
      <label>
        Maximum:
        <input type="number" id="maximum" name="maximum" />
      </label>
    </>
  );
}

function IntegerField() {
  return (
    <>
      <label>
        Key:
        <input type="text" id="key" name="key" />
      </label>
      <label>
        Title:
        <input type="text" id="title" name="title" />
      </label>
      <label>
        Description:
        <input type="text" id="description" name="description" />
      </label>
      <label>
        Default:
        <input type="number" id="default" name="default" />
      </label>
      <label>
        Minimum:
        <input type="number" id="minimum" name="minimum" />
      </label>
      <label>
        Maximum:
        <input type="number" id="maximum" name="maximum" />
      </label>
    </>
  );
}

function ObjectField() {
  return (
    <>
      <label>
        Key:
        <input type="text" id="key" name="key" />
      </label>
      <label>
        Title:
        <input type="text" id="title" name="title" />
      </label>
      <label>
        Description:
        <input type="text" id="description" name="description" />
      </label>
      <label>
        Default:
        <input type="number" id="default" name="default" />
      </label>
      <label>
        Minimum:
        <input type="number" id="minimum" name="minimum" />
      </label>
      <label>
        Maximum:
        <input type="number" id="maximum" name="maximum" />
      </label>
    </>
  );
}

function ArrayField() {
  return (
    <>
      <label>
        Key:
        <input type="text" id="key" name="key" />
      </label>
      <label>
        Title:
        <input type="text" id="title" name="title" />
      </label>
      <label>
        Description:
        <input type="text" id="description" name="description" />
      </label>
      <label>
        Default:
        <input type="number" id="default" name="default" />
      </label>
      <label>
        Minimum:
        <input type="number" id="minimum" name="minimum" />
      </label>
      <label>
        Maximum:
        <input type="number" id="maximum" name="maximum" />
      </label>
    </>
  );
}

function BooleanField() {
  return (
    <>
      <label>
        Key:
        <input type="text" id="key" name="key" />
      </label>
      <label>
        Title:
        <input type="text" id="title" name="title" />
      </label>
      <label>
        Description:
        <input type="text" id="description" name="description" />
      </label>
      <label>
        Default:
        <input type="checkbox" id="default" name="default" />
      </label>
    </>
  );
}

function NullField() {
  return (
    <>
      <label>
        Key:
        <input type="text" id="key" name="key" />
      </label>
      <label>
        Title:
        <input type="text" id="title" name="title" />
      </label>
      <label>
        Description:
        <input type="text" id="description" name="description" />
      </label>
    </>
  );
}

export default function DtoField(
  key: string,
  property: JsonSchemaProperty
) {
  const formField = () => {
    switch (property.type) {
      case "string":
        return <StringField />;
      case "number":
        return <NumberField />;
      case "integer":
        return <IntegerField />;
      case "object":
        return <ObjectField />;
      case "array":
        return <ArrayField />;
      case "boolean":
        return <BooleanField />;
      case "null":
        return <NullField />;
    }
  };

  return (
    <form>
      <label>
        Data Type:
        <select
          id="dataType"
          name="dataType"
          value={property.type}
          onChange={() => {}}
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
      {formField()}
    </form>
  );
}
