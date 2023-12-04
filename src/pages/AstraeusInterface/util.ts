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
