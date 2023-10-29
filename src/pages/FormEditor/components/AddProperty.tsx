import React from "react";

export default function AddProperty() {
  return (
    <dialog>
      <label>
        New Property Key
        <input type="text" />
      </label>
      <label>
        New Property Type
        <select>
          <option value="string">String</option>
          <option value="number">Number</option>
          <option value="integer">Integer</option>
        </select>
      </label>
    </dialog>
  );
}
