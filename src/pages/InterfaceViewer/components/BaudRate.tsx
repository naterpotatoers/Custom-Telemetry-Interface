import { ChangeEvent, useState } from "react";

export default function BaudRate() {
  const [baudRate, setBaudRate] = useState<number>(9600);
  const [customBaudRate, setCustomBaudRate] = useState<number>(9600);

  function handleBaudRateChange(e: ChangeEvent<HTMLSelectElement>) {
    setBaudRate(parseInt(e.target.value));
  }

  function handleCustomBaudRateChange(e: ChangeEvent<HTMLInputElement>) {
    setCustomBaudRate(parseInt(e.target.value));
  }

  return (
    <div className="custom-dropdown-input-selector">
      <label htmlFor="baudrate">baudrate</label>
      <input
        id="baudrate-input"
        type="number"
        hidden={baudRate !== 0}
        value={customBaudRate}
        onChange={handleCustomBaudRateChange}
      />
      <select
        id="baudrate"
        className="custom-dropdown-selector"
        // onClick={handleBaudRateChange}
      >
        <option value={9600}>9600</option>
        <option value={38400}>38400</option>
        <option value={115200}>115200</option>
        <option value={512000}>512000</option>
        <option value={1000000}>1000000</option>
        <option value={2000000}>2000000</option>
        <option value={3000000}>3000000</option>
        <option value={0}>Custom</option>
      </select>
    </div>
  );
}
