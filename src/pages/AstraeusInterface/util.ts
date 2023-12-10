import { AstraeusType } from "../../types";

export type HistoryType = {
  roll: number[];
  pitch: number[];
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

export function getHistoryData(history: AstraeusType[]): HistoryType {
  return history.reduce(
    (acc: HistoryType, curr: AstraeusType) => {
      acc.pitch.push(curr.pitch);
      acc.roll.push(curr.roll);
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
      pitch: [],
      roll: [],
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
