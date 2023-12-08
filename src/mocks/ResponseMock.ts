export type ResponseMock = {
  // accel_x: number;
  // accel_y: number;
  // accel_z: number;
  // gyro_x: number;
  // gyro_y: number;
  // gyro_z: number;
  // magnetometer_x: number;
  // magnetometer_y: number;
  // magnetometer_z: number;
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

export const MOCK_RESPONSE = {
  // accel_x: 0.0,
  // accel_y: 0.0,
  // accel_z: 0.0,
  // gyro_x: 0.0,
  // gyro_y: 0.0,
  // gyro_z: 0.0,
  // magnetometer_x: 0.0,
  // magnetometer_y: 0.0,
  // magnetometer_z: 0.0,
  roll: 0.0,
  pitch: 0.0,
  heading: 0.0,
  imu_temperature: 0.0,
  barometer_temperature: 0.0,
  barometer_pressure: 0.0,
  barometer_altitude: 0.0,
  gps_latitude: 37.33683017472986,
  gps_longitude: -121.88141940347845,
  gps_satellite_count: 0,
  gps_altitude: 0.0,
  gps_time: 0.0,
};

export const MOCK_RESPONSE_ARRAY: ResponseMock[] = [
  {
    // accel_x: -0.00293,
    // accel_y: -0.002197,
    // accel_z: 1.015381,
    // gyro_x: 0.984192,
    // gyro_y: -0.312805,
    // gyro_z: 0.015259,
    // magnetometer_x: -3.863354,
    // magnetometer_y: 0.929701,
    // magnetometer_z: 5.573334,
    roll: 2.87601,
    pitch: 12.44892,
    heading: 100.530731,
    imu_temperature: 26.319435,
    barometer_temperature: 22.8125,
    barometer_pressure: 102090.5,
    barometer_altitude: 76.8125,
    gps_latitude: 37.33683017472986,
    gps_longitude: -121.88141940347845,
    gps_satellite_count: 100000000,
    gps_altitude: 10.0,
    gps_time: 0.0,
  },
  {
    roll: 2.87601,
    pitch: 12.44892,
    heading: 110.530731,
    imu_temperature: 26.319435,
    barometer_temperature: 22.8125,
    barometer_pressure: 102090.5,
    barometer_altitude: 76.8125,
    gps_latitude: 37.33683017472986,
    gps_longitude: -121.88141940347845,
    gps_satellite_count: 100000000,
    gps_altitude: 11.0,
    gps_time: 0.0,
  },
  {
    roll: 2.87601,
    pitch: 12.44892,
    heading: 120.530731,
    imu_temperature: 26.319435,
    barometer_temperature: 22.8125,
    barometer_pressure: 102090.5,
    barometer_altitude: 76.8125,
    gps_latitude: 37.33683017472986,
    gps_longitude: -121.88141940347845,
    gps_satellite_count: 100000000,
    gps_altitude: 0.0,
    gps_time: 12.0,
  },
  {
    roll: 2.87601,
    pitch: 12.44892,
    heading: 130.530731,
    imu_temperature: 26.319435,
    barometer_temperature: 22.8125,
    barometer_pressure: 102090.5,
    barometer_altitude: 76.8125,
    gps_latitude: 37.33683017472986,
    gps_longitude: -121.88141940347845,
    gps_satellite_count: 100000000,
    gps_altitude: 0.0,
    gps_time: 15.0,
  },
  {
    roll: 2.87601,
    pitch: 12.44892,
    heading: 170.530731,
    imu_temperature: 26.319435,
    barometer_temperature: 22.8125,
    barometer_pressure: 102090.5,
    barometer_altitude: 76.8125,
    gps_latitude: 37.33683017472986,
    gps_longitude: -121.88141940347845,
    gps_satellite_count: 100000000,
    gps_altitude: 0.0,
    gps_time: 16.0,
  },
  {
    roll: 2.87601,
    pitch: 12.44892,
    heading: 150.530731,
    imu_temperature: 26.319435,
    barometer_temperature: 22.8125,
    barometer_pressure: 102090.5,
    barometer_altitude: 76.8125,
    gps_latitude: 37.33683017472986,
    gps_longitude: -121.88141940347845,
    gps_satellite_count: 100000000,
    gps_altitude: 0.0,
    gps_time: 21.0,
  },
];
