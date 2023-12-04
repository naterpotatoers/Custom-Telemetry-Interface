import { useRef, useState } from "react";
import WifiButtons from "../InterfaceViewer/components/WifiButtons";
import { HalfAngleGauge } from "./components/AngleGauges";
import { MOCK_RESPONSE } from "../../mocks";
import { getPitch, getRoll, getYaw } from "./util";
import { VerticalLinearGauge } from "./components/LinearGauges";
import { ResponseMock } from "../../mocks/ResponseMock";
import PrimaryFlightDisplay from "./components/PrimaryFlightDisplay";
import Map from "./components/Map";
import Compass from "./components/Compass";

export default function AstraeusInterface() {
  const [status, setStatus] = useState<ResponseMock>(MOCK_RESPONSE);
  const message = useRef<any>("");

  const pitch = getPitch({
    gyro_x: status.gyro_x,
    gyro_y: status.gyro_y,
    gyro_z: status.gyro_z,
  });

  const roll = getRoll({
    gyro_x: status.gyro_x,
    gyro_y: status.gyro_y,
    gyro_z: status.gyro_z,
  });

  const yaw = getYaw({
    mag_x: status.magnetometer_x,
    mag_y: status.magnetometer_y,
    mag_z: status.magnetometer_z,
  });

  return (
    <div className="section">
      <div className="flex-header">
        <h1>Astraeus Interface</h1>
        <div>
          <WifiButtons setStatus={setStatus} message={message} />
        </div>
      </div>
      <div className="section">
        <div className="grid-auto-fit">
          <div className="card">
            <h3>Compass</h3>
            <Compass heading={status.heading} />
          </div>
          <div className="card">
            <h3>Temperature</h3>
            <div className="grid-col-2">
              <VerticalLinearGauge
                value={status.imu_temperature}
                title="IMU"
                max={50}
              />
              <VerticalLinearGauge
                max={40}
                min={10}
                value={status.barometer_temperature}
                title="Barometer"
              />
            </div>
          </div>
          <div className="card">
            <h3>Motion</h3>
            <div className="grid-col-3">
              <HalfAngleGauge value={pitch} title="Roll" min={-2} max={2} />
              <HalfAngleGauge value={roll} title="Pitch" min={-2} max={2} />
              <HalfAngleGauge value={yaw} title="Yaw" min={-2} max={2} />
            </div>
          </div>
          <div className="card">
            <h3>Barometer</h3>
            <div className="grid-col-2">
              <VerticalLinearGauge
                value={status.barometer_pressure}
                max={200000}
                min={10000}
                title="Pressure"
              />
              <VerticalLinearGauge
                value={status.barometer_altitude}
                title="Altitude"
              />
            </div>
          </div>
        </div>

        <div className="grid-auto-fit">
          <div className="card">
            <h3>Map</h3>
            <Map
              latitude={status.gps_latitude}
              longitude={status.gps_longitude}
            />
          </div>
          <div className="card">
            <h3>Flight Display</h3>
            <PrimaryFlightDisplay roll={roll} pitch={pitch} />
          </div>
        </div>
      </div>
    </div>
  );
}
