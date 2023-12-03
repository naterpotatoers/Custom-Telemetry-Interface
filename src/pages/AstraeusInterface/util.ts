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
