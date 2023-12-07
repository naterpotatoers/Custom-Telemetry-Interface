import { useRef, useState } from "react";
import WifiButtons from "../InterfaceViewer/components/WifiButtons";
import { HalfAngleGauge } from "./components/AngleGauges";
import { MOCK_RESPONSE } from "../../mocks";
import { getHistoryData, getPitch, getRoll, getYaw } from "./util";
import { VerticalLinearGauge } from "./components/LinearGauges";
import { ResponseMock } from "../../mocks/ResponseMock";
import PrimaryFlightDisplay from "./components/PrimaryFlightDisplay";
import Map from "./components/Map";
import Compass from "./components/Compass";
import FlightHistory from "./components/FlightHistory";

export default function AstraeusInterface() {
  const [status, setStatus] = useState<ResponseMock>(MOCK_RESPONSE);
  const [history, setHistory] = useState<ResponseMock[]>([]);
  const message = useRef<any>("");

  const pitch = getPitch({
    accel_x: status.accel_x,
    accel_y: status.accel_y,
    accel_z: status.accel_z,
  });

  const roll = getRoll({
    accel_y: status.accel_y,
    accel_z: status.accel_z,
  });

  const yaw = getYaw({
    mag_x: status.magnetometer_x,
    mag_y: status.magnetometer_y,
  });

  return (
    <div className="section">
      <div className="flex-header">
        <h1>Astraeus Interface</h1>
        <div>
          <WifiButtons
            setStatus={setStatus}
            setHistory={setHistory}
            message={message}
          />
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
                min={0}
              />
              <VerticalLinearGauge
                max={40}
                min={0}
                value={status.barometer_temperature}
                title="Barometer"
              />
            </div>
          </div>
          <div className="card">
            <h3>Motion</h3>
            <div className="grid-col-3">
              <HalfAngleGauge value={roll} title="Roll" min={-90} max={90} />
              <HalfAngleGauge value={pitch} title="Pitch" min={-90} max={90} />
              <HalfAngleGauge value={yaw} title="Yaw" min={-90} max={90} />
            </div>
          </div>
          <div className="card">
            <h3>Barometer</h3>
            <div className="grid-col-2">
              <VerticalLinearGauge
                value={status.barometer_pressure}
                max={200000}
                min={0}
                title="Pressure"
              />
              <VerticalLinearGauge
                value={status.barometer_altitude}
                title="Altitude"
                min={0}
                max={300}
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
        <FlightHistory historyData={getHistoryData(history)} />
      </div>
    </div>
  );
}
