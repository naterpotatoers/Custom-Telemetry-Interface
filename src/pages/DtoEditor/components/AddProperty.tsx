import React, { useState } from "react";
import { SchemaProperty } from "../../../types";
import { convertSchemaTypeToInputType } from "../../../util/mutators";

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
      <div className="flex-header">
        <h2>Add New Property</h2>
        <button type="button" className="close-btn" onClick={handleClose}>
          &times;
        </button>
      </div>
      <div className='flex-spaced'>
      <label className="form-input">
          Key
          <input
            type="text"
            value={data.key}
            onChange={handleChange}
            name="key"
          />
        </label>
        <label className="form-input">
          Type
          <select value={data.type} onChange={handleChange} name="type">
            <option value="string">String</option>
            <option value="number">Number</option>
            <option value="integer">Integer</option>
          </select>
        </label>
        <label className="form-input">
          Title
          <input
            type="text"
            value={data.title}
            onChange={handleChange}
            name="title"
          />
        </label>
        <label className="form-input">
          Default
          <input
            type={convertSchemaTypeToInputType(data.type)}
            value={data.default as any}
            onChange={handleChange}
            name="default"
          />
        </label>
        <label className="form-input">
          Minimum {minMaxSuffix}
          <input
            type="number"
            value={data.minimum}
            onChange={handleChange}
            name="minimum"
          />
        </label>
        <label className="form-input">
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
      </div>
    </dialog>
  );
}
