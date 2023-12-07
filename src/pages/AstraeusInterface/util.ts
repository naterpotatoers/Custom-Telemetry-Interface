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
  gyro_x,
  gyro_y,
  gyro_z,
}: {
  gyro_x: number;
  gyro_y: number;
  gyro_z: number;
}): number {
  const roll = Math.atan2(gyro_y, Math.sqrt(gyro_x * gyro_x + gyro_z * gyro_z));
  return roll;
}
// TODO: have someone who knows what they're doing look at this
export function getPitch({
  gyro_x,
  gyro_y,
  gyro_z,
}: {
  gyro_x: number;
  gyro_y: number;
  gyro_z: number;
}): number {
  const pitch = Math.atan2(
    gyro_x,
    Math.sqrt(gyro_y * gyro_y + gyro_z * gyro_z)
  );
  return pitch;
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
  const yaw = Math.atan2(mag_y, Math.sqrt(mag_x * mag_x + mag_z * mag_z));
  return yaw;
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
