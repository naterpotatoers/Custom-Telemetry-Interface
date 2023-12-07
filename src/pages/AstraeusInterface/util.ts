import { ResponseMock } from "../../mocks/ResponseMock";

export type HistoryType = {
  accelerometer: {
    x: number[];
    y: number[];
    z: number[];
  };
  gyroscope: {
    x: number[];
    y: number[];
    z: number[];
  };
  magnetometer: {
    x: number[];
    y: number[];
    z: number[];
  };
  heading: number[];
  imu_temperature: number[];
  barometer: {
    temperature: number[];
    pressure: number[];
    altitude: number[];
  };
  gps: {
    latitude: number[];
    longitude: number[];
    altitude: number[];
  };
};

// TODO: have someone who knows what they're doing look at this
export function getRoll({
  accel_x,
  accel_y,
  accel_z,
}: {
  accel_x: number;
  accel_y: number;
  accel_z: number;
}): number {
  const roll = Math.atan2(-accel_y, accel_z);
  const rollDegrees = roll * (180 / Math.PI);
  return -rollDegrees;
}
// TODO: have someone who knows what they're doing look at this
export function getPitch({
  accel_x,
  accel_y,
  accel_z,
}: {
  accel_x: number;
  accel_y: number;
  accel_z: number;
}): number {
  const pitch = Math.atan2(-accel_x, Math.sqrt(accel_y * accel_y + accel_z * accel_z));
  const pitchDegrees = pitch * (180 / Math.PI);
  return -pitchDegrees;
}
// TODO: have someone who knows what they're doing look at this
export function getYaw({
  mag_x,
  mag_y,
  mag_z,
}: {
  mag_x: number;
  mag_y: number;
  mag_z: number;
}): number {
  const yaw = Math.atan2(-mag_y, mag_x);
  const yawDegrees = yaw * (180 / Math.PI);
  return yawDegrees;
}

export function getHistoryData(history: ResponseMock[]): HistoryType {
  return history.reduce(
    (acc: HistoryType, curr: ResponseMock) => {
      acc.accelerometer.x.push(curr.accel_x);
      acc.accelerometer.y.push(curr.accel_y);
      acc.accelerometer.z.push(curr.accel_z);
      acc.gyroscope.x.push(curr.gyro_x);
      acc.gyroscope.y.push(curr.gyro_y);
      acc.gyroscope.z.push(curr.gyro_z);
      acc.magnetometer.x.push(curr.magnetometer_x);
      acc.magnetometer.y.push(curr.magnetometer_y);
      acc.magnetometer.z.push(curr.magnetometer_z);
      acc.heading.push(curr.heading);
      acc.imu_temperature.push(curr.imu_temperature);
      acc.barometer.temperature.push(curr.barometer_temperature);
      acc.barometer.pressure.push(curr.barometer_pressure);
      acc.barometer.altitude.push(curr.barometer_altitude);
      acc.gps.latitude.push(curr.gps_latitude);
      acc.gps.longitude.push(curr.gps_longitude);
      acc.gps.altitude.push(curr.gps_altitude);
      return acc;
    },
    {
      accelerometer: {
        x: [],
        y: [],
        z: [],
      },
      gyroscope: {
        x: [],
        y: [],
        z: [],
      },
      magnetometer: {
        x: [],
        y: [],
        z: [],
      },
      heading: [],
      imu_temperature: [],
      barometer: {
        temperature: [],
        pressure: [],
        altitude: [],
      },
      gps: {
        latitude: [],
        longitude: [],
        altitude: [],
      },
    }
  );
}
