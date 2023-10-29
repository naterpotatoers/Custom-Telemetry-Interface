import React, { useState } from "react";
import { SchemaProperty } from "../../../types";
import { getType } from "../../../util/mutators";

export default function AddProperty({
  dispatch,
  openNewPropertyDialog,
  setOpenNewPropertyDialog,
}: {
  dispatch: React.Dispatch<any>;
  openNewPropertyDialog: boolean;
  setOpenNewPropertyDialog: (isOpen: boolean) => void;
}) {
  const [data, setData] = useState<SchemaProperty & { key: string }>({
    key: "",
    type: "",
    title: "",
    description: "",
    default: "",
    minimum: 0,
    maximum: 0,
  });

  function handleClose() {
    setData({
      key: "",
      type: "",
      title: "",
      description: "",
      default: "",
      minimum: 0,
      maximum: 0,
    });
    setOpenNewPropertyDialog(false);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function addNewProperty() {
    dispatch({
      type: "ADD_PROPERTY",
      key: data.key,
      title: data.title,
      dataType: data.type,
      description: data.description,
      default: data.default,
      minimum: data.minimum,
      maximum: data.maximum,
    });
    setData({
      key: "",
      type: "",
      title: "",
      description: "",
      default: "",
      minimum: 0,
      maximum: 0,
    });
    setOpenNewPropertyDialog(false);
  }

  const minMaxSuffix = data.type === "string" ? "Length" : "Value";

  return (
    <dialog open={openNewPropertyDialog}>
      <div>
        <h2>Add New Property</h2>
        <button onClick={handleClose}>Close</button>
      </div>
      <label>
        Type
        <select value={data.type} onChange={handleChange} name="type">
          <option value="string">String</option>
          <option value="number">Number</option>
          <option value="integer">Integer</option>
        </select>
      </label>
      <label>
        New Property Key
        <input
          type="text"
          value={data.key}
          onChange={handleChange}
          name="key"
        />
      </label>
      <label>
        Title
        <input
          type="text"
          value={data.title}
          onChange={handleChange}
          name="title"
        />
      </label>
      <label>
        Description
        <input
          type="text"
          value={data.description}
          onChange={handleChange}
          name="description"
        />
      </label>
      <label>
        Default
        <input
          type={getType(data.type)}
          value={data.default as any}
          onChange={handleChange}
          name="default"
        />
      </label>
      <label>
        Minimum {minMaxSuffix}
        <input
          type="number"
          value={data.minimum}
          onChange={handleChange}
          name="minimum"
        />
      </label>
      <label>
        Maximum {minMaxSuffix}
        <input
          type="number"
          value={data.maximum}
          onChange={handleChange}
          name="maximum"
        />
      </label>
      <button
        onClick={() => {
          addNewProperty();
        }}
      >
        Add Property
      </button>
    </dialog>
  );
}
