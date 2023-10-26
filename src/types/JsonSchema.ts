export type Schema = {
  $id: string;
  $schema: string;
  title: string;
  type: string;
  properties: {
    [key: string]: SchemaProperty;
  };
};

export type SchemaProperty = {
  title: string;
  type: string;
  description: string;
  default: string | number;
  minimum?: number;
  maximum?: number;
};

export type PropertyField = SchemaProperty & {
  id: string;
  value: string | number;
};
