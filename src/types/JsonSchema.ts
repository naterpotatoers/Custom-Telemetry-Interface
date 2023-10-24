export type JsonSchema = {
  $id: string;
  $schema: string;
  title: string;
  type: string;
  properties: {
    [key: string]: JsonSchemaProperty;
  };
};

export type JsonSchemaProperty = {
  title: string;
  type: string;
  description: string;
  default: string | number | boolean;
  minimum?: number;
  maximum?: number;
};

export type JsonSchemaPropertyInputField = JsonSchemaProperty & {
  id: string;
  value: string | number | boolean;
};
