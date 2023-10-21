import React from "react";
import { JsonSchemaProperty } from "../../../types";

export default function PropertyCard(
  key: string,
  property: JsonSchemaProperty
) {
  return (
    <div>
      <h1>
        {property.title} {key}
      </h1>
    </div>
  );
}
