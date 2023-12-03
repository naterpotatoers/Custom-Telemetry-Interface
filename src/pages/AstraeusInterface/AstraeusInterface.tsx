import { useRef, useState } from "react";
import WifiButtons from "../InterfaceViewer/components/WifiButtons";
import { HalfAngleGauge } from "./components/AngleGauges";
import { MOCK_RESPONSE } from "../../mocks";
import { getPitch, getRoll, getYaw } from "./util";
import { VerticalLinearGauge } from "./components/LinearGauges";
import { Widget } from "./components/Widget";
import { ResponseMock } from "../../mocks/ResponseMock";
import PrimaryFlightDisplay from "./components/PrimaryFlightDisplay";
import Map from "./components/Map";

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
        <h2>Astraeus Interface</h2>
        <div>
          <WifiButtons setStatus={setStatus} message={message} />
        </div>
      </div>
      <div className="flex-spaced">
        <pre>Response: {JSON.stringify(status, null, 2)}</pre>
        <Map latitude={status.gps_latitude} longitude={status.gps_longitude} />
        <Widget title="Motion">
          <HalfAngleGauge value={pitch} title="Roll" gauge={"#5EE05C"} />
          <HalfAngleGauge value={roll} title="Pitch" max={2} />
          <HalfAngleGauge value={yaw} title="Yaw" />
        </Widget>

        <PrimaryFlightDisplay roll={roll} pitch={pitch} />

        <VerticalLinearGauge
          value={status.imu_temperature}
          title="IMU Temperature"
          max={50}
        />
        <Widget title="Barometer">
          <VerticalLinearGauge
            max={40}
            min={10}
            value={status.barometer_temperature}
            title="Temperature"
          />
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
        </Widget>
      </div>
    </div>
  );
}
