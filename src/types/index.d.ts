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


export type AstraeusType = {
    roll: number;
    pitch: number;
    heading: number;
    imu_temperature: number;
    barometer_temperature: number;
    barometer_pressure: number;
    barometer_altitude: number;
    gps_latitude: number;
    gps_longitude: number;
    gps_satellite_count: number;
    gps_altitude: number;
    gps_time: number;
  };