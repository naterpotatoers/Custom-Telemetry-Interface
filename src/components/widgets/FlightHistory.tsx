export default function FlightHistory({ historyData }: any) {
  return (
    <>
      <h2>Flight History</h2>
      <div className="grid-auto-fit">
        <div className="card">
          <h3>Barometer</h3>
          <pre>{JSON.stringify(historyData.barometer, null, 2)}</pre>
        </div>
        <div className="card">
          <h3>Heading</h3>
          <pre>{JSON.stringify(historyData.heading, null, 2)}</pre>
        </div>
        <div className="card">
          <h3>IMU Temperature</h3>
          <pre>{JSON.stringify(historyData.imu_temperature, null, 2)}</pre>
        </div>
        <div className="card">
          <h3>GPS</h3>
          <pre>{JSON.stringify(historyData.gps, null, 2)}</pre>
        </div>
      </div>
    </>
  );
}
